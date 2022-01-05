1. PAW = is a full featured http client that let you test your apis.
2. RapidAPI LEARN = https://rapidapi.com/learn/rest-apis/introduction?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=DevRel&utm_campaign=DevRel
3. API HUB = https://rapidapi.com/hub?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=DevRel&utm_campaign=DevRel

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
Implementation of the Client and Implementation of the Server can be done independently without each knowing about the other, this means that the code on the client side can be changed at any time without affecting the operation of the server and the code of the server side can be changed without affecting the operation of the client by using a rest api different clients or computers hit the same rest end points perform the same actions and receive the same responses systems that follow the rest principles are stateless meaning that the server does not know anything about what state the client is in and viceversa in the rest architecture clients send requests to retrieve or modify resources and servers send responses to those requests and all of these requests follow the same structure an api request has to have an endpoint, meaning the url that we are requesting . For example whenever you go to a specific url you're basically just making a get request to get that specific website

**HTTP** =
