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
functions that are attached to some event has occurred. Finally, whenever the call stack is empty the event loop takes callbacks from the callback queue and puts them into call stack so that they can be executed, the event loop is the essential piece that makes asynchronous behavior possible in JS, is the reason why we can have a non-blocking concurrency model in JS and the concurrency model is simply how a language handles multiple things happening at the same time.

```

    Heart of the runtime
      JS ENGINE                                                           WEB APIs  ------------->APIs provided
                                                            DOM                       TIMERS      to the engine
                                                         FETCH API                      ...
 -
  -
-                    ---------
   -                 ---------                EVENT LOOP
-                    ---------
   -                 ---------                                            CALLBACK QUEUE

HEAP               CALL STACK                                       CLICK    TIMER    DATA     ...
  |                     |
  |                     |
  v                     v
Where object       Where code is
are stored in    actually executed -------------> Only ONE thread of execution.No multitasking!
memory
```

```
                                      WEB APIs                                el = document.querySelector('img)
                                                                              el.src = 'dog.jpg'
                                                     fetch()                  el.addEventListener('load', () => {
                                                  setTimeout()                   el.classList.add('fadeIn');
                                                      DOM()                    });
                                                      ...                      fetch('https://someurl.com/api')
                           res => console.log(res)                                .then(res => console.log(res));

                       Fetching Data                                                       // More code .....






Global Execution
    context                                           MICROTASKS QUEUE ====> Callbacks related to promises.
                                                                                Has priority over callback queue!
  CALL STACK             EVENT LOOP                   CALLBACK QUEUE
                              |
 Dedices when each            |
 callback is executed         |
 : orchestration <------------|
```

But now how does this non-blocking concurrency actually work?? and why is the event loop so important??
Javascript engine is built around the idea of a single threat, but if there was only one thread of execution in the engine then how can asynchronous code be executed in a non blocking way?

Let's start by selecting this image element (el = document.querySelector('img);) and then in the next line we set the source attribute of that image to dog.jpg (el.src = 'dog.jpg';) and as we learned before this will now start to
load this image asynchronously in the background. But this time we can actually understand what that mysterious background actually is , everything is related to the DOM is not really part of JS, but of the web APIs and so it's
in a web APIs enviroment where the asynchronous tasks related to the DOM will run.

And in fact, the same is true for timers AJAX calls and really all other asynchronous tasks, so again, these asynchronous tasks will all run in the web API environment of the browser, if the image would be loading in a synchronous way it would be doing so right in the call stack blocking the execution of the rest of the code. But
as we already learned, that would be terrible. That's why loading images in JS is asynchronous. So it does not happen in the call stack, not in the main thread of execution but really in the web APIs environment.

If we want to do something after the image has finished loading then we need to listen to the load event and that's
exactly what we do in the next line of code, here we attach an event listener to the load event of that image and pass an a callback function as always, In practice this means to register this callback in the web APIs environment,
exactly where the image is loading and the callback will stay there until the load event is emitted. So, we're handling asynchronous behavior here with a callback just as we learned before.

Back to the code, in the next line, we make an AJAX call using the fetch API and as always the asynchronous fetch operation will happen in the web APIs enviroment, that's because otherwise we would be blocking the call stack and create a huge lag in out application, Finally, we use the then() method on the promise returned by the fetch function and this will also register a callback in the web API enviroment , that we can react to the future resolved value of the promise. This callback is associated with a promise that is fetching the data from the API and that's gonna be important later on, with this we have now executed all the top level code ( all the code that is not inside in the callback function in asynchronous way).

We also have the imagge loading in the background and some data being fetched from an API and now it's time for this to get really interesting. Let's say the image has finished loading and therefore the load event is emitted on that image, What happens next is that the callback for this event is put into callback queue and the callback queue is basically an ordered list of all the callback functions that are in line to be executed, The callback queue is also a to do list of a kind but with tasks that the call stack will eventually have to complete.

In this example, there are no other callbacks in the queue yet, but there could be, of course! if there were already other callbacks waiting in line, then this new callback would of course go straight to the end of the queue and there it would sit patiently for its turn to finally run and this actually has big implications.

What this means is that the timers duration that you define is not a guarantee, the only guarantee is that the timers callback will not run before five seconds, but it might very well run after five seconds have passed. All depends on the state of the callback queue and also another queue that we're gonna learn about in a second.

Another thing that's important to mention here is that the callback queue also contains callbacks coming from DOM events like clicks or key presses or whatever. DOM events are not really asynchronous behavior, but they still use the callback queue to run their attached callbacks, if a click happens on a button with addEventListener, that will happen is just the same like the asynchronous load event.

The event loop looks into the call stack and determines whether it's empty or not , except of course for the global context, the if the stack is indeed empty which means that there's currently no code being executed then it will take the first callback from the callback queue and put it on the call stack two will be executed and this is called an event loop tick. So each time the event loop takes a callback from the callback queue. We say that there was an event loop tick, as we can see here the event loop has the extremely important task of doing coordination between the call stack and to callbacks in the callback queue. So the event loop is basically who decides exactly when each callback is executed. We can also say that the event loop does the orchestration of this entire JS runtime.

Another thing that becomes clear from this whole explanation is that the JS language itself has actually no sense of time. That's because everything that is asynchronous does not happen in the engine. It's the runtime who manages all the asynchronous behavior and it's the event loop who decides which code will be executed next but the engine itself simply executes whatever code it has given.

**THE FETCH FUNCTION**

Now we still have the fetch function getting data from the AJAX call in the background and this is basically happening with a promise , with promises things work in a slightly different way. Let's say that the data has now
finally arrived and the fetch is done, callbacks related to promises like this, one that we registered with the promises then() method do actually not go into the callback queue. Instead, callbacks of promises have a special queue for themselves, which is the so called microtasks queue.

What is special about the microtasks queue is that it basically has priority over the callback queue, at the end of an event loop tick, after a callback has been taken from the callback queue, the event loop will check if there are any callbacks in the microtasks queue and if there are, it will run all of them before it will run any more callbacks from the regular callback queue, we call these callbacks from promises microtasks and therefore the name
microtasks queue and there are actually other microtasks but that's not relevant here.

Currently, We actually do have a microtask sitting in a microtasks queue, the call stack is also empty and therefore the event loop will now take this callback and put it in the call stack just like it does with callbacks from the callback queue and it doesn't matter if the callback queue is empty or not, this would have worked the exact same way even if there were some callbacks in the callback queue and again , that's because microtasks always have priority. Now if one microtask adds a new mircotask then that new microtask is also executed before any callbacks from the callback queue and this means that the microtasks queue can essentially starve the callback queue because if we keep adding more and more microtasks, then callbacks in the callback queue can never execute.
