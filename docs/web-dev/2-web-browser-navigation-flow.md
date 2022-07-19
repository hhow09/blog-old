# Browser Navigation Flow

## Review Browser Architecture

![browser architecture](/img/web-dev/2-web-browser-navigation-flow/browser-architecture.png)

### Browser Process

#### consists of

- UI thread
- network thread

#### control

- `Chrome` part of the application including `address bar`, `bookmarks`, `back and forward buttons`.

### Renderer Process

#### consists of

- Main thread
- worker thread

#### control

- anything inside of the `tab` where a website is displayed.

### GPU Process(s)

#### Control

- Handles GPU tasks in isolation from other processes.

### Reference

- [Which process controls what?](https://developers.google.com/web/updates/2018/09/inside-browser-part1)

---

## What happens when we visit google.com?

### W3C 5.1 Processing Model

> This illustration is non-normative.

> The following graph illustrates the timing attributes defined by the PerformanceTiming interface and the PerformanceNavigation interface with or without redirect, respectively. Attributes underlined may not be available in navigation involving documents from different origins. User agents may perform internal processing in between timings, which allow for non-normative intervals between timings.

![navigation timing](/img/web-dev/2-web-browser-navigation-flow/navigation-timimng.png)

### Browser process: Handling Input

- Handling Input: `UI thread` needs to parse and decide whether to send you to a search engine, or to the site you requested.
- Start navigation:`UI thread` initiates a network call to get site content.
- DNS Lookup: `network thread` initiates DNS lookup.

### DNS lookup

- Check Cache: Browser check `browser’s local cache` and `computer's DNS cache` if there is already IP address saved.
- If No Cache, the query travels into the Internet and is received by a DNS recursive resolver.
- The resolver then queries a DNS root nameserver (.).
- The root server then responds to the resolver with the address of a `Top Level Domain (TLD)` DNS server (such as .com or .net), which stores the information for its domains. When searching for `example.com`, our request is pointed toward the .com TLD.
- The resolver then makes a request to the `.com` TLD.
- The TLD server then responds with the IP address of the domain’s nameserver, `example.com`.
- Lastly, the recursive resolver sends a query to the domain’s nameserver.
- The IP address for `example.com` is then returned to the resolver from the nameserver.
- The DNS resolver then responds to the web browser with the IP address of the domain requested initially.

### Network Thread: Make Request

Once the 8 steps of the DNS lookup have returned the IP address for `example.com`, the browser is able to make the request for the web page:

- Browser setup TCP connection to the server via a `TCP three-way handshake`.
  - For HTTPS connection, another [TLS Handshake](https://www.cloudflare.com/zh-tw/learning/ssl/what-happens-in-a-tls-handshake/) is required
- Browser sends an initial `HTTP GET request` to the IP address.
- Server send `HTTP response` with meta info in `header` to Browser.
- Browser receives the response header and content. `#Time to First Byte`
- Browser check `Content-Type header` to determine the type of data.
  - if `Content-Type header` is missing or wrong, [MIME Type sniffing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) is done here.
- Browser stores `cookie`, and make request for `css` or `js`
- `Network Thread` tells `UI thread` that the data is ready.
- `UI thread` finds a renderer process to continue rendering.
  - Meanwhile `UI thread` updates the UI of browser (ex. `url bar`, `security indicator`)
  - The `session history` for the tab will be updated

### Renderer Process: Rendering

check detail about [Critical Rendering Path](https://hhow09.github.io/Lighthouse-Performance.html#Critical-Rendering-Path)

#### Img: Navigation Timing API

![dom-navtiming](/img/web-dev/2-web-browser-navigation-flow/dom-navtiming.png)

#### Img: Rendering Process

![Rendering Process with Event](/img/web-dev/2-web-browser-navigation-flow/rendering-process-event.png)

- `domLoading` event: `main thread` Parse HTML and Construct `DOM tree`.
- Download resource: such as `images`, `CSS`, and `JavaScript`
  - preload scanner sends requests to the `network thread`.
  - `JavaScript compilation`: JavaScript is interpreted, compiled, parsed and executed. The scripts are parsed into abstract syntax trees
- `domInteractive` event: `DOM tree` is constructed.
- `main thread` Parse CSS, Calculate style to Construct `CSSOM tree`/`computed style`
- `domContentLoaded`: `DOM tree` and `CSSOM tree` both constructed.
  - Normally Javascript start executing on this event.
- `main thread` going over DOM tree with computed styles and producing `layout tree`
- `main thread` walks the `layout tree` to create `paint records`
  - `Paint record` is a note of painting process like "background first, then text, then rectangle".

### Paint

### Compositing

- because sections of the document are drawn in different layers
- `layer tree` is created and `paint orders` are determined
- `main thread` commits that information to the `compositor thread`
- The `compositor thread` then rasterizes each layer. A layer could be large like the entire length of a page, so the compositor thread divides them into tiles and sends each tile off to `raster threads`.
- `Raster threads` rasterize each tile and store them in GPU memory.

### Reflow

- As the page continues to load assets, reflows can happen
- A reflow sparks a `repaint` and a `re-composite`.

---

## Service Worker

TBC...

## Reference

- [W3C: navigation timing](https://www.w3.org/TR/navigation-timing/)
- [Inside look at modern web browser (part 2)](https://developers.google.com/web/updates/2018/09/inside-browser-part2)
- [Inside look at modern web browser (part 3)](https://developers.google.com/web/updates/2018/09/inside-browser-part3)
- [What Is DNS? | How DNS Works](https://www.cloudflare.com/learning/dns/what-is-dns)
- [Critical Rendering Path](https://hhow09.github.io/Lighthouse-Performance.html#Critical-Rendering-Path)
- [使用 Navigation Timing 評估關鍵轉譯路徑](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp?hl=zh-tw)
- [MDN: how browsers work](https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work)
