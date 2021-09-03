# **What is ?? OOP**

```

const example = {
-------------------------------Data
    userExample: 'coco',
    password: 'dk23s',
-------------------------------Behaviour
    login(password){
        //Login logic
    },
    sendMessage(str){
        //Sending logic
    }
}
```

```
=> OOP is a programming paradigm based on the concept objects = paradigm = Style of code "how" we write and organize code;
```

```
=> We use objects to model(describe) real-world or abstract features;
E.g. userExample or todo list item
E.g. HTML component or data structure
```

```
=> Objects may contain data (properties and code(methods).By using objects,we pack data and the corresponding
behavior into one block.
```

```
=> In OOP, objects are self-contained pieces/blocks of code.
```

```
=> Objects are building blocks of applications, and interact with one another.
```

```
=> Interactions happen through a public interface(API):methods that the code outside of the object can access and use to communicate with the project.
```

```
=> OOP was developed with the goal of organizing code, to make it more flexible and easier to maintain.
```

## **CLASS**

```
In OOP, we need actually a way to generate so to create , new objects from our code and to do that in traditional OOP we used something called class.

A class is like a blueprint which can be used to create new objects based on the rules described in the class,
It's like an architecture where the architect develops a blueprint to exactly plan and describe a house, But the blueprint is really just an abstract plan like a set of rules but nothing tangible than you can actually touch.

But from that blueprint many real houses can then be built in the real world and with classes it's just the same.
```

### **ABSTRACTION**

```
Ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we're
implementing , instead of messing with details that don't really matter to our implementation.

```

### **ENCAPSULATION**

```
Keeping properties and methods private inside the class, so they are not accessible from outside the class.Some
methods can be exposed as a public interface (API).

WHY??

Prevents external code from accidentally manipulating internal properties/state.
Allows to change internal implementation without the risk of breaking external code .

```

**Example (Not actually Javascript syntax)**

```
User{
    user
    ------------------------------> NOT accessible from outside the class!
    private password
    private email

    login(word){
    ------------------------------> STILL accessible from within the class!
        this.password === word
    }

    comment(text){
    ------------------------------> STILL accessible from within the class!
        this.checkSPAM(text)
    }
    ------------------------------> NOT accessible from outside the class!
    private checkSPAM(text){
        //Verify logic
    }
}
```

### **INHERITANCE**

```
Making all properties and methods of a certain class available to a child class. forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships.
```

```

---------------------->INHERITED<------------------------
------------->CHILD CLASS EXTENDS PARENT CLASS<----------

PARENT CLASS                               CHILD CLASS

User{                                   Admin{
    user                                      user
    password                                  password
    email                                     email
                                              permissions ------------> Own methods and properties.
    login(password){
        //Login logic                         login(password){
    }                                              //Logic logic
    sendMessage(str){                         }
        //Sending logic                       sendMessage(str){
    }                                              //Sending logic
}                                             }
                                              deleteUser(user){------------> Own methods and properties.
                                                   //Deleting logic
                                              }
                                           }
```

### **POLYMORPHISM**

```
A child class can overwrite a method it inherited from a parent class.

```

```

----CHILD CLASS----------------PARENT CLASS------------------CHILD CLASS------------
<--------------------------<===INHERITANCE===>------------------------------->
<--------Own login method overwriting login method inherited from user------------->


  Admin{                      User{                          Admin{                     {
    user                           user                           user
    password                       password                       password
    email                          email                          email
    permissions                                                   posts
    login(password,key){
        //Different logic          login(password){               login(password){
    }                                 //Login logic                  //Login logic
    deleteUser(user){               }                              }
        //Deleting logic            sendMessage(str){              writePost(){
    }                                    //Sending logic             //Writing logic
}                                   }                              }
                                }                                }
```
