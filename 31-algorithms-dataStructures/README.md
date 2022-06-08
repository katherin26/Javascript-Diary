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
