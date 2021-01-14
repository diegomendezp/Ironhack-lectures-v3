![img](https://i.imgur.com/1QgrNNw.png)

# CSS | Transitions & Animations

## Learning Goals

After this unit, you’ll be able to:

- Create transitions using CSS3 Transitions module

- Explain the differences between transitions and animations

- Understand how to create animations using animation blocks

- Create keyframes

- Apply animation properties

  

![:warning:](http://materials.ironhack.com/build/emojify.js/dist/images/basic/warning.png) This is an experimental technology Because this technology’s specification has not stabilized

- You might want to check the [MDN compatibility table](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions#Browser_compatibility) for usage in various browsers, or  [caniuse.com](http://caniuse.com/).





## CSS3 Transitions

**CSS transitions** provide a way to control animation speed when changing CSS properties. 





### [`transition-property`](https://www.w3schools.com/cssref/css3_pr_transition-property.asp)

##### Specifies the property that we want to animate.

We can set multiple properties by separating them with coma `,` .



**syntax**

```css
transition-property: none | all | [ <property-name> ] [, <property-name> ];
```





#### [`transition-duration`](https://www.w3schools.com/cssref/css3_pr_transition-duration.asp)

##### Specifies the transition duration.

We can set multiple times separated with coma for corresponding property.

**syntax**

```css
transition-duration: <time> [, <time>];
```





#### [`transition-timing-function`](https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp)

##### Specifies the speed changes of the transition effect

Default value is - `ease`

**syntax**

```css
transition-timing-function: linear|ease|ease-in|ease-out|ease-in-out|step-start|step-end|steps(int,start|end)|cubic-bezier(*n*,*n*,*n*,*n*)|initial|inherit;
```



#### [`transition-delay`](https://www.w3schools.com/cssref/css3_pr_transition-delay.asp)

##### Specifies the transition delay. Delay for X seconds before starting the transition.

We can set multiple times separated with coma for corresponding property.

```css
transition-delay: <time> [, <time>] ;
```





<br>



### Example - [CODEPEN Example](https://codepen.io/Denzelzeldi/pen/xxxKoeq?editors=1100)

##### `index.html`

```html
<section class="box"></section>
```



##### `main.css`

```css
.box {
    background-color: turquoise;
    width: 100px;
    height: 100px;
    transition: all 1s; /* transition back to initial style */
  /* This will ensure than after hover we have a smooth transition back */
}

.box:hover {
    background-color: red;
    width: 400px;
    height: 200px;
    transition-property: width, height, background-color;
    transition-duration: 4s, 2s, 0.5s;
    transition-timing-function: linear;
    transition-delay: 0.5s; /*This will apply on all 3 proprties, but we can set time for each*/
}
```





<br>



## [`transition`](https://www.w3schools.com/cssref/css3_pr_transition.asp) shorthand property

##### Instead of writing 4 lines of code we can use `transition` shorthand property. 

**syntax**

```css
<transition> = <transition-property> <transition-duration> <transition-timing-function> <transition-delay>;
```





##### `main.css`

```css
transition: width 4s linear 3s, height 2s linear, background-color 0.5s linear;
  
```





<br>



# Animations

CSS animations allows animations of HTML elements without using Javascript.



## Main properties:

### `@keyframes` rule 

- Indicates the style changes during the animation. 

- Here we control what our animation will do.

- it is written as a separate CSS rule.





### `animation-duration` - 

Specifies the duration of animation





### `animation-name`

- Specifies the animation name. 

- Is a connector that connects the `element` to the `@keyframes` rule.



### `animation-delay`

- Specifies the delay of the animation





## [CSS animation - Example - Codepen](https://codepen.io/Denzelzeldi/pen/JjjPgdy?editors=1100)









#### Example - simple animation 1

```html
<section class="animated-box"></section>
```

```css
.animated-box {
  width: 150px; 
  height: 80px;
  background-color: red;
  margin: 20px;
  animation-name: boxSlideIn;
  animation-duration: 4s;
}

@keyframes boxSlideIn {
  0% { margin-left: 100%; }
  100% { margin-left: 0%; }
  /*
    or to remove the twitch use `calc()`
    100% { calc(0% + 20px); }
  */
}
```





### Let's move our rectangle around the page



##### In order to be able to precisely position the element, set  `position: relative`



```css
@keyframes moveAround {
  0% {
    top: 0px;
    left: 0px;
  }
  25% {
    top: 0px;
    left: 200px;
  }
  50% {
    left: 200px;
    top: 200px;
  }
  75% {
    left: 0px;
    top: 200px;
  }
  100% {
    top: 0px;
    left: 0px;
  }
}
```



### Other animation properties



### `animation-iteration-count`

##### Specifies the number of times an animation should be played.

Options: 

- A specific number of iterations (default is 1).
- `infinite` to repeat it forever.
- `initial` to set the iteration count to the default value.
- `inherit` to inherit the value from the parent.

```css
/* Set the animation to run 4 times */
animation-iteration-count: 4;
```





### `animation-direction`

Specifies whether an animation should be played forwards, backwards or in alternate cycles.

- `normal` - The animation is played as normal (forwards). This is default

- `reverse` - The animation is played in reverse direction (backwards)

- `alternate `- The animation is played forwards first, then backwards

- `alternate-reverse` - The animation is played backwards first, then forwards

  ```css
  /* Lets reverse our animation*/
  animation-direction: reverse;
  ```







### `animations` shorthand property

```css
animation: [animation-name] [animation-duration] [animation-timing-function]
[animation-delay] [animation-iteration-count] [animation-direction]
[animation-fill-mode] [animation-play-state];
```



#### Let's refactor previous code to use a shorthand property

```css
.box {
  position: relative;
  width: 100px; 
  height: 100px;
  background-color: red;
  animation-name: boxslidein;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-iteration-count: 4;
  animation-direction: reverse;
  /* shorthand 
  
  animation: boxslidein 4s ease-in-out 0s 4 reverse;
  
  */
}
```





### Multiple Animations

To add multiple animations to a selector,  separate the values with a comma. 

Example

```css
  animation: moveAround 3s, boxSlideIn 1s;
```











## Summary



## Extra Resources

- [CSS animated properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties) - Not all CSS properties can be animated, this is the list of CSS properties that accept CSS Animations or CSS Transitions.
- [David Khourshid:](https://www.youtube.com/watch?v=lTCukb6Zn3g) - Reactive Animations with CSS
- [CSS Levels Up](https://www.youtube.com/watch?v=UpVj5azI-iI) - A very cool video explaining next CSS features.
- [Animate.css](https://daneden.github.io/animate.css/) - A library with dozens of fun animations to get you started and use on your projects.