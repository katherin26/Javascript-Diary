# **SELECTING CREATING AND DELETING ELEMENTS**

## **SELECTING ELEMENTS**

-console.log(document.documentElement); `<html>...</html>`
-console.log(document.head); `<head></head>`
-console.log(document.body); `<body></body>`

### **querySelector**

-document.querySelector('.header'); //We used this a lot when we want to select child elements.

### **querySelectorAll**

-const allSections = document.querySelectorAll('.section');
-console.log(allSections); `NodeList(4) [section....]` // contain all of the elements.

### **getElementById**

-document.getElementById('section--1');

### **getElementByTagName**

-const allButtons = document.getElementsByTagName('button');
-console.log(allButtons); `HTMLCollection(9)[button ...] `Also called life collection that means that if the
DOM changes then this collection is also immediately updated automatically

### **getElementByClassName**

-console.log(document.getElementsByClassName('btn')); `HTMLCollection(5)[button..]`
