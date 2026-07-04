## ⚛️ React useCallback Hook

A comprehensive React project demonstrating the useCallback Hook, explaining how function memoization works, how to prevent unnecessary component re-renders, and how to optimize React applications using stable function references.

This project is designed to help developers understand performance optimization techniques through practical examples and real-world use cases.

🌐 Live Demo 👉  [deployed URL here](https://use-callback-hook-concept.vercel.app/)

---

## 📖 About The Project

In React, every time a component re-renders, any functions declared inside it are recreated. While this is usually fine, passing newly created functions as props to child components can trigger unnecessary re-renders.

The useCallback Hook solves this by memoizing functions, ensuring the same function reference is reused until its dependencies change.

This project demonstrates:

- What useCallback is
- How function memoization works
- Preventing unnecessary component re-renders
- Working with React.memo
- Optimizing callback functions
- Best practices for using useCallback

Whether you're learning React Hooks or preparing for frontend interviews, this project provides practical examples to master React performance optimization.

---

## 🚀 What is useCallback?

The useCallback Hook returns a memoized version of a callback function.

Instead of creating a new function on every render, React returns the previously cached function until one of its dependencies changes.

### Syntax:

const memoizedCallback = useCallback(() => {

    // Function logic
    
}, [dependencies]);

---

## ✨ Features

Hook Demonstrations

✔ Function Memoization

✔ Parent & Child Components

✔ Preventing Re-renders

✔ React.memo Integration

✔ Dependency Arrays

✔ Stable Function References

✔ Event Handlers

✔ Performance Optimization

----

## React Concepts Covered

- useCallback
- React.memo
- Memoized Functions
- Component Re-rendering
- Dependency Arrays
- Parent & Child Communication
- Performance Optimization
- React Hooks Best Practices

---

## Example Usage

### Basic Example

import { useCallback } from "react";

function App() {

const handleClick = useCallback(() => {

    console.log("Button Clicked");
    
}, []);


return (

    <button onClick={handleClick}>
        Click Me
    </button>
    
);

}

### Working with React.memo

const increment = useCallback(() => {

    setCount((prev) => prev + 1);
    
}, []);


Now the child component wrapped with React.memo won't re-render unless the callback's dependencies change.

---

## 🎯 Why useCallback?

The useCallback Hook helps developers:

✅ Prevent Unnecessary Re-renders

✅ Memoize Functions

✅ Improve Rendering Performance

✅ Work Efficiently with React.memo

✅ Optimize Parent-Child Communication

✅ Reduce Unwanted Function Recreation

---

## 🚨 When NOT to Use useCallback

Avoid using useCallback for:

❌ Every Function

❌ Small Components

❌ Functions Not Passed as Props

❌ Simple Applications

❌ Premature Optimization

Using useCallback unnecessarily can increase code complexity without providing performance benefits.

---

## 📚 Learning Outcomes

After exploring this project, you'll understand:

✔ Function Memoization

✔ Stable Function References

✔ React.memo Integration

✔ Component Re-rendering

✔ Dependency Arrays

✔ Parent-Child Optimization

✔ React Performance Best Practices

✔ Efficient React Component Design

---

## 🙋‍♀️ Author - Manaswini Sasmal

📲 - 6370094643

👩‍💻 Frontend Developer | React Enthusiast

🔗 Portfolio - https://manaswini-portfolio.vercel.app/

📧 manaswinisasmal5597@gmail.com

🔗 LinkedIn - https://www.linkedin.com/in/manaswini-sasmal-b77a21162/
