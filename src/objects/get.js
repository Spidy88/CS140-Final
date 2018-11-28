/**
 * get(obj, path, defaultValue)
 * ----------
 * Returns the value stored in object using the given keys
 * from the path array. If the path is invalid, the defaultValue
 * is returned.
 *
 * var x = {
 *     key1: true,
 *     key2: 2,
 *     key3: {
 *         nested1: 'JavaScript'
 *     },
 *     key4: ['a', 'b', 'c']
 * };
 *
 * var result = get(x, ['key3', 'nested1'])
 * // result is 'JavaScript'
 *
 * var result = get(x, ['key8', 'nested1'], 'not found');
 * // result is 'not found'
 *
 * var result = get(x, ['key4', '0'], 'not found');
 * // result is 'a'
 */
