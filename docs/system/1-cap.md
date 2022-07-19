# C.A.P Theorem

## Intro

The **CAP Theorem** says that it is impossible to build an implementation of read-write storage in an asynchronous network that satisfies all of the following three properties:

- **Availability**: will a request made to the data store always eventually complete?
- **Consistency**: will all executions of reads and writes seen by all nodes be atomic/linearizably consistent?
- **Partition tolerance**: the network is allowed to drop any messages.
  - A **partition** is a communications break within a distributed system—a lost or temporarily delayed connection between two nodes.

---

## Consistency Models

Consistency Model is contract between a distributed data system (e.g., `DFS`, `DSM`) and
processes constituting its applications

### Taxonomy of consistency model.

![](/img/system/1-cap/taxonomy-of-consistency-model.png)

### Trade Offs

`↑ Consistent, Complex ↑`

- Linearizability
- Sequential consistency
- Causal consistency
- Eventual consistency

`↓ Available, Low Latency, Feasible, Scalable ↓`

### Linearizability (`C` > `A`)

- Should provide the behavior of a **single copy**
- The ordering of operations is determined **by time**.
- A read operation returns the most recent write, regardless of the clients.
- All subsequent read ops should return the same result until the next write, regardless of the clients.
- Cons: implementation requires absolute global time

![](/img/system/1-cap/linearizability.png)

#### What happens if you don't have Linearizability?

![](/img/system/1-cap/not-linearizability.png)

### Sequential Consistency

- Should provide the behavior of a **single copy**.
- The ordering of operations is **determined by the program order of each client**.
- Reads may be stale in terms of real time, but not in logical time.
- A read operation returns the most recent write, regardless of the clients.
- Writes are totally ordered according to logical time across all replicas

- Cons: requires highly available connections

### Causal Consistency

- Writes that are potentially causally related must be seen by all machines in same order.
- Concurrent writes may be seen in a different order on different machines.

### Eventual consistency (`A` > `C`)

- Is: Allow stale reads, but ensure that reads will eventually reflect previously written values.
- Doesn’t order concurrent writes as they are executed, which might create conflicts later: **which write was first?**
- Pros: High data availability (`A`)
- Pros: High concurrency opportunities
- Pros: Support **disconnected operations** or **network partitions**
  - Better to read a stale value than nothing
  - Better to save writes somewhere than nothing
- Cons: may displaying stale data
- Cons: may violate Atomic Consistency

- NoSQL databases that manage non-structured data are often good choices for **eventual consistency models**.

---

## CP/AP: a false dichotomy

The fact that we haven’t been able to classify even one datastore as unambiguously `AP` or `CP` should be telling us something: those are simply not the right labels to describe systems.

- Within one piece of software, you may well have various operations with **different consistency characteristics**.

- Many systems are neither consistent nor available under the CAP theorem’s definitions. However, I’ve never heard anyone call their system just “P”, presumably because it looks bad. But it’s not bad – it may be a perfectly reasonable design, it just doesn’t fit one of the two `CP`/`AP` buckets.

- Even though most software doesn’t neatly fit one of those two buckets, people try to shoehorn software into one of the two buckets anyway, thereby inevitably changing the meaning of `consistency` or `availability` to whatever definition suits them. Unfortunately, if the meaning of the words is changed, the CAP theorem no longer applies, and thus the `CP`/`AP` distinction is rendered completely meaningless.

- A huge amount of subtlety is lost by putting a system in one of two buckets. There are many considerations of fault-tolerance, latency, simplicity of programming model, operability, etc. that feed into the design of a distributed systems. It is simply not possible to encode this subtlety in one bit of information. For example, even though ZooKeeper has an `AP` read-only mode, this mode still provides a total ordering of historical writes, which is a vastly stronger guarantee than the `AP` in a system like `Riak` or `Cassandra` – so it’s ridiculous to throw them into the same bucket.

- Even [Eric Brewer admits that CAP is misleading and oversimplified](http://cs609.cs.ua.edu/CAP12.pdf). In 2000, it was meant to start a discussion about trade-offs in distributed data systems, and it did that very well. It wasn’t intended to be a breakthrough formal result, nor was it meant to be a rigorous classification scheme for data systems. 15 years later, we now have a much greater range of tools with different consistency and fault-tolerance models to choose from. CAP has served its purpose, and now it’s time to move on.

## Reference

- [The CAP FAQ](https://github.com/henryr/cap-faq)
- [CAP 定理 101—分散式系統，有一好沒兩好](https://medium.com/%E5%BE%8C%E7%AB%AF%E6%96%B0%E6%89%8B%E6%9D%91/cap%E5%AE%9A%E7%90%86101-3fdd10e0b9a)
- [Please stop calling databases CP or AP](https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html)
- [Consistency models of NoSQL databases](https://www.researchgate.net/publication/331104869_Consistency_models_of_NoSQL_databases#pf12)
- [CSE 486/586 Distributed Systems Consistency --- 2](https://cse.buffalo.edu/~stevko/courses/cse486/spring13/lectures/26-consistency2.pdf)
- [Lec 12: Consistency Models – Sequential, Causal, and Eventual Consistency](https://www.cs.columbia.edu/~du/ds/assets/lectures/lecture12.pdf)
