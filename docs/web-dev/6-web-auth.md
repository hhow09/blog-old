# Web Authentication

## Session Based Authentication

![session auth flow](/img/web-dev/6-web-auth/session-auth-flow.png)

- In the session based authentication, the server will create a session for the user after the user logs in. 

- The **session id** is then stored on a cookie on the user’s browser. While the user stays logged in, the cookie would be sent along with every subsequent request. 

- The server can then compare the **session id** stored on the cookie against the session information stored in the memory to verify user’s identity and sends response with the corresponding state!


## Token Based Authentication: JWT (JSON Web Tokens)

![jwt auth flow](/img/web-dev/6-web-auth/jwt-auth-flow.png)

### Purpose
It is generally used to pass authenticated user identity information between the **auth provider** and the **service provider** in order to obtain resources from the resource server.

It is usually suitable for the scenario **one-time authorization**, **cross domain auth**

### Content
- composed of: `base64(Header)` + `base64(Payload)` + `base64(Signature)`
#### Header
The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as `HMAC`, `SHA256` or `RSA`.

```
{
  "alg": "HS256",
  "typ": "JWT"
}
```

#### Payload
Payload contains the claims. Claims are statements about an entity (typically, the user) and additional data. 

- for local use: symmetric digital signature algorithm: use same secrete key to sign and verify
- for public use: asymmetric digital signature algorithm: use private key to sign token and public key to verify token.


#### Signature
The signature is used to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is.

### Cons
1. Cannot proactively expires token.
2. Prone to **trivial token forgery**: 
    - Send a header that specifies the `none` algorithm be used
    - Send a header that specifies the `HS256` algorithm when the application normally signs messages with an RSA public key.

  ```
  HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), 'secret')
  ```

## Reference
- [jwt.io](https://jwt.io/introduction)
- [不要用 JWT 替代 session 管理（上）：全面了解 Token,JWT,OAuth,SAML,SSO](https://zhuanlan.zhihu.com/p/38942172)
