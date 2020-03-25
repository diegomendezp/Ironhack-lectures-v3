## ARRAY BUFFERS  & TYPED ARRAYS - ES 6

1 BYTE = 8 bits (8 binary digits) e.g.  - 00101100

**ArrayBuffer ()** constructor takes number of bytes as a parameter, and creates the the buffer ( binary data container) of that size.

Array Buffer object or in our case below ,instantiated variable `buffer`. is only a container for the chunks of binary data, but doesn't have any abilities to modify them or do anything else. You cannot manipulate its contents directly, but you have to use `Typed Array objects` or `DataView`, which set the specific format of the buffer and the data stored in it.

```javascript
//Create a 16 bytes buffer
// 'buffer1' (container) will have:
// 16 slots x 1 byte = 16 bytes 
let buffer1 = new ArrayBuffer(16);

//Create a 64 bytes buffer
let buffer2 = new ArrayBuffer(64);

console.log(buffer1); // ArrayBuffer { byteLength: 16 }
console.log(buffer2); // ArrayBuffer { byteLength: 64 }

let view = new Int32Array(buffer1);

/* each chunk in `buffer1` will be 32 bits ( = 4 bytes).
`TypedArray` provides us a `data-view` of the buffer ( we can see it as an array) and also sets the size of each data chunk (in bits) that will be stored in the `buffer` ().
Size of each chunk determins how many chunks will fit in the buffer. Example:	 */

// `buffer1` space is 16 bytes.
// `Int32Array(buffer1)` sets the size of each chunk to 32bits
// each chunk = 32 bits = 4 bytes;
// (`buffer1` storage space) 16 bytes / 4 bytes(chunk size) = 4
// `buffer1` will have 4 slots for 32bits(4byte) chunks

view[0] = 8525;
console.log(view);
// view is logged as array of 4 elements, that are chunk slots in the buffer (container).

```
