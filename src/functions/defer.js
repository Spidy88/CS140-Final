/**
 * defer(fn)
 * ----------
 * Places the function fn on the event loop to be invoked next.
 * This function does not return a value.
 * Hint: setTimeout
 *
 * Rather then invoke the function on the current thread, this places
 * the function at the end of the event loop to be invoked next.
 * Why do this? This allows you to complete the current code before the
 * function runs, but doesn't delay the code by a specified amount of time.
 */
