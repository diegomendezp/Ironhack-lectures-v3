---
title: "CSS Intro"
date: 2018-11-12T12:23:35+01:00
draft: false
weight: 5
week: 1
day: 2
pre: "<b>5. </b>"
---

## Learning Objectives

- ### intro

  - Cascading style sheets
  - inline, internal (on the HTML page), external (in the separate stylesheet file)



- ### user agent styles

  Different browsers set different default CSS rules.  **reset.css** or a **normalise.css**



- ### rule-set (css syntax)


- <https://www.w3schools.com/css/css_syntax.asp>

  - declaration: property, value



- ### selectors

  - Element / tag selector `div {}`
  - Universal selector `* {}`
  - class selectors `.` 
  - id selectors `#` (must be unique)



- ### properties - name few most used ones (at least 10 - 15).



- ### size units :

  - absolute - *px*, *cm*, *inch*

  - relative-  *%*, *em* (font-size of the element), rem (root element font-size), *vw*, *vh*

    

- ### colors



- ### shorthand properties

  <https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties>



- ### specificity

  If 2 or more CSS rules point to the same element, browser uses specificity to determine which one applies.

   Specificity calculation:

  ​	- element, pseudo element - 1pts

  ​	- attr, class, pseudo class - 10pt

  ​	- IDs - 100 pts

  ​	- inline style - 1000 pts

  

  ​	- multiple nested selectors - `div p {color: red}` vs `p { color: blue }`

  ​	- `!important` - is a wild card and will be applied even over inline style if used in any style declaration (even 1pt value) `p { color: red !important}`

  

- ### pseudo-class

  - `:hover`

  - `:visited`

    ​	

    ```html
    <a href="#"> Click here</a>
    ```

    ```css
    a:visited {
      color: purple;
    }
    ```



- ### CSS reset

  <http://www.pitt.edu/~ctomer/lis2600/css_reset/index.html>

  **CSS Reset** is a short, often compressed, or “minified,” set of **CSS **rules that **resets** the styling of all HTML elements to a consistent baseline. **Resets** are particularly useful for normalizing the text size and removing all margins.

- ### import 

  used to import additional css stylesheet or the css reset stylesheet



```css
@import "newstyle.css";

/*

OR the following  syntax

@import "newstyle.css";

IMPORT THE CSS RESET 

*/
```







- ### width, padding, margin - quick Examples

  

  

- ### float, clear

  - <https://www.youtube.com/watch?v=xara4Z1b18I>

  - <https://codepen.io/Denzelzeldi/pen/RdvKVK>

    

- ### overflow (scroll, hidden, auto, visible(default))

  ​	<https://codepen.io/Denzelzeldi/pen/jJdwbz>




- ### CSS Layout - position  (static, relative, fixed, absolute, sticky)

  ​	<https://codepen.io/Denzelzeldi/pen/QoYgqB>

  ​	**static** - default value, positioned with the flow of the page

  ​	**relative ** - children can be positioned against it, can set top,bottom,left, right.

  ​	**fixed** - positioned relative to the viewport.

  ​	**absolute** - relative to the nearest positioned ancestor (anyone except `static` ones), else uses the document body.

  ​	**sticky** - positioned based on the user's scroll position, toggles between `relative` and `fixed`

  

- when not floated or `position:absolute` or `position:fixed` every block element is naturally `100% wide`

  

- ### 100% of what!?

  <https://codepen.io/Denzelzeldi/pen/XGOgvm>

## Resources

- [cssreference](https://cssreference.io/)
- [cssreset](https://cssreset.com/scripts/eric-meyer-reset-css/)
- [Best Practices](https://github.com/ironhack/bcn-webdev-cheatsheet/tree/master/m1#css-best-practices)
- [MDN CSS guide](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS)
- [MDN CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)

## Ironhack Learning Platform

{{%attachments title="Related files" pattern=".*(css)"/%}}

