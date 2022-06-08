# **Big O notation**

1. Big O notation is a way to Formalize fuzzy counting.
2. It allows us to talk formarly about how the runtime of an algorithm grows as the
   inputs grow.
3. We won't care about the details, only the trends.

**Time Complexity**

1. We've been focusing on time complexity: how can we analyze the runtime of an algorithm as the size of the inputs increases?

**Space Complexity**

1. We can also us big O notation to analyze space complexity:
   how much additional memory do we need to allocate in order to run the code in our algorithm?

```
Most primitives (booleans, numbers, undefined, null) are constant space.
Strings require  O(n) space (where n is the string length)
Reference types are generally O(n), where n is the length (for arrays) or the number of the keys (for objects).

```

**Logarithms**

1. Logarithms is the inverse of exponentiation.
2. So just like division and multiplication are apair logarithms and exponents exponentiation are a pai.

```
log2(8) = 3   ====>   2^3 = 8

```

Two of eight equals three, and what we're really asking or calculating here is two to what power equals eight.

so if we take two and we raise it to some power, what power will give us eight??

The answers is 3,

NOTE: The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

```
  %2  %2  %2
 8 - 4 - 2 - 1   === log(8) = 3
```

**RECAP**

1. To analyze the performance of an algorithm, we use Big O Notation.
2. Big O Notation can give us a high level understainding of the time or space complexity of an algorithm.
3. Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?).
4. The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm.

**The BIG O of the objects**

```
let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers:[1,2,3,4]
}
```

**O(n)**

```
Object.keys(instructor)
(3) ["firstName","isInstructor","favoriteNumbers"]
```

**O(n)**

```
Object.entries(instructor)
(3) [Array(2), Array(2), Array(2)]
```

**O(1)**

```
instructor.hasOwnProperty("firstName")
true
```

**ARRAYS -- ORDERED LISTS**

```
let names = ['Michael', 'Melissa','Andrea'];
let values = [true, {}, [],2,"awesome"];
```

//NOTE: Insertion and removal at the start is worse than the end.

1. Insertion - It depends
2. Removal - It depends
3. Searching - O(n)
4. Access - O(1)

```
push- O(1)
pop- O(1)
shift- O(n)
unshift- O(n)
concat- O(n)
slice- O(n)
sort- O(n * log n)
forEach/map/filter/reduce/etc - O(n)
```
