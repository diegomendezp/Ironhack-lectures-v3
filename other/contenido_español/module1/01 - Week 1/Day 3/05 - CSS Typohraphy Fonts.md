# CSS Fonts



#### `font-family` property works on the base of a fallback



<https://www.w3schools.com/csSref/pr_font_font-family.asp>



### `@font-face`, `@import` , `<link>`(HTML)



We can specify multiple fonts, where browser will try to impement it and if not it will fallback to the next specified.



### CSS Web Safe Fonts



#### Web safe fonts are fonts that are pre-installed by many operating systems. 



### Web Safe Font Combinations

<https://www.w3schools.com/cssref/css_websafe_fonts.asp>





### Installing fonts in the CSS or HTML file



### `@font-face` - importing a local font file

```css
@font-face {
  font-family: 'MyWebFont';
  src:  url('charlotte.otf') format('otf'),
        url('charlotte.ttf') format('ttf');
}

body {
  font-family: 'MyWebFont', Fallback, sans-serif;
}
```





###  HTML `link` and CSS `@import`  



[GOOGLE FONTS](<https://fonts.google.com/>)

#### Google Fonts offers fonts for free that you can import in your stylesheet



#### Example - import font Abel

<https://fonts.google.com/specimen/Abel?selection.family=Abel>





### `<link>`in the HTML file

```html
<link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet">
```





### `@import` - in the css file

```css
@import url('https://fonts.googleapis.com/css?family=Abel');

body{
   font-family: 'Abel', sans-serif;
}
```

As a rule of thumb, you would probably want to avoid `@import` rules  because they stop the loading of the included resource until the file is fetched. 

