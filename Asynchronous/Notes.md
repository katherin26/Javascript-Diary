# **ASYNCHRONOUS JAVASCRIPT, AJAX AND APIs**

## **SYNCHRONOUS CODE**

```
const p = document.querySelector('.p');
p.textContent = 'My name is Pancreas';
alert('Text set!');
p.style.color = 'red';
```

1. Most code is synchronous.
2. Synchronous code is executed line by line.
3. Each line of code waits for previous line to finish.
4. Long-running operations block code execution.

```
Note: So as the first line of code is reached in the execution, it is simply executed in the execution of thread and is part of execution context that actually executes the code in computer's CPU, Then the next line of code is executed and then the next one, all in sequence, Each line of code always waits for the previous line to finish execution.
Now this can create problems when one line of code takes a long time to run, for example in this line of code we have an alert statement, which creates this alert window. This alert window will block the code execution , right?
So nothing will happen on the page until we click that ok button, and only then the code can continue executing.
The alert statement is a perfect example of a long running operation which blocks execution of the code.
So again, only after we click Okay,the window disappears and the next line can run.

Imagine that execution would have to wait five seconds timer to finish, that would just be terrible, right??
because, nothing on the page would work during these five seconds and so that's where asynchronous code comes into play.

```

```
127.0.0.1:8080 says
Text set!
                           Ok
```

## **Example: Timer with callback**

```
const p = document.querySelector('.p');
setTimeout(function(){
    p.textContent = 'My name is Pancreas!!';
},5000);

p.style.color = 'red';
```

1. Asynchronous code is executed after a task that runs in the "background" finishes.
2. Asynchronous code is non-blocking.
3. Execution doesn't wait for an asynchronous task to finish its work.
4. Callback functions alone do NOT make code asynchronous!.

```
The first line of code is still synchronous here and we also move to the second line in a synchronous way.
But here we encountered the set timeout function which will basically start a timer in an asynchronous way.
So, this means that the timer will essentially run in the background without preventing the main code from
executing, we also register a callback function which will not be executed now, but only after the timer has
finished running.

This callback function is asynchronous Javascript, because it's only going to be executed after a task that is
running in the background finishes execution, and in this case, that is the timer.

So this callback that we just talked about is registered and then we immediately move on to the next line, so the
main code is not being blocked and execution does not wait for the asynchronous timer to finish its work and that's
the big difference between synchronous and asynchronous code.

When the timer finally finishes after five seconds, the callback function will finally be executed as well. So you'll see that this callback runs after all the other code even though in the code it doesn't appear at the end.

And so basically an action was deferred into the future here in order to make the code non-blocking and actually
we already saw this behavior happening before when we first learned about timers
```

```
[1,2,3].map(v => v * 2); => callback does NOT automatically make code asynchronous!.
```

## **Example: Asynchronous image loading with event and callback**

```
This example is about loading an image, so the first two lines run in a synchronous way, one after the other.

const img = document.querySelector('.dog');
img.src = 'dog.jpg';
img.addEventListener('load',function(){
    img.classList.add('fadeIn');
});
p.style.width = '300px';
```

```
Now in the second line, we set the source attribute of the image that we selected in the first line and this
operation is actually asynchronous. So setting the source attribute of any image is essentially loading an image
in the background while the rest of the code can keep running.

Once the image has finished loading, a load event will automatically be emitted by JavaScript and  we can then
listen for that event in order to act on it.

Listening for the load event is exactly what we do here in the next line as well, so here we use add event listener
and to register a callback function for the load event. So just like in the previous example, we provide a callback
function that will be executed once the image has been loaded and not right away.

Then once the image is completely loaded, it's displayed on the webpage and the load event is admitted, and since we
are listening for that event our callback function is finally executed.

We deferred an action into the future making the code asynchronous and non-blocking.
```

**NOTE:**

```
Event listeners and callback functions alone do not make code asynchronous.

```
