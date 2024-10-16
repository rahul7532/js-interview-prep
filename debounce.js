// Debouncing ensures the function is executed only after a specified delay.
function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
        console.log("arguments", args,...args, this);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Example usage:
const debouncedFunction = debounce(() => console.log('Executed!'), 1000);

debouncedFunction();  // Call 1
debouncedFunction();  // Call 2
debouncedFunction();  // Call 3


/**
 * implementation of a debounce function:

This code defines a `debounce` function, which is a higher-order function that takes two parameters:
1. `fn`: The function to be debounced
2. `delay`: The time in milliseconds to wait before executing the function

Here's how it works:

1. The `debounce` function creates a closure by defining a `timeoutId` variable in its scope.

2. It returns a new function that acts as a wrapper for the original function `fn`.

3. When the returned function is called:
   - It first clears any existing timeout using `clearTimeout(timeoutId)`. This cancels any previously scheduled execution of the function.
   - It then sets a new timeout using `setTimeout()`, which will execute the original function `fn` after the specified `delay`.
   - The new timeout ID is stored in `timeoutId` for potential cancellation in future calls.

4. The `...args` syntax allows the wrapper function to accept any number of arguments, which are then passed to the original function using `fn.apply(this, args)`.

5. The `apply()` method is used to call the original function with the correct `this` context and the provided arguments.

The purpose of debouncing is to limit the rate at which a function is called, especially for functions that might be called frequently (e.g., in response to user input or scroll events). This implementation ensures that the function is only executed after the specified delay has passed since the last call, effectively "debouncing" rapid successive calls into a single execution.
 */
