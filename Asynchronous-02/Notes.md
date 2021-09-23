## **ASYNCHRONOUS BEHIND THE SCENES : THE EVENT LOOP**

### **JS RUNTIME IN THE BROWSER**

JS runtime is basically a container which includes all the different pieces that are necessary to execute JS code.
The heart of every JS runtime is the engine, this is where code is actually executed and where objects are stored in
memory, these two things happen in the call stack and in the heap.

JavaScript has only one threat of execution, so it can only do one thing at a time. There is absolutely no multitasking happening in JS itself.

```

    Heart of the runtime
      JS ENGINE                                                           WEB APIs
                                                            DOM                       TIMERS
                                                         FETCH API                      ...
 -
  -
-          ---------
   -       ---------                        EVENT LOOP
-          ---------
   -       ---------                                                  CALLBACK QUEUE

HEAP               CALL STACK                                       CLICK    TIMER    DATA     ...
  |                     |
  |                     |
  v                     v
Where object       Where code is
are stored in    actually executed -------------> Only ONE thread of execution.No multitasking!
memory
```
