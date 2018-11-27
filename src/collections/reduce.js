/**
 * reduce(collection, cb, initialValue)
 * ----------
 * Returns a single value created by invoking the callback function for
 * each item in the collection. On each iteration the callback is invoked
 * with the current item, index/key, and result (starts as initialValue).
 * This result replaces the collection parameter from forEach and map.
 * The result of invoking the callback is stored, and used for the next iteration.
 * Once all iterations are complete, reduce returns the final result.
 *
 * For all other data types (undefined, null, number, boolean, etc...) throw an exception
 */
