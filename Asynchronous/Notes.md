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

## **WHAT ARE AJAX CALLS??**

**AJAX**

```
Asynchronous Javascript And XML: Allows us to communicate with remote web servers in an asynchronous way. With
AJAX calls, we can request data from web servers dynamically.

So with Ajax, we can do an HTTP request to the server which has this data and the server will then set back a
response containing that data that we requested and this back and forth between Client and server all happens
asynchronously in the background just the way we learned before and there can even be different types of request,
like get request to receive data or post request to send data to a server.

Now, when we're asking a server to send us some data, this server usually contains a web API and this API is the
one that has the data that we're asking for, an API is something pretty important and so let's now see what an API
is.
```

```
                            Asking for some data (countries)
                            REQUEST (GET/POST/etc.)
CLIENT          --------------------------------------------------> WEB SERVER
(e.g browser)   <--------------------------------------------------
                                       RESPONSE
                            Sending data back (countries)
```

## **WHAT IS AN API?**

**API**

```
Application Programming Interface: Piece of software that can be used by another piece of software, in order to
allow applications to talk to each other.

There are be many types of APIs in web development:

1. DOM API

2. GEOLOCATION API

3. OWN CLASS API

4."ONLINE' API = Just "API"

"Online" API: Application running on a server, that receives request for data and sends data back as response.

We can build our own web APIs (requires back-end development, e.g with node.js) or use 3rd-party APIs.

NOTE: Imagine that you are building a traveling application and you have a database with different destinations and
tours that you're offering. So on your own server you could build your own API that can receive request from your
front end application in Javascript and send back the results. So that would be your own API hosted on your own server. But that alone would probably not be enough to build a complete application and so you could also use some
3rd-party APIs.

There is an API for everything:

1) Weather data.
2) Data about countries.
3) Flights data.
4) Currency conversion data.
5) APIs for sending email or SMS.
6) Google Maps,
7) Millions of possibilities....
```

**API DATA FORMATS**

```
        AJAX                                               JSON data format
         XML                                              Most popular API data format
  (XML data format)

  Which used to be widely used                            Because it's basically just a Javascript object,
  to transmit data on the web.                            but converted to a string, therefore it's very
  But in this days no API uses                            easy to send across the web and also to use in JS.
  XML data anymore.                                       Once the data arrives

```

## **HOW THE WEB WORKS: REQUEST AND RESPONSES**

```
   DNS
DNS LOOKUP (https://104.27.142.889:443)

  / \
   | |
   | |
   | |
    \ /                                            REQUEST
CLIENT                                 --------------------------------------> WEB SERVER
(e.g browser)                          <--------------------------------------
https://restcountries.eu/rest/v2/alpha/PT          RESPONSE

1) Protocol (HTTP or HTTPS)
2) Domain name (restcountries.eu)
3) Resource (/rest/v2/alpha/PT)

```

```
So this is the diagram when we first talked about AJAX calls, So just to recap, whenever we try to access a Web
Server to the browser, The client sends a request to the server and the server will then send back a response and that response contains the data or the Web Page that we requested, this process works the exact same way no matter if we're accessing an entire Web page or just some data from a Web API and this whole process actually has a name and it's called the Request-response model or also the Client-server architecture but anyway, let's now dive a bit deeper into this.
```

```
So let's use the example of the URL that we actually accessed in the last exercise (getCountryData).
Now every URL gets an HTTP or HTTPS, which is for the protocol that will be used on this connection, then we have the domain name, which is restcountries.eu in this case.

And also after a slash we have to so-called resource that we want to access and in this case, that's /rest/V2 and so on. Now this domain name, restcountries.eu is actually not the real address of the server that we're trying to access. What this means is that we need a way of kind of converting the domain name to the real address of the server and that happens through a so-called D-N-S.
```

```
D-N-S stands for domain name server and domain name servers are a special kind of server, So they are basically like
the phone books of the internet. So the first step that happens when we access any Web server is that the browser
makes a request to a DNS and this special server will then simply match the web address of the URL to the server's
real IP address, all right.
And actually this all happens through your internet service provider, then after the real IP address has been sent
back to the browser, we can finally call it.


```

```
 https://104.27.142.889:443

1)protocol                2)IP adress           3)Port number
(HTTP or HTTPS)                             (Default 443 for HTTPS, 80 for HTTP)

This is how the real address looks like, So it still has the protocol, but then comes the IP address and also the port that we access on the server and this port number is really just to identify a specific service that's running
on a server. So you can think of it like a sub address, okay.
This port number has nothing to do with the /rest/V2/ resource that we want to access. So that resource will actually be sent over in the HTTP request, as we will see in a moment and that actually wraps up the first step, once we have the real IP address, a TCP socket connection is established between the browser and the server and so
they are now finally connected and this connection is typically kept alive for the entire time that it takes to
transfer all files of the Website or all data.
```

```
  1) DNS                                            GET /rest/V2/alpha/PT HTTP/1.1
DNS LOOKUP (https://104.27.142.889:443)             Host: www.google.com
                                                    User-Agent: Mozilla/5.0
                                                    Accept-Language: en-US
  / \                                               <BODY>
   | |
   | |
   | |
    \ /
                                                 3) HTTP REQUEST
                                       -------------------------------------->
                                           2) TCP/IP socket connection
CLIENT                                <-------------------------------------->        WEB SERVER
(e.g browser)
https://restcountries.eu/rest/v2/alpha/PT  <---------------------------------
                                                        4) HTTP RESPONSE
 Protocol (HTTP or HTTPS)                               HTTP/1.1 200 OK
 IP address                                             Date: Fri, 18 Jan 2021
 Port number (Default 443 for HTTPS, 80 for HTTP)       Content-Type: text/html
                                                        Transfer-Encoding: chunked
                                                        <BODY>
```

```
Now what are TCP and IP?

Well TCP is the Transmission Control Protocol and IP is the Internet Protocol and together they are communication
protocols that define exactly how data travels across the Web. They are basically the Internet's fundamental control
system, because again, they are the ones who set the rules about how data moves on the internet.

Now it's time to finally make our request and the request that we make is an HTTP request, where HTTP stands for
Hypertext Transfer Protocol. So after TCP/IP, HTTP Is another communication protocol and by the way, a communication
protocol is a simply a system of rules that allows two or more parties to communicate. Now in the case of HTTP, it's
just a protocol that allows clients and Web servers to communicate and that works by sending requests and response messages from client to server and back.
```

```
Now a request message will look something like this :

                            GET /rest/V2/alpha/PT HTTP/1.1 ---->Start line: HTTP method+request target+HTTP version.

                            Host: www.google.com        |
                            User-Agent: Mozilla/5.0     |-------->HTTP Request headers(many different possibilities)
                            Accept-Language: en-US      |

                            <BODY>                       --------> Request body(only when sending data to server
                                                                   e.g POST)

The beginning of the message is the most important part called the start line and this one contains the HTTP method
that is used in the request then the request target and the HTTP version, so about the HTTP methods, there are many
available but the most important ones are:

 GET for simply requesting data
 POST for sending data
 PUT AND PATCH to basically modify data

 So you'll see that an HTTP request to a server is not only for getting data, but we can also send data.
 Now about the request target this is where the server is told that we want to access the rest/V2/alpha resource
 In this case, remember that?. We had this in the URL before and now it is simply sent as the target in the HTTP
 request and so then the server can figure out what to do with it. Now , if this target was empty, if it was a slash basically then we would be accessing the website's route, which is just restcountries.eu in this example.
```

```
 Then the next part of the request are the request headers, which is just some information that we sent about the
 request itself. There are tons of standard different headers, like what browser is used to make the request at what time, the user's language and many, many more.

 Now finally, in the case, we're sending data to the server. There will also be a request body and that body will
 contain the data that we're sending, for example: coming from an HTML form, that is the HTTP request .

 It's not us developers who manually write these HTTP requests, but it's still helpful and valuable that you understand what an HTTP request and also a response look like, also HTTPS as you probably know and the main difference between HTTP and HTTPS is that HTTPS is encrypted using TLS or SSL, which are yet some protocols, besides that the logic behind HTTP requests and responses still applies to HTTPS.
```

```
Our request is formed and now it hits the server which will then be working on it until it has our data or Web page
ready to send back and once it's ready, it will send it back using as you can guess, and HTTP response and the HTTP response message actually looks quite similar to the request:

                           HTTP/1.1 200 OK

                           Date: Fri, 18 Jan 2021
                           Content-Type: text/html
                           Transfer-Encoding: chunked

                           <BODY>

Also with a start line, headers and a body, in this case, the start line has besides the version also a status code
and a message and these are used to let the client know whether the request has been successful or failed, for example 200 means OK and the status code that everyone knows is 404 which means page not found. Then the response headers are information about the response itself, just like before and there a ton available and we can also make up our own actually.

Finally, the last part of the response is the body, which is present in most responses and this body usually contains the JSON data coming back from an API or the HTML of the Web page that we requested or something like that.

There will be many more requests and responses and that's because when we do the first request, all we get back is just the initial HTML file. That HTML file will then get scanned by the browser for all the assets that it needs in
order to build the entire Web page like Javascript, CSS files, Image files or other assets and then for each different file, there will be a new HTTP request made to the server. Basically this entire back and forth between client and server happens for every single file that is included in the Web Page. However, there can be multiple requests and responses happening at the same time, but the amount is still limited because otherwise the connection
would start to slow down, when all the files have finally arrived, then the Web page can be rendered in the browser according to the HTML,CSS and Javascript specifications that you already know. Now, as a final piece of the puzzle, let's talk again about TCP/IP and figure out how this request and response data is actually sent across the Web.

5)
index.html is the first to be loaded
               |
               v
Scanned for assets: JS,CSS,images
               |
               v
Process is repeated for each file

```

```
We said before that TCP and IP are the communication protocols that define how data travels across the Web, first the job of TCP is to break the requests and responses down into thousands of small chunks, called packets before they are sent. Once the small packets arrive at their final destination TCP will reassemble all the packets into the original request or response and this is necessary so that each packet can take a different route through the Internet because this way the message arrives at the destination as quick as possible, which would not be possible
if we sent the entire data simply as a big chunk, that would be like trying to go through dense traffic like the biggest bus that you can imagine.
Now as a second part, the job of the IP protocol is to actually send and route this packets through the Internet, It ensures that they arrive at the destination they should go using IP addresses on each packet

```

## **WHAT ARE PROMISES??**

```
Promise: An object that is used as a placeholder for the future result of an asynchronous operation.
   |
   | ---> Less formal
   v
Promise: A container for an asynchronously delivered value.
   |
   | --> Less formal
   v
Promise: A container for a future value.

Example: The response coming from an AJAX call
```

1. We no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results.

2. Instead of nesting callbacks, we can chain promises for a sequence of asynchronous operatios:
   **escaping callback hell.**

```
Before the future value           Asynchronous task
    is available                     has finished                        e.g Fetch API returns promise

              ASYNC TASK                                                        BUILD PROMISE
    PENDING   --------------->    SETTLED                                             |
                                 /       \                                            |
                           FULFILLED     REJECTED                                     |
                               /            \                                         V
                    Success!! The      An error happended.                      CONSUME PROMISE
                    value is now
                     available.                                            When we already have a promise
                                                                          e.g promise returned from Fetch API.
          We are able to handle these different states in our code.
```

```
In the very beginning, we say that a promise is pending, and this is before any value resulting from the asynchronous task is available, during this time the asynchronous task is still doing its work in the background.

Then when the task finally finishes, we say that the promise is settled and there are two different types of settled promises and that's fulfilled promises and rejected promises.
```

**The fulfilled promise**

```
Is a promise that has successfully resulted in a value just as we expect it, For example, when we use the promise to fetch data from an API, a fulfilled promise successfully got that data and it's now available to being used.
```

**The rejected promise**

```
Means that there has been an error during the asynchronous task, For example, fetching data from an API an error would be: when the user is offline and can't connect to the API server
```

**CONSUME PROMISE**

```
This results are relevant and useful when we use a promise to get a result, We consume a promise when we already have a promise, For example: the promise that was returned from the fetch function.

But in order for a promise to exist in the first place, it must first be built, So it must be created in the case of the fetch API it's the fetch function that builds the promise and returns it for us to consume.

In this case we don't have to build the promise ourselves in order to consume it. Most of the time we will actually just consume promises, which is also the easier and more useful part.
```

## **CHAINING PROMISES**

**Example script.js line 162**

```
const getCountryData = function (country) {

  // Country 1

  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json()) //this response here is in fact a resolved value.
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // Country 2

      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    });
};

getCountryData('portugal');

```

The second AJax call basically needs to happen here in this .then(data => renderCountry(data[0])) handler and we
need to return this new promise, because when we do that we will able to chain a new then() method on the result of this .then()data method , we used return fetch and the url.

The then() method always returns a promise no matter if we actually return anything or not, but if we do return a value then that value will become the fulfillment value of the return promise.

For example : if we return(23) instead of return fetch(`https....etc`) , when we chain a new then() method

```
   return 23;
  })
  .then(data => alert(data));

}

//output :

alert window: 1247.0.0.1:8080 says

23
```

That happens because whatever we return from this promise will become the fulfilled value of the promise and the
success value of the promise will be the value that we return from this .then(data) method and that is, 23.

## **HANDLING REJECTED PROMISES**

```
A promise in which an error happens is a rejected promise
Uncaught (in promise) TypeError: Failed to fetch
There are two ways of handling rejections and the first one is to pass a second callback function into the then()
method
```

```
.then(
      response => response.json(),
      err => alert(err)
    )
```

```
Now, what happens if the firts one is fullfilled and the second one is rejected  , well then we would also have to
catch an error too.

The second one is handle all the errors no matter where they appear in the chain right at the end of the chain by
adding a catch method

.catch(err => alert(err))
```
