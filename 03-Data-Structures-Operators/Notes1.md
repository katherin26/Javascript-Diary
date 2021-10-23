# **ARRAYS VS SETS AND OBJECTS VS MAPS**

## **ARRAYS**

```
tasks = ['Code','Eat','Code'];
["code","Eat", "Code"];

-Use when your need ordered list of values (might contain duplicates)
-Use when you need to manipulate data
```

## **SETS**

```
tasks = new Set(['code','Eat','Code']);
{"code","Eat"}

-Use when you need to work with unique values
-Use when high-performance is really important (Operaciones como buscar un elemento o eliminar un elemento del set puede ser 10 vecez mas rapido que en array ).
-Use to remove duplicates from arrays.

//Set no reemplaza a un array solo lo complementa
```

## **OBJECTS**

```
task = {
task: 'Code',
date: 'Today',
repeat: true
};

-More "traditional" Key/Value store ("abused" objects)
-Easier to write and access values with . and [].
```

## **MAPS**

```
task = new Map([
['Task','Code'],
['Date','Today'],
[false,'Start coding!!']
]);

-Better Performance
-Keys can have any data type
-Easy to iterate
-Easy to compute size
```
