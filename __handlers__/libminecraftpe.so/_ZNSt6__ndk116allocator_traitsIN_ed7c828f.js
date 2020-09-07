/*
 * Auto-generated by Frida. Please modify to match the signature of _ZNSt6__ndk116allocator_traitsINS_9allocatorINS_4pairINS_8weak_ptrIN3mce21ResourceBlockTemplateIN6nonstd8variants7variantINS7_9monostateENS4_7TextureEN6dragon3res13ClientTextureENS7_6detail2TXINSE_2S3EEENSF_INSE_2S4EEENSF_INSE_2S5EEENSF_INSE_2S6EEENSF_INSE_2S7EEENSF_INSE_2S8EEENSF_INSE_2S9EEENSF_INSE_3S10EEENSF_INSE_3S11EEENSF_INSE_3S12EEENSF_INSE_3S13EEENSF_INSE_3S14EEENSF_INSE_3S15EEEEENS4_21PerFrameHandleTrackerENS4_33ResourceServiceTextureDescriptionEEEEENS_10unique_ptrINS4_21ITransactionContainerENS_14default_deleteIS1C_EEEEEEEEE20__construct_backwardIPS1G_EEvRS1H_T_S1M_RS1M_.
 * This stub is currently auto-generated from manpages when available.
 *
 * For full API reference, see: https://frida.re/docs/javascript-api/
 */

{
  /**
   * Called synchronously when about to call _ZNSt6__ndk116allocator_traitsINS_9allocatorINS_4pairINS_8weak_ptrIN3mce21ResourceBlockTemplateIN6nonstd8variants7variantINS7_9monostateENS4_7TextureEN6dragon3res13ClientTextureENS7_6detail2TXINSE_2S3EEENSF_INSE_2S4EEENSF_INSE_2S5EEENSF_INSE_2S6EEENSF_INSE_2S7EEENSF_INSE_2S8EEENSF_INSE_2S9EEENSF_INSE_3S10EEENSF_INSE_3S11EEENSF_INSE_3S12EEENSF_INSE_3S13EEENSF_INSE_3S14EEENSF_INSE_3S15EEEEENS4_21PerFrameHandleTrackerENS4_33ResourceServiceTextureDescriptionEEEEENS_10unique_ptrINS4_21ITransactionContainerENS_14default_deleteIS1C_EEEEEEEEE20__construct_backwardIPS1G_EEvRS1H_T_S1M_RS1M_.
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
    log('_ZNSt6__ndk116allocator_traitsINS_9allocatorINS_4pairINS_8weak_ptrIN3mce21ResourceBlockTemplateIN6nonstd8variants7variantINS7_9monostateENS4_7TextureEN6dragon3res13ClientTextureENS7_6detail2TXINSE_2S3EEENSF_INSE_2S4EEENSF_INSE_2S5EEENSF_INSE_2S6EEENSF_INSE_2S7EEENSF_INSE_2S8EEENSF_INSE_2S9EEENSF_INSE_3S10EEENSF_INSE_3S11EEENSF_INSE_3S12EEENSF_INSE_3S13EEENSF_INSE_3S14EEENSF_INSE_3S15EEEEENS4_21PerFrameHandleTrackerENS4_33ResourceServiceTextureDescriptionEEEEENS_10unique_ptrINS4_21ITransactionContainerENS_14default_deleteIS1C_EEEEEEEEE20__construct_backwardIPS1G_EEvRS1H_T_S1M_RS1M_()');
  },

  /**
   * Called synchronously when about to return from _ZNSt6__ndk116allocator_traitsINS_9allocatorINS_4pairINS_8weak_ptrIN3mce21ResourceBlockTemplateIN6nonstd8variants7variantINS7_9monostateENS4_7TextureEN6dragon3res13ClientTextureENS7_6detail2TXINSE_2S3EEENSF_INSE_2S4EEENSF_INSE_2S5EEENSF_INSE_2S6EEENSF_INSE_2S7EEENSF_INSE_2S8EEENSF_INSE_2S9EEENSF_INSE_3S10EEENSF_INSE_3S11EEENSF_INSE_3S12EEENSF_INSE_3S13EEENSF_INSE_3S14EEENSF_INSE_3S15EEEEENS4_21PerFrameHandleTrackerENS4_33ResourceServiceTextureDescriptionEEEEENS_10unique_ptrINS4_21ITransactionContainerENS_14default_deleteIS1C_EEEEEEEEE20__construct_backwardIPS1G_EEvRS1H_T_S1M_RS1M_.
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