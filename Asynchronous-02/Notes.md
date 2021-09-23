## **ASYNCHRONOUS BEHIND THE SCENES : THE EVENT LOOP**

### **JS RUNTIME IN THE BROWSER**

JS runtime is basically a container which includes all the different pieces that are necessary to execute JS code.
The heart of every JS runtime is the engine, this is where code is actually executed and where objects are stored in
memory, these two things happen in the call stack and in the heap.

JavaScript has only one threat of execution, so it can only do one thing at a time. There is absolutely no multitasking happening in JS itself.

Other languages like Java can execute multiple pieces of code at the same time, but not JS. Next we have APIs envi-
roment these are some APIs provided to the engine but which are actually not part of the JS language itself, that's
things like the DOM timers the fetch API, the geolocation API, and so on and so forth.

Next up, there is the callback queue and this is a data structure that holds all the ready to be executed callback
functions that are attached to some event has occurred. Finally, whenever the call stack is empty the event loop takes callbacks from the callback queue and puts them into call stack so that they can be executed, the event loop is the essential piece that makes asynchronous behavior possible in JS, is the reason why wee can have a non-blocking concurrency model in JS and the concurrency model is simply how a language handles multiple things happening at the same time.

```

    Heart of the runtime
      JS ENGINE                                                           WEB APIs  ------------->APIs provided
                                                            DOM                       TIMERS      to the engine
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

But now how does this non-blocking concurrency actually work?? and why is the event loop so important??
Javascript engine is built around the idea of a single threat, but if there was only one thread of execution in the engine then how can asynchronous code be executed in a non blocking way?

Let's start by selecting this image element (el = document.querySelector('img);) and then in the next line we set the source attribute of that image to dog.jpg (el.src = 'dog.jpg';) and as we learned before this will now start to
load this image asynchronously in the background. But this time we can actually understand what that mysterious background actually is , everything is related to the DOM is not really part of JS, but of the web APIs and so it's
in a web APIs enviroment where the asynchronous tasks related to the DOM will run.

And in fact, the same is true for timers AJAX calls and really all other asynchronous tasks, so again, these asynchronous tasks will all run in the web API enviraonment of the browser, if the image would be loading in a synchronous way it would be doing so right in the call stack blocking the execution of the rest of the code. But
as we already learned, that would be terrible. That's why loading images in JS is asynchronous. So it does not happen in the call stack, not in the main thread of execution but really in the web APIs environment

```




```
