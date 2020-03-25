---
title: Lab Cards
date: 2018-11-24 00:00:00 +0000
week: 7
day: 1
lab: true
weight: 3
---

## Lab

- Create a new project
- Delete content in `app.css`
- Create a folder `/component` inside `src`
- Create files `Card.js` and `Card.css` inside folder `components`.

__Card.css__
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

![Lab](/media/lab-card.png)