export const randomId = () =>{
  const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
  return uint32.toString(16);
}

// export const uniqId = () => {
//   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//     const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
//     return v.toString(16);
//   });
// }