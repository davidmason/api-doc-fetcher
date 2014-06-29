/* Return a callback that will call each of the given functions
 * in order as it is called, forwarding all arguments to the nested
 * callback.
 * Once all callbacks have been called, subsequent calls will call
 * the last callback. This could be used to specify a default or
 * trigger an error condition.
 */
module.exports = function callInOrder () {
  var callbacks = Array.prototype.slice.call(arguments);
  var calls = 0;
  return function () {
    calls++;
    if (calls < callbacks.length) {
      callbacks[calls - 1].apply(this, arguments)
    } else {
      callbacks[callbacks.length - 1].apply(this, arguments)
    }
  }
}