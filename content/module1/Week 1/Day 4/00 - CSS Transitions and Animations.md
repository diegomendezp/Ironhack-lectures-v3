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





### `transition-property` 

##### Specifies the property that we want to animate.

We can set multiple properties by separating them with coma `,` .



**syntax**

```css
transition-property: none | all | [ <property-name> ] [, <property-name> ]
```





#### `transition-duration`

##### Specifies the transition duration.

We can set multiple times separated with coma for corresponding property.

**syntax**

```css
transition-duration: <time> [, <time>]
```





#### `transition-timing-function`

##### Specifies the speed changes of the transition effect

Default value is - `ease`

**syntax**

```css
transition-timing-function: linear|ease|ease-in|ease-out|ease-in-out|step-start|step-end|steps(int,start|end)|cubic-bezier(*n*,*n*,*n*,*n*)|initial|inherit;
```



#### `transition-delay`

##### Specifies the transition delay. Delay for X seconds before starting the transition.

We can set multiple times separated with coma for corresponding property.

```css
transition-delay: <time> [, <time>]
```



### Example - [CODEPEN Example](https://codepen.io/Denzelzeldi/pen/xxxKoeq?editors=1100)

```css
.box {
    background-color: #00D1AE;
    width: 100px;
    height: 100px;
}

.box:hover {
    background-color: #FF4500;
    width: 400px;
    height: 200px;
    transition-property: width, height, background-color;
    transition-duration: 4s, 2s, 0.5s;
    transition-timing-function:linear;
    transition-delay: 0.5s; /*This will apply on all 3 proprties, but we can set time for each*/
}
```





## `transition` shorthand property

##### Instead of writing 4 lines of code we can use `transition` shorthand property. 

**syntax**

```css
<transition> = <transition-property> <transition-duration> <transition-timing-function> <transition-delay>;
```









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
<div class="box"></div>
```

```css
.box {
  width: 150px; 
  height: 80px;
  background-color: #FF5344;
  margin: 20px;
  animation-name: boxSlideIn;
  animation-duration: 4s;
}

@keyframes boxslidein {
  0% { margin-left: 100%; }
  100% { margin-left: 0%; }
}
```





### Let's move our rectangle around the page



##### In order to be able to precisely position the element, set  `position: relative`





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
  animation: boxslidein 4s ease-in-out 0s 4 reverse;
}
```





### Multiple Animations

To add multiple animations to a selector,  separate the values with a comma. 

Example

```css
.div {
  animation: myslidein 2s, myrotate 1.75s;
}
```











## Summary



## Extra Resources

- [CSS animated properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties) - Not all CSS properties can be animated, this is the list of CSS properties that accept CSS Animations or CSS Transitions.
- [David Khourshid:](https://www.youtube.com/watch?v=lTCukb6Zn3g) - Reactive Animations with CSS
- [CSS Levels Up](https://www.youtube.com/watch?v=UpVj5azI-iI) - A very cool video explaining next CSS features.
- [Animate.css](https://daneden.github.io/animate.css/) - A library with dozens of fun animations to get you started and use on your projects.