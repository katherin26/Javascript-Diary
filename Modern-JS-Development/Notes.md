# **MODERN JAVASCRIPT DEVELOPMENT**

## **An overview of Modern JavaScript Development**

Today, We divide our projects into multiple modules and these modules can share data between them and make our code more organized and maintainable. Now, one great thing about modules is that we can also include 3rd-party modules into our own code and there are thousands of open source modules, which we also call packages that developers share on the NPM repository and we can then use these packages for free in our own code.

For example, the popular React framework, jQuery or even librarys. All these packages are available through NPM and this stands for Node Package Manager because it was originally developed together with Node.js for Node.js.

```
MODULE

MODULE              ==========> BUILDING ==========> TRANSPILING  ==========> JAVASCRIPT BUNDLE
                                                     POLYFILLING
3RD PARTY
PACKAGE
__________          _________________________________________________________
DEVELOPMENT                                 BUILD PROCESS                       PRODUCTION


                                          WEBPACK  OR PARCEL

  NODE PACKAGE MANAGER

NPM = - 3rd party modules
      - Development tools
      - Both repository and
      Softwate

NODE
```
