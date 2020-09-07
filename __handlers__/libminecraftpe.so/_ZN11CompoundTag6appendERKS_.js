/*
 * Auto-generated by Frida. Please modify to match the signature of _ZN11CompoundTag6appendERKS_.
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call _ZN11CompoundTag6appendERKS_.
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
    log('_ZN11CompoundTag6appendERKS_(): ' + args[0] + ", " + args[1]);
    console.log(args[1].readByteArray(0x160));
    console.log(args[1].readPointer().readByteArray(0x160));

//    var ptr_compoundtag_tostring = Module.findExportByName("libminecraftpe.so", "_ZNK11CompoundTag8toStringEv");
//    var ptr_listtag_tostring = Module.findExportByName("libminecraftpe.so", "_ZNK7ListTag8toStringEv");
//    var fn_compoundtag_tostring = new NativeFunction(ptr_compoundtag_tostring, 'pointer', ['pointer', 'pointer']);
//    var fn_listtag_tostring = new NativeFunction(ptr_listtag_tostring, 'pointer', ['pointer', 'pointer']);
//
//    var test = Memory.alloc(500);
//
//    fn_listtag_tostring(test, args[1]);
//
//    console.log(test.readByteArray(0x50));
//    console.log(test.add(8).readByteArray(0x20));

    console.log("----");

  },

  /**
   * Called synchronously when about to return from _ZN11CompoundTag6appendERKS_.
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