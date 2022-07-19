# Node.js Streaming Server-Side Rendering

## TL:DR

-   React can be a lost faster than client side rendering.
-   Straming enables page performance to stay constant.
-   We need to think our page as separately renderable pieces.
-   The scenario is usually **high performance server** and **lower performace client browser/device** and **slow network**

### Review the rendering work flow

![](/img/web-dev/8-ssr-stream/rendering.png)

## Intro - Different Types of Rendering Flow

![](/img/web-dev/8-ssr-stream/rendering-methods.png)

-   see more on [Rendering on the Web](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)

### 1. Client Side Rendering

![](/img/web-dev/8-ssr-stream/client-side-rendering-flow.png)

1. client request
2. server returns small html with no info
3. client request doc header and request JS and CSS
4. client parse JS & CSS
5. client browser painting meanwhile request for data from API
6. API returns data
7. client use [ReactDOM.render()](https://reactjs.org/docs/react-dom.html#render) to revive the DOM once you have **both Javascript and JSON data**
8. client shows full page and become interactive

#### Pros and Cons

-   pros: no need dynamic server
-   cons: slow cuz jobs are done in serial
-   cons: slow cuz parsing javascript is expensive

### 2. Server Side Rendering

![](/img/web-dev/8-ssr-stream/server-side-rendering-flow.png)

1. client request
2. server return only HTML header to client
3. client request for JS and CSS based on HTML header
4. server meanwhile make request to API server
5. server load data on the server side and use [ReactDOMServer.renderToString()](https://reactjs.org/docs/react-dom-server.html#rendertostring) to create HTML markup
6. client parsing JS and CSS
7. server send the data down in a script tag or via HTTP/2 Server Push. (**first contentful paint**)
8. client become interactive when step 6 is done (**Time to Interactive**)

-   noted that:
    -   3 and 4 can be parallel
    -   5 and 6 can be parallel

#### Pros and Cons

-   pros: faster than client side rendering cuz job can be done in parallel
-   pros: faster than client side rendering cuz server usually has better performance than client
-   cons: needs dynamic web server
-   cons: Don't scale, [Time to Interactive](https://web.dev/interactive/) increase when more feature (JS and CSS) added on page.

---

## Terms

### [flush()](http://expressjs.com/en/resources/middleware/compression.html)

-   A res.flush method is added to force partially compressed response to be flushed to the client.

### [React.hydrate()](https://reactjs.org/docs/react-dom.html#hydrate)

-   Same as `render()`, but is used to hydrate a container whose HTML contents were rendered by ReactDOMServer. React will attempt to attach event listeners to the existing markup.

### Rehydration

-   “booting up” JavaScript views on the client such that they reuse the server-rendered HTML’s DOM tree and data.

### [ReactDOMServer.renderToNodeStream(element)](https://reactjs.org/docs/react-dom-server.html#rendertonodestream)

-   Returns a Readable stream that outputs an HTML string.
-   The HTML output by this stream is exactly equal to what [ReactDOMServer.renderToString](https://reactjs.org/docs/react-dom-server.html#rendertostring) would return.
-   The function will only work on the server to render HTML as a stream.
-   The client receiving this stream can subsequently call [ReactDOM.hydrate()](https://reactjs.org/docs/react-dom.html#hydrate) to hydrate the page and make it interactive.

---

## Streaming SSR

-   streaming implies chunks of HTML are streamed from the node server to the client as they are generated.
-   we need to break down each part of the page and send them to client respectively
-   overall process seems like multiple chunks of normal SSRs.
-   can combine with [progressive hydration](#progressive-hydration) to increase [Time to Interactive](https://web.dev/interactive/) on client side

### Normal SSR (top) v.s. Streaming SSR (bottom)

![](/img/web-dev/8-ssr-stream/ssr-vs-stream.png)

### Pros & Cons

-   pros: Fastest [First Contentful Paint](https://web.dev/first-contentful-paint/), fastest [Time to Interactive](https://web.dev/interactive/)
-   pros: As the page scales up in content and JS, above the fold load stays constant.
-   pros: More fault tolerant of misbehaving data service further down the page.
-   pros: Streaming enables Node.js server to render multiple requests at the same time and prevents heavier requests from blocking lighter requests for a long time.
-   cons: intra-page code splitting is complicated
-   cons: webpack doesn't yet support multiple CSS chunks for one entry chunk (2017 video, need to check)
-   cons: tricky to implement perfect optimization of resource loading

### Example: [GoogleChromeLabs/progressive-rendering-frameworks-samples](https://github.com/GoogleChromeLabs/progressive-rendering-frameworks-samples)

#### [react-streaming-ssr/app/server.js](https://github.com/GoogleChromeLabs/progressive-rendering-frameworks-samples/blob/master/react-streaming-ssr/app/server.js)

```jsx
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./components/app";

export default async function ssr({ streaming, ...props }) {
    if (streaming) {
        return ReactDOMServer.renderToNodeStream(<App {...props} />);
    } else {
        return ReactDOMServer.renderToString(<App {...props} />);
    }
}
```

#### [react-streaming-ssr/server.js](https://github.com/GoogleChromeLabs/progressive-rendering-frameworks-samples/blob/master/react-streaming-ssr/server.js)

```javascript
app.get("/streaming", async (request, response) => {
    try {
        const stream = await ssr({
            url: request.url,
        });
        // Wait until data starts flowing to send a 200 OK,
        // so errors don't trigger "headers already sent".
        const start = Date.now();
        stream.on("data", function handleData() {
            console.log("Render Start: ", Date.now() - start);
            stream.off("data", handleData);
            response.useChunkedEncodingByDefault = true;
            response.writeHead(200, {
                "content-type": "text/html",
                "content-transfer-encoding": "chunked",
                "x-content-type-options": "nosniff",
            });
            response.write(BEFORE);
            response.flushHeaders();
        });
        await new Promise((resolve, reject) => {
            stream.on("error", (err) => {
                stream.unpipe(response);
                reject(err);
            });
            stream.on("end", () => {
                console.log("Render End: ", Date.now() - start);
                response.write("</div></body></html>");
                response.end();
                resolve();
            });
            stream.pipe(response, { end: false });
        });
    } catch (err) {
        response.writeHead(500, {
            "content-type": "text/pain",
        });
        response.end(String((err && err.stack) || err));
        return;
    }
});
```

---

## Progressive Hydration

-   Purpose: to partially hydrate the content on the client or to **prioritize the content that needs to be hydrated**.
-   One popular way to achieve this is to wrap your component in the [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

### Pros

1. Reduce first Time-To-Interact on the client-side.
2. Reduce first paint time on the client-side.
3. Serve content faster to the user without the user noticing any difference.

### Example: [progressive-hydration](https://github.com/GoogleChromeLabs/progressive-rendering-frameworks-samples/tree/master/react-progressive-hydration)

-   [react-progressive-hydration/app/components/hydrator.js](https://github.com/GoogleChromeLabs/progressive-rendering-frameworks-samples/blob/master/react-progressive-hydration/app/components/hydrator.js)

```jsx
export class Hydrator extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        new IntersectionObserver(async ([entry], obs) => {
            if (!entry.isIntersecting) return;
            obs.unobserve(this.root);

            const { load, ...props } = this.props;
            const Child = interopDefault(await load());
            ReactDOM.hydrate(<Child {...props} />, this.root);
        }).observe(this.root);
    }

    render() {
        return (
            <section
                ref={(c) => (this.root = c)}
                dangerouslySetInnerHTML={{ __html: "" }}
                suppressHydrationWarning
            />
        );
    }
}
```

-   [react-progressive-hydration/app/components/app.js](https://github.com/GoogleChromeLabs/progressive-rendering-frameworks-samples/blob/master/react-progressive-hydration/app/components/app.js)

```jsx
export default function App() {
    return (
        <div id="app">
            <Header />

            <Intro />

            {/* <Stream flush={flushing} /> */}
            <Hydrator load={load} />
        </div>
    );
}
```

---

## Ndoe.js Stream

-   [Stream Into the Future (NodeJS Streams)](https://youtu.be/aTEDCotcn20)
-   [All You Need To Know About Node JS Stream In Detail](https://www.esparkinfo.com/node-js-stream-in-detail.html)

    //TODO

## Reference

-   [Rendering on the Web](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)
-   [Streaming Server-Side Rendering](https://www.patterns.dev/posts/ssr/)
-   [How Streaming Can Supercharge React - Sasha Aickin aka @xander76 at ReactEurope 2017](https://youtu.be/UhdGiVy3_Nk)
-   [Stream Into the Future (NodeJS Streams)](https://youtu.be/aTEDCotcn20)
-   [All You Need To Know About Node JS Stream In Detail](https://www.esparkinfo.com/node-js-stream-in-detail.html)
