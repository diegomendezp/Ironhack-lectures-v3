# Express | Layouts & Partials



### [Starter Repo](<https://github.com/ross-u/Handlebars---Layouts-Partials>)



### Clone the repo





```bash
npm i
```





### Skipping layouts



```js
app.get('/teams', (req, res, next) => {
  let data = {
    layout: false
  }
  res.render('teams');
});
```









### Create a Partial



```bash
cd views
mkdir partials
cd partials
touch playerCard.hbs
```



**playerCard.hbs**

```html
<div class="card" style="width: 33.333%;">
      <img class="card-img-top" src="https://clutchpoints.com/wp-content/uploads/2017/10/Kobe-Bryant-e1508564618882.jpg" alt="">
      <div class="card-body">
        <h5 class="card-title">Kobe Bryant</h5>
        <p class="card-text">LAK</p>
      </div>
</div>
```







## Partials Set-up - register the partial

The `hbs` package, allows us to add partials into our code in a super simple way. First, we need to **register the partials**.



```js
// LOCATION OF OUR PARTIALS
hbs.registerPartials(__dirname + '/views/partials');
```









## Place the  `playerCard` Partial in the `players`.js view

**players.hbs**



### Syntax {{> }}  is used to load and pass the partial.

```html
<div class="cards-container">
  {{> playerCard}}
</div>
```







### Pass the data array and render the partial dynamicaly

**app.js**

```js
app.get('/players', (req, res, next) => {
  let data = {
    players: players
  }

  res.render('players', data );
});
```



```html
<!--	 views/partials/playerCard.hbs		-->

<div class="card" style="width: 33.333%;">
      <img class="card-img-top" src="{{this.photo}}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{this.name}} {{this.lastName}}</h5>
        <p>{{this.team}}</p>
      </div>
</div>
```





### Update the `player.js` to pass the iterate over array and pass each element to the partial

```html
  <div class="cards-container">
    {{#each players}}
      {{> playerCard this}}
    {{/each}}
  </div>
```

