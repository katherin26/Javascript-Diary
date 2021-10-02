# **WHY ARCHITECTURE??**

1. The architecture will give our project in which we can then write the code, just like a house,
   software also needs a structure.
   In sotfware, structure basically means how we organize and divide the code into different modules, classes and functions, all these will basically hold our code together and give it structure.

2. Maintainability, when we build a project we always need to think about the future and keep in  
   mind the project is never really done, it is never finished.

   We will always need to change things in the future and we will need to maintain the project and that only works if the project is nicely structured. Plus, we might even want to add new features to the project, which brings us to expandability.

   Expandability : is basically the ability to easily add new features in the future and once again, that is only possible with a good structure and a good overall architecture.

The perfect architecture is basically one that allows for all these three aspects of structure maintainability and expandability, Now, in order to achieve that perfect architecture, we can create our own architecture from scratch.

However, that only works with a really small project, but when the project grows more complex then it's going to be very hard to achieve a good architecture completely on our own, instead we can use a well established architecture pattern that developers have been using for years.

Example : Model view controller , Model view presenter, flux and many other architectures

```
Like a house, software                                                      - We can create our own
needs a structure: the way                                                  architecture.
we organize our code.                                                       - We can use a well-
                                                                            established architecture
                                      STRUCTURE                             pattern like MVC, MVP,
                                                                            Flux, etc.
                                                                            - We can use a framework like React, Angular, Vue.

                  MAINTAINABILITY                   EXPANDABILITY

A project is never done!
We need to be able to easily
change it in the future.


```

# **COMPONENTS OF ANY ARCHITECTURE**

## **BUSICESS LOGIC**

1. Code that solves the actual business problem.
2. Directly related to what business does and what it needs.
3. Example : Sending messages, storing transactions, calculating taxes.

## **STATE**

1. Essentially stores all the data about the application.
2. Should be the "single source of truth".
3. UI should be kept in sync with the state. (Keeping in sync)
4. State libraries exist.

## **HTTP LIBRARY**

1. Responsible for making and receiving AJAX requests.
2. Optional but almost always necessary in real-world apps.

## **APPLICATION LOGIC (ROUTER)**

1. Code that is only concerned about the implementation of application itself.
2. Handles navigation and UI events.

## **PRESENTATION LOGIC**

1. Code that is concerned about the visible part of the application.
2. Essentially displays application state. (Keeping in sync)

# **THE MODEL VIEW CONTROLLER (MVC) ARCHITECTURE**

This architecture contains three big parts which are the model, the view and the controller.

One of the big goals of the MVC pattern is separate logic from application logic, which makes developing the application so much easier, for that reason we need something to connect these two parts and that is the controller.

**THE VIEW** = Presentation Logic, is the part of the application interacting with the user.

**THE MODEL** = Applications data, usually contains the state and also the business logic that manipulate the state. Also contains the HTTP library that might get some data from the web from some API or some back-end.

**THE CONTROLLER** = Contains the application logic and creates a bridge between the model and a view which in fact, should know nothing about each other

```

WEB   <-------------         MODEL              CONTROLLER            VIEW        ------------->USER
       ------------->
                         Business Logic      Application Logic    Presentation Logic

                         State               Bridge between model
                                             and views(which don't
                         HTTP Library        know about one another)

```
