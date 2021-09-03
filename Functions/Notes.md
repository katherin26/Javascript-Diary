# **FIRST-CLASS AND HIGHER - ORDER FUNCTIONS**

## **FIRST-CLASS FUNCTIONS**

- Javascript treats functions as first-class citizens
- This means that functions are simply values
- Functions are just another "Type" of object

### **1)STORE FUNCTIONS IN VARIABLES OR PROPERTIES**

```
const add = (a,b) => a+b; //function expression
const counter = {
value: 23,
inc: function () { //object method
this.value++;
  },
};
```

### **2)PASS FUNCTIONS AS ARGUMENTS TO OTHER FUNCTIONS**

```
const greet = () => console.log('Hey User);
btnClose.addEventListener('click',greet)
```

### **3) RETURN FUNCTIONS FROM FUNCTIONS**

```
Call methods on functions:

counter.inc.bind(someOtherObject);
```

## **HIGHER-ORDER FUNCTIONS**

```
A function that receives another function as an argument, that returns a new function, or both.
This is only possibble because of first-class functions.
```

### **1) FUNCTION THAT RECEIVES ANOTHER FUNCTION**

```
const greet = () => console.log('Hey User);
btnClose.addEventListener('click',greet)
//AddEventListener (Higher order functions)
//greet = (Callback function)
```

### **2) FUNCTION THAT RETURN NEW FUNCTION**

```
function count(){//Higher-order function
let counter = 0;
return function(){//Returned function
counter++;
  };
}
```
