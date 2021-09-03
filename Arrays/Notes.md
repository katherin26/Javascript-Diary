# **WHICH ARRAY METHOD TO USE ??**

## **TO MUTATE ORIGINAL ARRAY**

### **1) ADD TO ORIGINAL**

```
   1.1) .Push ===>(end)
   1.2) .unshift ===>(start)
```

### **2)REMOVE FROM ORIGINAL**

```
   2.1) .pop() ===> (end)
   2.2) .shift() ===> (start)
   2.3) .splice() ===> (any)
```

### **3)OTHERS**

```
   3.1) .reverse() ===>
   3.2) .sort() ===>
   3.3) .fill() ===>
```

## **A NEW ARRAY**

### **1) COMPUTED FROM ORIGINAL**

```
   1.1) .map() ===>(loop)
```

### **2) FILTERED USING CONDITION**

```
   2.1) .filter()
```

### **3) PORTION OF ORIGINAL**

```
   3.1) .slice()
```

### **4) ADDING ORIGINAL TO OTHER**

```
   4.1) .concat()
```

### **5) FLATTENING THE ORIGINAL**

```
   5.1) .flat()
   5.2) .flatMap()
```

### **AN ARRAY INDEX**

### **1) BASED ON VALUE**

```
   1.1) .indexOf() ===>
```

### **2) BASED ON TEST CONDITION**

```
   2.1) .findIndex()

   //NOTE: AN ARRAY ELEMENT
```

### **3) BASED ON TEST CONDITION**

```
   3.1) .find()
```

## **KNOW IF ARRAY INCLUDES**

### **1) BASED ON VALUE**

```
   1.1) .includes()
```

### **2) BASED ON TEST CONDITION**

```
   2.1) .some()
   2.2) .every()
```

### **A NEW STRING**

### **3) BASED ON SEPARATOR STRING**

```
   3.1) .join()
```

## **TO TRANSFORM TO VALUE**

### **1) BASED ON ACCUMULATOR**

```
   1.1) .reduce()

   (Boil down array to single value of any type: number , string , boolean , or even new array or object)
```

### **TO JUST LOOP ARRAY**

### **2) BASED ON CALLBACK**

```
   2.1) .forEach()

   (Does not create a new array just loops over it)
```
