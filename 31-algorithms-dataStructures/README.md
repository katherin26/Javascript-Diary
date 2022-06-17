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

**HOW TO UNDERSTAND A PROBLEM AND SOLVE IT?**

**Step 1 Understand the Problem.**

1.  Can I restate the problem in my own words?
2.  What are the inputs that go into the problem?
3.  What are the outputs that should come from the solution to the problem?
4.  Can the outputs be determined from the inputs? In other words, do I have enough information to solve the
    problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
5.  How should I label the important pieces of data that are a part of the problems?

**Step 2 Explore Concrete Examples**

1. Coming up with examples can help you understand the problem better.
2. Examples also provide sanity checks that your eventual solution works how it should.

- Start with simple examples.
- Progress to More Complex Examples.
- Explore Examples with Empty inputs.
- Explore Examples with Invalid Inputs.

```
Write a function which takes in a string and returns counts of each character in the string.

1. Start with Simple Examples.

charCount("aaaa"); // {a:4}

2. Progress to More Complex Examples.

"My phone number is 182763" ====> Contains numbers a 4 words.
"Hello hi" ====> Uppercase and lowercase

3. Explore Examples with Empty Inputs.

charCount("") ===> What happened?

4. Explore Examples with Invalid Inputs.

charCount() ===> What happened?
```

**Step 3 Break It Down**

1. Explicity write out the steps you need to take.

" This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details. "

```
Let's do it with the same problem from earlier !

Write a function which takes in a string and returns counts of each character in the string.

function charCount(str){
    // make object to return at end.
    // Loop over string, for each character..
            //If the char is a number/letter AND is a key in object, add one to count.
            //If the char is a number/letter AND not in object, add it to object and set value to 1.
            //If character is something else (space, period, etc...) don't do anything.
    // return object at end
}
```

**Step 4 Solve/Simplify**

1. Solve a simpler problem !
2. Find the core difficulty in what.
3. Temporarily ignore that difficulty.
4. Write a simplified solution.
5. Then incorporate that difficulty back in.

```
Let's do it with the same problem from earlier !

Write a function which takes in a string and returns counts of each character in the string.

function charCount(str){
    //make object to return at end.

    var result = {};
    //Loop over string, for each character...
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        //if the char is a number/letter AND is a key in object, add one to count.
        if(result[char] > 0){
            result[char]++;
            //If the char is a number/letter AND not in object, add it to object and set value to 1.
        }else{
            retult[char] = 1;
        };
        //If character is something else(space, period, etc.) don't to anything
        //Return object at end.

        return result;
    }
}
```

**Step 5 Look Back & Refactor**

1. Can you check the result?
2. Can you derive the result differently?
3. Can you understand it at a glance?
4. Can you use the result or method for some other problem?
5. Can you improve the performance of your solution?
6. Can you think of other ways to refactor?
7. How have other people solved this problem?

```
function charCount(str){
    var obj = {};
    for(var i = 0; i < str.length; i++){
        var char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)){
            obj[char]++;
        }else{
            obj[char] = 1;
        };
    }
    return obj;
}
```

```
function charCount(str){
    var obj = {};
    for(var char of str){
        if(isAlphaNumeric(char)){
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumberic(char){
    var code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) && //numeric (0-9)
        !(code > 64 && code < 91) && //upper alpha(A-Z)
        !(code > 96 && code < 123)) && {//lower alpha (a-z)
        return false;
        }
        return true;
}

charCodeAt(0);

```

# **Problem Solving Patterns**

1. Frecuency Counter
2. Multiple Pointers

Creating **Pointers** or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.

**Very** efficient for solving problems with minimal space complexity as well.

3. Sliding window

This pattern involves creating a window which can either be an array or number from one position to another.

Depending on a certain condition, the window wither increases or closes (and a new window is created).

Very useful for keeping track of a subset of data in an array / string etc...

# **RECURSION**

A process (a function in our case) that calls itself.

NOTE: In almost all program languages, there is a built in data structure that manages what happens when functions are invoked.
It's named the call Stack!!

**The call Stack**

1. It's a stack data structure, we'll talk about that later!!
2. Any time a function is invoked it is placed (pushed) on the top of the call stack.
3. When JS sees the return keyword or when the functions ends, the compiler will remove(pop).

**Two essential parts of a recursive function!**

1. Base Case
2. Different Input

# **SEARCHING ALGORITHMS**

There are mamny different search methods on arrays in Javascript :

1. indexOf
2. Includes
3. Find
4. findIndex

**Example**: We need to check for the number 12.

`[5,8,1,100,12,3,12]`

1. Is 5 === 12 ===> NO
2. Is 8 === 12 ===> NO
3. Is 1 === 12 ===> NO
4. Is 100 === 12 ===> NO
5. Is 12 === 12 ===> YES RETURN
6. Is 3 === 12 ===> NO
7. Is 12 === 12 ===> YES RETURN

# **Binary Search**

1. Binary Search is a much faster form of search.
2. Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time.
3. Binary search only works on **sorted arrays**!

**PseudoCode**

1.  This function accepts a sorted array and a value.
2.  Create a **left pointer** at the start of the array, and a **right pointer** at the end of the array.
3.  While the left pointer comes before the right pointer:

         3.1 create a pointer in the middle.
         3.2 If you find the value you want, return the index.
         3.3 If the value is too small, move the left pointer up.
