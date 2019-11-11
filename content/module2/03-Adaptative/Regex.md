# REGEX



## Creating a regular expression in JavaScript



Regular expressions are a away to describe patterns (character sequence and format) in the string data.



It is a small, separate language that is also part of JavaScript and many other languages and systems.



### Resources



### [Lea Verou's RegExp Playground](<https://leaverou.github.io/regexplained/>)

### [JavaScript Regex Cheatsheet](<https://www.debuggex.com/cheatsheet/regex/javascript>)

### [RegexOne - Regular Expressions Tutorial](<https://regexone.com/>)









### [Codepen : 00 - JS RegEx - Creating Pattern](<https://codepen.io/Denzelzeldi/pen/RmPrQP?editors=0011>)



#### Using the `RegExp` constructor - (no need to use the forward slash)

```js
const pat1 = new RegExp('wxyz');
```



When using the `RegEx` constructor syntax, the pattern is written between the quotes, and there is no need to escape characters.





#### Using the regex literal:

```js
const pat2 = /wxyz/;
```





If in literal notation where the pattern appears between the `/ / ` forward slashes , forward slash  character `/` has to be escaped with `\`. Not in RegExp object

```js
let str1 = 'wxyz/';
let str2 = 'abcdwxyz/';

// These 2 patterns are the same, but we create them in 2 different ways
let pat3 = /wxyz\//;
let pat4 = new RegExp('wxyz/');

console.log( pat3.test(str1));
console.log( pat4.test(str1));
```









#### [Codepen: 01 - JS RegEx - Escaping Special Characters](<https://codepen.io/Denzelzeldi/pen/KLpVxQ?editors=0010>)



Some characters like  `+` , `?`  and others have special meaning in Regular expressions and must be preceded by backslash if we want them to be present as the character itself.



[Regex -  escaping special characters](<https://javascript.info/regexp-escaping>)





```js
// ESCAPING SPECIAL CHARACTERS IN THE REGEX PATTERN - [ \ ^ $ . | ? * + ( )

// When using + as a character in the patter we must escape it with `\`. 
const fivePlus = /five\+/;


console.log( eighteenPlus.exec('five+-123abcdef') );
 //          /eighteen\+/.exec('five+-123abcdef')


// Without '\' +  acts as a special operator.
// When using + an operator, pattern will match any amount of last character (in our case character `e`)
const fiveAndAnythingAfter = /five+/;

console.log( eightAndAnythingAfter.exec('fiveeeeeeeeeeeeeee') );
//                         /five+/.exec('fiveeeeeeeeeeeeeee')
```







#### [Codepen: 02 - JS RegEx - Testing for matches with `test()`](<https://codepen.io/Denzelzeldi/pen/eaNZYx?editors=0012>)



## Testing for matches with `test()`:



`test()` - method checks if a given string contains the pattern. It returns a boolean.



```js
console.log( /aaa/.test('aaabbb') );	//	true

console.log( /aaa/.test('aaxbbb') );	//	false
```







## Matching sets of characters



For matching any character from the set of given possibilities we use square brackets []

```js
// MATCHING SETS OF CHARACTERS
//  If we want to match any character from the set of given possibilities we can use square brackets []

console.log(/[abcdef]/.test("123d45a67b907b"));	// true

console.log(/[01234]/.test("Today: 14.05.2019"));	//	true

console.log(/[0-9]/.test("This string doesn't contain numbers"));	//	false
```





## Common character groups



Certain common character groups have a shortcut characters that we can use.



`\d`	-	Any digit character

`\w`	-	An alphanumeric character ( word or number)

`\s`	-	White space character (space, newline, tab)

`\D`	-	Any character which is not a digit

`\W`	-	A non-alphanumeric character

`\S`	-	A non-whitespace character

`.`	  -	Any character (except newline)	





Let's say that we want to create a pattern that will help us verify if a given date string is of a valid format.

```js
const dateFormat = /\d\d-\d\d-\d\d\d\d/;
console.log(dateFormat.test("01-30-2003"));	// true
console.log(dateFormat.test("30-jan-2003"));	// false



// Instead we can use  [\d.] Which will match any digit or any other character

console.log(/[\w]/.test("01-30-2003"));	// true
console.log(/[\w]/.test("30-jan-2003"));	// true
```









### [CODEPEN 3](<https://codepen.io/Denzelzeldi/pen/bydpjm?editors=1112>)



### Invert selection `[^chars]`

We can also specify the characters that we want to skip, and match all other characters except them.

```js
let notHEX = /[^ABCDEF01234567890]/;
console.log(notHEX.test("FF001B")); //	false
console.log(notHEX.test("FF00XX"));	//	true


// More succinct way to write the same pattern
notHEX = /[^A-F0-9]/;
console.log(notHEX.test("FF001B")); //	false
console.log(notHEX.test("FF00XX"));	//	true
```







## RegEx Qunatifiers

Regex quantifiers are used to specify how many times one character or the part of the pattern should be repeating.





### Repeating part of the pattern

## `+`

When you put a plus sign (`+`) after something in a regular expression, it indicates that the element may be repeated more than once.



```js
// + matches the preceding character or element 1 or more times/repetitions

console.log(/'\d+'/.test("A 5678 A"));	// true
console.log(/'\d+'/.test("ABCDEFG"));	// false
```



## `*`

Star has the similar function but it allows element to match zero or more times.



```js
// * matches the preceding character or element 0 or more times

console.log(/'\d*'/.test("A 5678 A"));	// true
console.log(/'\d*'/.test("ABCDEFG"));	// true
```





### Optional character

## `?`

A question mark `?` makes a part of a pattern *optional*, meaning it may occur zero times or one time.

```js
// ? makes a part of the pattern optional, it may occur 0 times  or 1 time.

const color = /colou?r/;
const favorite = /favou?rite/;

console.log(color.test("color"));	//	true
console.log(color.test("colour"));	//	true

console.log(favorite.test("favorite"));	//	true
console.log(favorite.test("favourite"));	//	true
```





## `{ }`

By using curly brackets in Regular Expression pattern we can specify how many times we want a character or the part of the pattern to repeat.



### Exactly 

### `{n}`

```js
const tripleA = /a{3}/i;

console.log( tripleA.test('aaa123bbb') );	//	true
console.log( tripleA.test('aa123bbb') );	//	false
console.log( tripleA.test('AAAA123bbb') );	//	true
// Last expression is true as we used `i` flag which makes the pattern search case insensitive
```





### Between 

#### `{nMin, nMax}`

```js
const threeToSixB = /b{3,6}/;
const threeToSix = /.{3,6}/;

console.log( threeToSixB.test('aaa123bbbb') );	//	true
console.log( threeToSixB.test('aa123bbb') );	//	true
console.log( threeToSixB.test('aa123bb') );	//	false
console.log( threeToSix.test('AAAA123bcdef') );	//	true
// Last expression is true as we used `.` as a wildcard character and it matches any character except newline \n
```





### n or more

#### `{nMin, }`



```js
const fiveOrMoreA = /a{5, }/i;
const nineOrMore = /.{9, }/;
const nineOrMoreChars = /\w{9, }/;


console.log( fiveOrMoreA.test('aaaaaa123aabb') );	//	true
console.log( fiveOrMoreA.test('aaaabbbb1111') );	//	false
console.log( nineOrMore.test('12345678') );	//	false
console.log( nineOrMoreChars.test('ABCDEFGHIf') );	//	true
// Last expression is true as we used `.` as a wildcard character and it matches any character except newline \n
```





## Matching and grouping



`exec()` method  returns `null` if no match was found or returns an object with information about the match. The returned object will have an index property that points to where in the string the match begun.



```js
console.log('My name is Sarah and I am 25'.match(/\d+/));

console.log('My name is Sarah and I am 25'.match(/\w{4}/));
```





Regular expressions allow us  *extract information for further processing*. 

We can do this  by defining *groups of characters* and capturing them using parentheses `(  )` metacharacters.

 Any sub-pattern inside a pair of parentheses will be *captured* as a group. In practice, this can be used to extract information like phone numbers or emails from all sorts of data.







```js
let file1 = 'myphoto.jpg';
let file2 = 'IMG_987568023.jpg';
let file3 = 'file_upload1238459.pdf';
let file4 = 'temp_me22341.pdf.tmp';

console.log(file1.match(/(\w+).jpg/) );
console.log(file2.match(/(\w+).jpg/) );

console.log(file3.match(/(\w+).pdf/) );
console.log(file4.match(/(\w+).jpg/) );	//	null
```







### Start `^`  and `###  end.



To denote that we are looking for the pattern that matches from the start to the end we use caret `^` and dollar sign `&` symbols.



 

```js
// Extract names of files that start with `file` and have extension `.json` 
let file5 = 'file_test_db.json';
let file6 = 'file_error_log1.json';
let file7 = 'upload_data.json';
let file8 = 'fileExt.js';

let jsonFile = /^(file.\+)\.json$/;

console.log(file5.match(/^(file.+)\.json$/) );
console.log(file6.match(/^(file.+)\.json$/) );

console.log(file7.match(/^(file.+)\.json$/) );
console.log(file8.match(/^(file.+)\.json$/) );
```









## In Depth :

### [Eloquent JavaScript - Ch 9 - Regexp ](<https://eloquentjavascript.net/09_regexp.html>)