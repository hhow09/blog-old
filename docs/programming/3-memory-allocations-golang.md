# Understanding Memory Allocations in Go

## Links
- [Understanding Allocations in Go](https://medium.com/eureka-engineering/understanding-allocations-in-go-stack-heap-memory-9a2631b5035d)
- [Stack vs Heap: Know the Difference](https://www.guru99.com/stack-vs-heap.html)
- [An overview of memory management in Go](https://medium.com/safetycultureengineering/an-overview-of-memory-management-in-go-9a72ec7c76a8)
- [Golang Tutorial 3 - Golang pointers explained, once and for all](https://youtu.be/sTFJtxJXkaY)

## Stack v.s. Heap
| Parameter                   | Stack                                                                                                 | Heap                                                                                                                 |
|-----------------------------|-------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Type of data structures     | A stack is a linear data structure.                                                                   | Heap is a hierarchical data structure.                                                                               |
| Access speed                | High-speed access                                                                                     | Slower compared to stack                                                                                             |
| Space management            | Space managed efficiently by OS so memory will never become fragmented.                               | Heap Space not used as efficiently. Memory can become fragmented as blocks of memory first allocated and then freed. |
| Access                      | Local variables only                                                                                  | It allows you to access variables globally.                                                                          |
| Limit of space size         | Limit on stack size dependent on OS.                                                                  | Does not have a specific limit on memory size.                                                                       |
| Resize                      | Variables cannot be resized                                                                           | Variables can be resized.                                                                                            |
| Memory Allocation           | Memory is allocated in a contiguous block.                                                            | Memory is allocated in any random order.                                                                             |
| Allocation and Deallocation | Automatically done by compiler instructions.                                                          | It is manually done by the programmer.                                                                               |
| Deallocation                | Does not require to de-allocate variables.                                                            | Explicit de-allocation is needed.                                                                                    |
| Cost                        | Less                                                                                                  | More                                                                                                                 |
| Implementation              | A stack can be implemented in 3 ways simple array based, using dynamic memory, and Linked list based. | Heap can be implemented using array and trees.                                                                       |
| Main Issue                  | Shortage of memory                                                                                    | Memory fragmentation                                                                                                 |
| Locality of reference       | Automatic compile time instructions.                                                                  | Adequate                                                                                                             |
| Flexibility                 | Fixed size                                                                                            | Resizing is possible                                                                                                 |
| Access time                 | Faster                                                                                                | Slower                                                                                                               |


## Stack
- We don’t need to garbage collection on stack

### Stack Frame
- A call stack is composed of 1 or many several **stack frame**s. 
- Each stack frame corresponds to a call to a function or procedure which has not yet terminated with a return.
- Function arguments, local variables and return address are stored in stack frame

### Function and Stack
- Each function call pushes a new frame to the stack
- Each returning function pops from the stack.



## Heap
- the heap contains values that are referenced outside of a function.
- When the programmer defines an object that gets placed on the heap, the needed amount of memory is allocated and a pointer to it is returned.
- As a program runs, the heap will continue to grow as objects are added unless the heap is cleaned up.




## Process Memory Layout in Golang
![](/img/general/3-memory-allocations-golang/golang-memory-layout.jpeg)


## [How do we know when a variable is allocated to the heap?](https://go.dev/doc/faq#stack_or_heap)
- When possible, the Go compilers will allocate variables that are local to a function in that function's stack frame.
- However, if the compiler cannot prove that the variable is not referenced after the function returns, then the compiler must allocate the variable on the garbage-collected heap to avoid **dangling pointer errors**.


## Garbage collection (GC)
