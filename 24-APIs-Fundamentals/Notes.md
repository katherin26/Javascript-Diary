1. PAW = is a full featured http client that let you test your apis.
2. RapidAPI LEARN = https://rapidapi.com/learn/rest-apis/introduction?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=DevRel&utm_campaign=DevRel
3. API HUB = https://rapidapi.com/hub?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=DevRel&utm_campaign=DevRel
4. BEST PRACTICES = https://restfulapi.net/resource-naming/

# **WHAT IS AN API**

Is an aplication programing interface, it allows applications to talk to each other.

## **SO, WHAT EXACTLY IS AN API??**

When you use an app the application connects to the internet and sends the data back to the
server retrieves that data performs the necessary action and sends it back to your phone or
computer the application then gets that data and presents you with the information you want in
a readable format and that's what an API is, for example:

Imagine you're building a trading platform you'll need to support various features like exchange of currency fluctuation of market rates authentication payment processing and much more building and maintaining such functionalities is difficult to resolve these issues you can use integrations with various other software via APIs to explain this better let's take a
familiar example:

**Example**

You're sitting at a table in your favorite restaurant with a plenty of choices to order from the kitchen is the part of the system that will prepare your order, what is missing is the critical link to communicate your order to the kitchen and deliver your food back to your table and that's the waiter or the API comes in , the waiter is the messenger or api that takes your request or order and tells the kitchen the system what to do, then the waiter delivers the response back to you in this case it is the food.

## **Let's talk about security**

You're accessing all web applications through some sort of a device it can be a phone or a desktop pc, let's say you're using your phone to get to a specific application your phone's data is never fully exposed to the server and likewise the server is never fully exposed to your phone instead each communicates with small data packets sharing only what is necessary like ordering a takeout, you tell the restaurant what you would like to eat and then they tell you what they need in return and then in the end you get your meal more recently, APIs became even more secure.

Right now most of the APIs are adhering to standars tipically :

## **HTTP AND REST**

**REST** = Representational State Transfer.
Is a standard that web applications use to simplify the communications with each other.
APIs that follow the REST principles are called RESTful.
**{RESTful API}**

The main charactetistic is the separation between the client and the server.
Implementation of the Client and Implementation of the Server can be done independently without each knowing about the other, this means that the code on the client side can be changed at any time without affecting the operation of the server and the code of the server side can be changed without affecting the operation of the client by using a rest api different clients or computers hit the same rest end points perform the same actions and receive the same responses systems that follow the rest principles are stateless meaning that the server does not know anything about what state the client is in and viceversa in the rest architecture clients send requests to retrieve or modify resources and servers send responses to those requests and all of these requests follow the same structure an api request has to have an endpoint, meaning the url that we are requesting .

**ANATOMY OF AN API REQUEST**

```
Name :       Description
EndPoint :   The URL that you request for
Method:      The type of your request
Headers:     Additional information for either the client or the server
Body :       Information sent to the server
```

For example whenever you go to a specific url you're basically just making a **get** request to get that specific website and in this case the endPoint is rapidapi.com/learn.
Your api request also has to have a method meaning the type of the request we're making in this case let's say we're making a post request meaning we want to send some data over using that request an api request also has headers additional information for either the client or the server in this case that can be some information about the body and finally the body itself is the information sent to the server let's say that we want to create a new user with the name John Doe this was the anatomy of an api request rigth now we're going to take a look at the different methods that we can make post in just one of them let's take a look at the standard ways to make request and send responses.

```
Select component to hightlith :  https://rapidapi.com/learn
EndPoint                         POST
Method                           Some information about the : "Body"
Header                           Create a new user with the name "John Doe"
Body

```

**ANATOMY OF AN API RESPONSE**

```
Name : Description
Headers : Additional information for either the client or the server .
Body : The name of the requested user is "John Doe"

```

```
Select component to highlight : Some information about the "Body" of the response.
Headers : The name of the requested user is "John Doe"
Body
```

To talk about that we have to mention another acronym :

**CRUD** = Stands for **Create**, **Read**, **Update** and **Delete**.

```
 In a rest enviroment CRUD often corresponds to the http methods
 POST : Create,
 GET : Read,
 PUT: Update,
 DELETE: Delete.

```

Rest requires that a client make a request to the server in order to retreive or modify the data on the server and **HTTP** request is generally consisted of an **http verb** which defines what kind of operation are we performing a header, which allows the client to pass along information about the request a path of the resource an optional message body containing data.

# **WHAT IS HTTP?**

(Hypertext Transfer Protocol) is a protocol generally used by web services for serving HTML documents. A client request to a server for a resource, and the server sends a response.

**HTTP** = There are 4 basic HTTP verbs we use in request to interact with resources in a REST system.

-First one is = **GET** request allows us to get a specific resource by id or get a collection of resources .

-Second one is = **POST** Simply allows us to create a new resource.

-Third one is = **PATCH AND PUT** Allows us to update a specific resource by id. The main difference between PATCH and PUT is that PATCH is used to partially modify a resource, whereas PUT is used to update the entire resource on the server.

-Four one = **DELETE** Allows us to remove a specific resource by id.

**These were only the 4 main HTTP verbs , there are also a few more less known verbs.**

# **WHAT ARE STATUS CODES??**

## **HTTP STATUS**

## **1XX Informational Response**

**100** = Informational.

Everything that starts with 100s the request was received, something needs to continue.

## **2XX Succesful**

**200**= Everything went well.

Everything that starts with 200s that means the request was successfully received, understood, and accepted.

## **3XX Redirections**

**300**= Redirection.

## **4XX Client-side error**

**404**= Which means that the requested resource couldn't be found

## **5XX Server-side errors**

**500**= Server Error.

# **APIs Testing**

Allows to check in detail all of the parts of existing APIs as i've mentioned apis have become the center of software development, luckily testing then can greatly improve the efficiency and help you deliver software faster than ever while there are many aspects of api testing it generally consists of making requests to a single resource or sometimes multiple api endpoints and validating the response whether for performance security , functional correctness, or just a status check.

**For API testing**, we'll be using **PAW**

Paw is a free to use APIs testing tool that allows you to send all kinds of HTTP requests!.
It allows you to organize and create groups of request and envirionment variables for individual projects, whatever you send or receive paw will find the best way to display it, supports web pages, images, pdfs and has a full syntax highlighting for most programming languages. Paw knows about your mistakes and warns you when something looks wrong it makes you avoid common mistakes such as sending a body in a get request.
