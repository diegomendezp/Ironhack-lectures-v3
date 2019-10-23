---
title: React JSX
date: 2018-11-26 15:33:14 +0000
week: 7
day: 1
weight: 3
pre: "<b>3. </b>"

---
## Learning Objectives

* Understand what JSX is and why we use it in React.
* Create JSX elements and use them in your React App.
* Embed expressions in JSX.

## What is JSX?

* This funny tag syntax is neither a string nor HTML.
* JSX may remind you of a template language, but it comes with the full power of JavaScript.
* JSX produces React "elements".

## Embedding Expressions

```javascript
const element = (<p> 2+2 = {2 + 2}</p>);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

```javascript
const formatName = (user) => {
  return `${user.firstName} ${user.lastName}`;
}

const getGreeting = (user) => {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const user = {
  firstName: 'Miguel',
  lastName: 'Cervantes',
}

ReactDOM.render(getGreeting(user), document.getElementById('root'));
```

or

```javascript
const formatName = (user) => {
return `${user.firstName} ${user.lastName}`;
}

const getGreeting = (user) => {
return <h1>Hello, {user ? formatName(user) : 'Stranger.' }!</h1>;
}

const user = {
firstName: 'Miguel',
lastName: 'Cervantes',
}

ReactDOM.render(getGreeting(user), document.getElementById('root'));
```

```javascript
const formatName = (user) => {
return `${user.firstName} ${user.lastName}`;
}

class GetGreeting extends Component {
render() {
const user = {
  firstName: 'Miguel',
  lastName: 'Cervantes',
};
const showUser = user ? formatName(user) : 'Stranger.';
return (
  <h1>Hello, {showUser} !</h1>
);
}
}

ReactDOM.render(<GetGreeting />, document.getElementById('root'));
```

{{% notice warning %}}
**An Element should return only one node**
{{% /notice %}}

***

```javascript
// Wrong 💣

const getGreeting = (user) => {
  return (
    <h1>Hello, Stranger.</h1>
    <p>Lorem ipsum</p>
  );
}
```

***

```javascript
// Correct 👍

const getGreeting = (user) => {
return (
    <div>
      <h1>Hello, Stranger.</h1>
      <p>Lorem ipsum</p>
    </div>
  );
}
```

## CSS - ClassName and Style

```javascript
const divStyle = {
'color': 'blue',
'backgroundImage': 'url(' + imgUrl + ')',
}

const element = (
<div style={divStyle}>
<h1 className='Title'>Hello!</h1>
<h2>Good to see you here.</h2>
</div>
)
```

## Loops and “key” prop

```javascript
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
<li>{number}</li>
);

ReactDOM.render(
<ul>{listItems}</ul>,
document.getElementById('root')
);
```

```javascript
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number, index) =>
<li key={index}>{number}</li>
);

ReactDOM.render(
<ul>{listItems}</ul>,
document.getElementById('root')
);
```

> **\[info\]**
>
> The Key could be anything but it should be unique

## Exercises (Card)

[Exercise_01_lab Repo](https://github.com/zapatran/exercise_01_lab)

* Create a new project
* Delete content in `app.css`
* Create a folder `/component` inside `src`
* Create files `Card.js` and `Card.css` inside folder `components`.

**Card.css**

```css
.card {
width: 170px;
display: flex;
flex-direction: column;
justify-content: center;
margin: 15px;
border-radius: 12px;
box-shadow: 0px 0px 51px 0px rgba(0, 0, 0, 0.08), 0px 6px 18px 0px rgba(0, 0, 0, 0.05);
transition: 0.35s cubic-bezier(0.4, 0, 0.2, 1);
transform: translateY(0px);
}

.card-gradient {
height: 160px;
width: 170px;
border-radius: 12px 12px 0px 0px;
background-image: linear-gradient(135deg, rgb(171, 220, 255) 10%, rgb(3, 150, 255) 100%);
}

.card-description {
border-radius: 0px 0px 12px 12px;
padding: 12px;
text-align: left;
text-transform: uppercase;
}

.card-color-from {
color: #929197;
display: block;
padding: 0px;
}

.card-color-to {
color: rgb(3, 150, 255);
}
```

![](/web-cheatsheet/upload/lab-card.png)

## Resource

## Tools

## Ironhack Learning Unit

## Futher Reading