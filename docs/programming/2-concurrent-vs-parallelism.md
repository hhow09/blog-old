# Concurrency vs. Parallelism v.s. Coroutine

## Intro: The Free Lunch Is Over

> The major processor manufacturers and architectures, from Intel and AMD to Sparc and PowerPC, have run out of room with most of their traditional approaches to boosting CPU performance. Instead of driving clock speeds and straight-line instruction throughput ever higher, they are instead turning en masse to hyperthreading and multicore architectures.

- more: [The Free Lunch Is Over: A Fundamental Turn Toward Concurrency in Software](http://www.gotw.ca/publications/concurrency-ddj.htm)

---

## Multi Threading

- CPU will manage/scheduling its own `threads`.
- `Multi-threading` is the prerequisite of `multi-processing`

![Multi Thread](/img/general/2-concurrent-vs-parallelism/thread-process.jpeg)

### Benefits of Multi Threading

#### Responsiveness

- Multi-threading in an interactive application may allow a program to continue running even if a part (thread) of it is blocked or is performing a lengthy operation, thereby increasing responsiveness to the user.

#### Resource Sharing

- (Compared to)`Processes` may share resources only through techniques such as `Message Passing` and `Shared Memory`.
- However, `threads` share the memory and the resources of the process to **which they belong by default**.

#### Economy

- Allocating memory and resources for `process` creation is a costly job in terms of time and space.
- `Threads` share memory with the process **it belongs**, it is more economical to create and context switch threads.

#### Scalability

- If there is only one thread then it is not possible to divide the processes into smaller tasks for `parallelism`.
- Single threaded process can run only on one processor regardless of how many processors are available.

---

## Concurrency & Parallelism

> **Concurrency is composition of independently executing things (typically, functions)**. We often use the word `process` to refer to such running thing, and we don't mean `unix process`, but rather a process in the abstract, general sense.
>
> **Parallelism is simultaneous execution of multiple things**. Those things might or might not be related to each other.
>
> Concurrency is about **dealing with a lot of things at once**. Parallelism is about **doing a lot of things at once**.The ideas are, obviously, related, but one is inherently associated with structure, the other is associated with execution. Concurrency is structuring things in a way that might allow parallelism to actually execute them simultaneously. But parallelism is not the goal of concurrency. The goal of concurrency is good structure.

### 1. Concurrency (Multi threading)

![Concurrency](/img/general/2-concurrent-vs-parallelism/concurrency.png)

- An application is making progress **on more than one task at a time** inside the application, resulting in a `multi-threaded process`
- In contrast to: `Sequential Execution`
- When executing `multi-threaded process` on **a processor**, the processor can switch execution resources between threads, resulting in concurrent execution.
- When talking about concurrency we talk about something happen **on a singe processor**.

#### Applications

- [goroutine](https://golang.org/ref/mem) in golang.
- JavaScript has a [concurrency model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop) based on an event loop.
- `Promise` in Javascript is `asynchronous programming` but not `Concurrency`.

### 2. Parallel Execution

![Parallel Execution](/img/general/2-concurrent-vs-parallelism/parallel-execution.png)

- A `multi-threaded process` executed in a **shared-memory multi-CPU environment**.
- `threads` are distributed among multiple CPUs at the same time.
- `threads` on different CPUs are executed in parallel.

- `Parallel Execution` **is not equal to** `parallelism`.

### 3. Parallel Concurrent Execution

![Parallel Concurrent Execution](/img/general/2-concurrent-vs-parallelism/parallel-concurrent-execution.png)

- Simply the [1. Concurrency (Multi threading)](#1-concurrency-multi-threading) + [2. Parallel Execution](#2-parallel-execution) both happens.

- `threads` executed on a CPU are executed concurrently
- `threads` executed on different CPUs are executed in parallel.

### 4. Parallelism (Multi Processing)

![Parallel Concurrent Execution](/img/general/2-concurrent-vs-parallelism/parallelism.png)

- When executing `multi-processing program` on **multiple processors**, tasks are split int sub-tasks and process by multiple threads.
- Resource are isolated among processors.
- Each process can have many threads running in its own memory space.

#### Scenarios

- multi-core processors
- graphics processing unit (GPU)
- field-programmable gate arrays (FPGAs)
- distributed computer clusters

---

## Coroutine v.s. Thread

![Coroutine](/img/general/2-concurrent-vs-parallelism/coroutine.png)

- Threads are scheduled by `CPU`.
- Coroutines are scheduled by `User`.

- Threads are typically `preemptively scheduled`.
- Coroutines are `cooperatively scheduled`.

- programs using threads must be careful about `locking`.
- programs using coroutines can often **avoid locking entirely**.

---

## Goroutine in Golang

![Goroutine](/img/general/2-concurrent-vs-parallelism/goroutine.png)

- In short, Goroutine is something between `thread` and `coroutine`

### Why Why goroutines instead of threads?

> Goroutines are part of making concurrency easy to use. The idea, which has been around for a while, is to multiplex independently executing functions—coroutines—onto a set of threads. When a coroutine blocks, such as by calling a blocking system call, the run-time automatically moves other coroutines on the same operating system thread to a different, runnable thread so they won't be blocked. The programmer sees none of this, which is the point. The result, which we call goroutines, can be very cheap: they have little overhead beyond the memory for the stack, which is just a few kilobytes.

### Goroutine v.s. coroutine

- goroutines imply `parallelism`; coroutines works on `single thread`.
- goroutines communicate via `channels`; coroutines communicate via `yield` and `resume` operations
- goroutines has controls of max thread number via `$GOMAXPROCS` set by user.

## Reference

- [Summary of Concurrency Is Not Parallellism, a talk by Rob Pike](https://rakhim.org/summary-of-concurrency-is-not-parallellism-a-talk-by-rob-pike/)
- [並行程式設計: 概念](https://hackmd.io/@sysprog/concurrency/https%3A%2F%2Fhackmd.io%2F%40sysprog%2FS1AMIFt0D)
- [Concurrency vs. Parallelism](http://tutorials.jenkov.com/java-concurrency/concurrency-vs-parallelism.html)
- [Golang FAQ: goroutines](https://golang.org/doc/faq#coroutine)
- [進程 (Process)、線程 (Thread)、協程 (Coroutine) 的概念講解](https://blog.kennycoder.io/2020/05/16/%E9%80%B2%E7%A8%8B-Process-%E3%80%81%E7%B7%9A%E7%A8%8B-Thread-%E3%80%81%E5%8D%94%E7%A8%8B-Coroutine-%E7%9A%84%E6%A6%82%E5%BF%B5%E8%AC%9B%E8%A7%A3/)
- [Preemptive vs Non-Preemptive Scheduling: Key Differences](https://www.guru99.com/preemptive-vs-non-preemptive-scheduling.html)
- [Go Language Patterns: Coroutines](https://sites.google.com/site/gopatterns/concurrency/coroutines)
- [當一個 goroutine 創建新的 goroutine 時，scheduler 會選誰優先執行？](https://medium.com/@genchilu/%E7%95%B6%E4%B8%80%E5%80%8B-goroutine-%E5%89%B5%E5%BB%BA%E6%96%B0%E7%9A%84-goroutine-%E6%99%82-scheduler-%E6%9C%83%E9%81%B8%E8%AA%B0-257f434ee1bf)
