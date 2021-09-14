# **PROJECT PLANNING**

## **PLANING STEP**

## **1. USER STORIES**

```
Description of the application's functionality from the user's perspective. All user stories put together
describe the entire application.

Common format = As a [type of user] = Who? Example: user, admin, etc.
                I want [an action]  = What?
                so that [a benefit] = Why?
```

```
1. As a user, I want to log my running workouts with location, distance, time, pace and steps/minute, so I can keep
   a log of all my running.
2. As a user, I want to log my cycling workouts with location, distance, time, speed and elevation gain, so I can
   keep a log of all my cycling.
3. As a user, I want to see all my workouts at a glance, so I can easily track my progress over time.
4. As a user, I want to also see my workouts on a map, so I can easily check where I work out the most.
5. As a user, I want to see all my workouts when I leave the app and come back later,so that I can keep using there
   app over time.

```

## **2. FEATURES**

```
1. We are gonna need a Map where the user clicks to add a new workout (best way to get location coordinates).
   Geolocation to display map at current location(more user friendly).
   Form to input distance, time, pace,steps/minute.
```

```
2. Form to input distance, time, speed, elevation gain.
```

```
3. Display all workouts in a list.
```

```
4. Display all workouts on the map.
```

```
5. Store workout data in the browser using local storage API
   On page load, read the saved data from local storage and display.
```

```
6. Display workouts on the map.
```

```
7. Store workout data in the browser.
```

```
8. On page load, read the saved data and display.
```

```
9.Move map to workout location on click.
```

## **3. FLOWCHART = what we will build**

```
When we start to build a flow chart like this it's a good idea to start with events, in this example we
start with the event of the page loading because is the first event that basically occurs on any page.

All the code that is in the top level will essentially be executed when the page loads. We want to start by getting
the user's location coordinates using the geolocation API then after that data arrives we want to then render the map basically centered on the current location of the user . Then we need a form to input the data for cycling and
for running.
We rendered the form in step three and four and then we're going to have an event listener on that form
whenever the user submits in your workout it is gonna be rendered on the map and on the list in steps five and six.
We want to store this workout data in the browser and then read that data when the pages reloads.
When the user creates a new workout it will store all the workouts in local storage, we're using that local storage API in the browser.
Then after the pages loads, we get all the workouts from local storage and render them on the map and on the list and that can only happen after the current location has been fetched and a map has been displayed and that's essentially what async means, and the last feature is move the map to the workout location whenever we click
on the workouts in the list, all we need is an event handler on the list and then whenever the user clicks on a
workout in the list it will move to that workout's location.

```

```
                 1. ASYNC           2                                                         3. 4.
Page Loads ====> Get current ====> Render Map on     bind handler   User clicks ====>    Render workout
                  location        Current location    -------->         on map               form
                 coordinates

               8. Load workouts                                     5.render workout
                   from local                                           on map
                    storage

               9. Move map to             User clicks on  <-------- 6.Render workout        User submits
                workout location          workout in list                in list            new workout

                                                                    7.Store workouts in
                                                                      local storage
```

## **4. ARCHITECTURE = how we will build it**

```
The architecture is all about giving the project a structure, and in that structure we can then develop the functio-
nality.
```

**Exist a few architecture patterns in Javascript, but in this example we are gonna used OOP with classes**

```
One of the most important aspects of any architecture is to decide where and how to store the data, Because data
is the most fundamental part of any application. Because without datam it doesn't even make sense to have an appli-
cation in the first place, in this case, the data that we need to store and to manage comes directly from the user
stories, So right in the first user story, we can already see that we will somehow need to store the location ,
distance, time, pace and steps/minute (cadence).

And to fit the second user story, we will have to implement basically the same data, So location, distance, time and
speed but then also the elevation gain instead of the steps per minute.

The design of our classes allow us to create objects that will hold this kind of data.

USER STORIES

1. Log my running workouts with location, distance, time, pace and steps/minute(cadence).
2. Log my cycling workouts with location, distance, time, speed, and elevetion gain.
```

```
We are gonna have a big parent class which will be called Workout and this one is gonna hold the distance duration
in coordinates and then we will have a more specific class for the running, which will hold the cadence and the pace.
```

```
                                       CLASS WORKOUT
                                            id
                                          distance
                                          duration
                                          coords
                                          date
                                     --------------------
                                         constructor()


                                         inheritance

               CHILD CLASS RUNNING                          CHILD CLASS CYCLING
                     name                                          name
                   cadence                                     elevationGain
                     pace                                          speed
             ------------------------                      ------------------------
                 constructor()                                   constructor()
```

```
STRUCTURING THE CODE =

Structuring the code and the events that we already have are the loading of the page then receiving a position
from the Geolocation API, This one isn't an event in the traditional sense, we are not handling it with Add event
Listener but we can still classify it as an event.
Then we have to click on the map, we have changing the input from Cycling to Running or from Running to Cycling, and we also have the submiting form and for that the best option is create different functions that will handle these different events and in fact , we are gonna create a big class called App that will basically hold all of these functions as methods.
```

```
                       CLASS  APP
Store all workouts<===  workouts    ===>    Array Holding all running or cycling objects
                           map

                 ----------------------------
        -------       constructor()                 <==== Load page
        |
        ------->     _getPosition()
                     _loadMap(position)             <==== Receive position
                     _showForm()                    <==== Click on map
                     _toggleElevationField()        <==== Change input
Store all workouts<==_newWorkout()                  <==== Submit form
                 ----------------------------
                  new Running() or new Cycling()
                  ----------------------------
                  Child class Running constructor()
                  Child class Cycling constructor()

```

```
We can immediately see that loading the page will of course trigger the constructor of the object that we're
gonna create through this class, at the beginning, we want to get the current position of the user using the
Geolocation API that why is pointing from constructor() to Get Position. Then as we receive that position, we
want to load the map based on that position.
Therefore, We're gonna have a method called Load Map, as we click on the map we want a method called Show Form.
Then we change the input, we want a method called Toggle Elevation Field and then the most important one is the
event of submitting the form and this new workout method will basically be the heart of this entire class, because
this is the one that will create new Running objects or new Cycling objects and these objects will be built based on the data that's coming in from the form and as the user keeps adding Running or Cycling workouts a new object will be created for each of the workouts

```

## **5. DEVELOPMENT STEP = Implementation of our plan using code.**
