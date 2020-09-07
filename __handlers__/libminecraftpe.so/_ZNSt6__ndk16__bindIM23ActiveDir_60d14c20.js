/*
 * Auto-generated by Frida. Please modify to match the signature of _ZNSt6__ndk16__bindIM23ActiveDirectoryIdentityFvN4pplx4taskIN3web4json5valueEEEEJPS1_RKNS_12placeholders4__phILi1EEEEEclIJS7_EEENS_13__bind_returnIS9_NS_5tupleIJSA_SD_EEENSJ_IJDpOT_EEEXsr22__is_valid_bind_returnIS9_SK_SO_EE5valueEE4typeESN_.
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call _ZNSt6__ndk16__bindIM23ActiveDirectoryIdentityFvN4pplx4taskIN3web4json5valueEEEEJPS1_RKNS_12placeholders4__phILi1EEEEEclIJS7_EEENS_13__bind_returnIS9_NS_5tupleIJSA_SD_EEENSJ_IJDpOT_EEEXsr22__is_valid_bind_returnIS9_SK_SO_EE5valueEE4typeESN_.
   *
   * @this {object} - Object allowing you to store state for use in onLeave.
   * @param {function} log - Call this function with a string to be presented to the user.
   * @param {array} args - Function arguments represented as an array of NativePointer objects.
   * For example use args[0].readUtf8String() if the first argument is a pointer to a C string encoded as UTF-8.
   * It is also possible to modify arguments by assigning a NativePointer object to an element of this array.
   * @param {object} state - Object allowing you to keep state across function calls.
   * Only one JavaScript function will execute at a time, so do not worry about race-conditions.
   * However, do not use this to store function arguments across onEnter/onLeave, but instead
   * use "this" which is an object for keeping state local to an invocation.
   */
  onEnter: function (log, args, state) {
    log('_ZNSt6__ndk16__bindIM23ActiveDirectoryIdentityFvN4pplx4taskIN3web4json5valueEEEEJPS1_RKNS_12placeholders4__phILi1EEEEEclIJS7_EEENS_13__bind_returnIS9_NS_5tupleIJSA_SD_EEENSJ_IJDpOT_EEEXsr22__is_valid_bind_returnIS9_SK_SO_EE5valueEE4typeESN_()');
  },

  /**
   * Called synchronously when about to return from _ZNSt6__ndk16__bindIM23ActiveDirectoryIdentityFvN4pplx4taskIN3web4json5valueEEEEJPS1_RKNS_12placeholders4__phILi1EEEEEclIJS7_EEENS_13__bind_returnIS9_NS_5tupleIJSA_SD_EEENSJ_IJDpOT_EEEXsr22__is_valid_bind_returnIS9_SK_SO_EE5valueEE4typeESN_.
   *
   * See onEnter for details.
   *
   * @this {object} - Object allowing you to access state stored in onEnter.
   * @param {function} log - Call this function with a string to be presented to the user.
   * @param {NativePointer} retval - Return value represented as a NativePointer object.
   * @param {object} state - Object allowing you to keep state across function calls.
   */
  onLeave: function (log, retval, state) {
  }
}