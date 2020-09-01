## LEARN YOU NODE



#### POSIX

POSIX stands for Portable Operating System Interface.

Set of Standards for maintaining compatibility between operating systems. 

POSIX makes stuff stay compatible within the operating systems. 

POSIX defines the API, Command Line shells (user interfaces) and Utility interfaces, for all the operating systems.



****

**Buffer objects are Node's way of efficiently representing arbitrary arrays  
  of data, whether it be ascii, binary or some other format. Buffer objects  
  can be converted to strings by simply calling the toString() method on  
  them. e.g. var str = buf.toString()**

Pure JavaScript is Unicode friendly but not nice to binary data. **When dealing with TCP streams or the file system, it's necessary to handle octet streams. Node has several strategies for manipulating, creating, and consuming octet streams.**

**Raw data is stored in instances of the `Buffer` class.** 

**A `Buffer` is only similar to an array of integers, but is actually a raw memory allocation outside the V8 heap.** A `Buffer` cannot be resized.

The `Buffer` class is a global, making it very rare to need to ever `require('buffer')`

Converting between **Buffers** and JavaScript **string** objects requires an explicit encoding method. The different string encodings are : `ascii`, `utf8`, `utf16le`, `base64`, `binary`, `hex`. 



## Class: Buffer[#](#buffer_class_buffer)

The Buffer class is a global type for dealing with binary data directly. It can be constructed in a variety of ways.

#### new Buffer(size)[#](#buffer_new_buffer_size)

- `size` Number

Allocates a new buffer of `size` octets.

#### new Buffer(array)[#](#buffer_new_buffer_array)

- `array` Array

Allocates a new buffer using an `array` of octets.

#### new Buffer(str, [encoding])[#](#buffer_new_buffer_str_encoding)

- `str` String - string to encode.
- `encoding` String - encoding to use, Optional.

Allocates a new buffer containing the given `str`. `encoding` defaults to `'utf8'`.



#### buf.toJSON()[#](#buffer_buf_tojson)

Returns a JSON-representation of the Buffer instance, which is identical to the output for JSON Arrays. `JSON.stringify`implicitly calls this function when stringifying a Buffer instance.



## File System 'fs'

To use this module do `require('fs')`. All the methods have asynchronous and synchronous forms.



The asynchronous form always take a **completion callback** as its last argument. 

The **arguments of the completion callback** depend on the method, but **the first argument is** always reserved for an **exception** ( If the operation was completed successfully, then the first argument will be `null` or `undefined` ).





With the asynchronous methods there is no guaranteed ordering. So the following is prone to error:

```javascript
fs.rename('/tmp/hello', '/tmp/world', function (err) {
  if (err) throw err;
  console.log('renamed complete');
});
fs.stat('/tmp/world', function (err, stats) {
  if (err) throw err;
  console.log('stats: ' + JSON.stringify(stats));
});
```

**It could be that `fs.stat` is executed before `fs.rename`. The correct way to do this is to chain the callbacks.**

```javascript
fs.rename('/tmp/hello', '/tmp/world', function (err) {
  if (err) throw err;
  fs.stat('/tmp/world', function (err, stats) {
    if (err) throw err;
    console.log('stats: ' + JSON.stringify(stats));
  });
});
```







Most fs functions let you omit the callback argument. If you do, a default callback is used that ignores errors, but prints a deprecation warning.