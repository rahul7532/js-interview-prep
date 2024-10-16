# JavaScript Interview Questions and Solutions

This repository contains various JavaScript interview questions and solutions for topics like debouncing, throttling, event emitters, custom promises, and more. Each solution is well-commented and easy to understand.

## Table of Contents

1. [Debounce](#debounce)
2. [Throttle](#throttle)
3. [Custom Promise](#custom-promise)
4. [Deep Clone](#deep-clone)
5. [Event Emitter](#event-emitter)
6. [Currying](#currying)
7. [Promise.all](#promise-all)
8. [Deep Equal](#deep-equal)
9. [Auto-Retry Promises](#auto-retry-promises)
10. [N Async Tasks in Parallel](#n-async-tasks-in-parallel)

## 1. Debounce

**File:** `debounce.js`

<!-- Debouncing ensures the function is executed only after a specified delay. -->

```javascript
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}
```
