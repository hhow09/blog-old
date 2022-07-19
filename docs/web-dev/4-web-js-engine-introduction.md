# JS engine: Introduction

## Main Javascript Engines

- Chrome/Google: [V8](https://v8.dev/)
- FireFox/Mozilla: [SpiderMonkey](https://mozilla-spidermonkey.github.io/)
- Edge/Microsoft: used to be [Chakra](https://github.com/chakra-core/ChakraCore) / now v8
- Safari/Apple: [JavaScriptCore](https://developer.apple.com/documentation/javascriptcore)

## Javasciprt Engine Pipeline

![Javasciprt Engine Pipeline](/img/web-dev/4-web-js-engine-introduction/js-engine-pipeline.png)

- JS Engines runs with this similiar pipeline but different in optimization process.

### Process

1. parse javascript into Abstract Syntax Tree (AST)
2. interpreter generate byte code
3. Optimization start!
4. bytecode is sent to the optimizing compiler along with profiling data.
5. optimizing compiler makes assumption then produces highly-optimized machine code based on profiling data
6. If the assumptions turns out to be incorrect, the optimizing compiler deoptimizes and goes back to the interpreter.

## Trade off

### Startup Speed

![tradeoff-startup-speed](/img/web-dev/4-web-js-engine-introduction/tradeoff-startup-speed.png)

- interpreter: produce bytecode quickly, produces inefficient machine code.
- optimizing compiler: takes longer, produces efficient machine code.

### Memory

![tradeoff-memory](/img/web-dev/4-web-js-engine-introduction/tradeoff-memory.png)

- optimized machine code also requires more memory.

## Note

1. Initialize object props with sensible values.
2. always initialize objecs in the same way.
3. type checking is about developer productivity but not about engine performance

## Reference

- [JavaScript engine fundamentals: optimizing prototypes](https://mathiasbynens.be/notes/prototypes)
- [JavaScript engine fundamentals: Shapes and Inline Caches](https://mathiasbynens.be/notes/shapes-ics)
- [Mathias B, Benedikt M - JS Engine fundamentals [AgentConf]](https://youtu.be/0I0d8LkDqyc)
