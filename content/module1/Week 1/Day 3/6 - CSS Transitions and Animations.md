![img](https://i.imgur.com/1QgrNNw.png)

# CSS | Transitions & Animations

## Learning Goals

After this unit, you’ll be able to:

- Create transitions using CSS3 Transitions module

- Explain the differences between transitions and animations

- Understand how to create animations using animation blocks

- Create keyframes

- Apply animation properties

  

![:warning:](http://materials.ironhack.com/build/emojify.js/dist/images/basic/warning.png) This is an experimental technology Because this technology’s specification has not stabilized, you might want to check the [MDN compatibility table](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions#Browser_compatibility) for usage in various browsers, or the [caniuse.com](http://caniuse.com/) website to check out each property.



## CSS3 Transitions

**CSS transitions** provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time.



### `transition-property` 

##### Specifies the property that we want to animate.

We can set multiple properties by separating them with coma `,` .

**syntax**

```css
transition-property: none | all | [ <property-name> ] [, <property-name> ]`
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



### Example

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
    transition-delay: 1s; /*This will apply on all 3 proprties, but we can set time for each*/
}
```





## `transition` shorthand property

##### Instead of writing 4 lines of code we can use `transition` shorthand property. 

**syntax**

```css
<transition> = <transition-property> <transition-duration> <transition-timing-function> <transition-delay>;
```



#### Example (transition shorthand)

```css
.box:hover {
    background-color: #FF4500;
    width: 400px;
    height: 200px;
    transition: width 4s ease-in 3s, height 2s linear, background-color 0.5s;
/*
If property value is not set in the transition shorthand it will get the default value for that property (Example: background-color -> transition timing-function)
*/
}
```







# Animations

##### CSS animations allows animations of HTML elements without using Javascript.



### `@keyframes` rule 

##### Indicates the animation style changes. 

##### Here we control what our animation will do.

##### it is written as a separate CSS rule





### `animation-duration` - 

##### Specifies the duration of animation





### `animation-name`

##### Specifies the animation name. 

##### We can think of it as a connector that connects the element to the @keyframes rule.



**Example**

```css
div {
    width: 100px;
    height: 100px;
    background: black;
    animation-duration: 1s;
    animation-name: myanimation;
}

@keyframes myanimation {
    /* animation code goes here*/
}
```



### `animation-delay`

##### Specifies the delay of the animation





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
  animation-name: boxslidein;
  animation-duration: 4s;
}

@keyframes boxslidein {
  0% { margin-left: 100%; }
  100% { margin-left: 0%; }
}
```





### Let's move our rectangle around the page



##### In order to be able to precisely position the element, set  `position: relative`





#### Example - simple animation 2

```html
<div class="box"></div>
```

```css
.box {
  position: relative;
  width: 150px; 
  height: 80px;
  background-color: red;
  animation-name: boxslidein;
  animation-duration: 4s;
  animation-delay: 2s;
}

@keyframes boxslidein {
  0% { left: 0px; top: 0px; background: red; }
  25% { left: 200px; top: 0px; background: red; }
  50% { left: 200px; top: 200px; background: red; }
  75% { left: 0px; top: 200px; background: red; }
  100% { left: 0px; top: 0px; background: red; }
}

/* each rule-set is in a single line for better redability*/
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





## Transitions vs animations

|                                  | Transitions                                                  | Animations                                                   |
| :------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| **Starting Them**                | Require a trigger to run. The trigger may be one of the events listed in the last section or it might be JavaScript, but the transition needs something outside itself to start. | Do not need a trigger. They can respond to a trigger, but one isn’t needed to start the animation. Animations can run automatically when the page first loads. |
| **Defining Intermediate Points** | Limited to an initial and final state                        | Animations can include as many intermediate states (keyframes) as desired in between the initial and final state. |
| **CSS Iteration**                | Can’t change CSS properties.                                 | Can change property values inside their keyframes.           |
| **Looping**                      | They are not designed for looping                            |                                                              |





## Conclusion

Transitions for creating a smooth transition from one state to another, for simple movements (Button on click, on hover, change size of the HTML element).

Animations are used for more complex series of movements, and give us finer control and we can implement multiple steps of movements.









## Summary



## Extra Resources

- [CSS animated properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties) - Not all CSS properties can be animated, this is the list of CSS properties that accept CSS Animations or CSS Transitions.
- [David Khourshid:](https://www.youtube.com/watch?v=lTCukb6Zn3g) - Reactive Animations with CSS
- [CSS Levels Up](https://www.youtube.com/watch?v=UpVj5azI-iI) - A very cool video explaining next CSS features.
- [Animate.css](https://daneden.github.io/animate.css/) - A library with dozens of fun animations to get you started and use on your projects.