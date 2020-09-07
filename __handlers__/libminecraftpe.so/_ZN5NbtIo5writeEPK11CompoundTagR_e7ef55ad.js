/*
 * Auto-generated by Frida. Please modify to match the signature of _ZN5NbtIo5writeEPK11CompoundTagR11IDataOutput.
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call _ZN5NbtIo5writeEPK11CompoundTagR11IDataOutput.
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
    log('_ZN5NbtIo5writeEPK11CompoundTagR11IDataOutput():' +  args[0] + ", " + args[1] + ", " + args[2] + ", " + args[3] + ", " + args[4] + ", " + args[5]);

    // Parameters
    var compoundTag = args[0];
    var dataOutput = args[1];

    // Functions
    var fn_compound_tag_to_string = new NativeFunction(Module.findExportByName("libminecraftpe.so", "_ZNK11CompoundTag8toStringEv"),
         'pointer', ['pointer', 'pointer']);


    var output = Memory.alloc(100);
    var o2 = Memory.alloc(500);

    fn_compound_tag_to_string(output, compoundTag);
    console.log(output.readUtf8String());

    var fn_to_string = new NativeFunction(compoundTag.readPointer().add(0x14).readPointer(), 'pointer', ['pointer', 'pointer', 'pointer']);
    fn_to_string(output, compoundTag, o2);
    console.log(output.readByteArray(0x100));;

    console.log("---");

  },

  /**
   * Called synchronously when about to return from _ZN5NbtIo5writeEPK11CompoundTagR11IDataOutput.
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