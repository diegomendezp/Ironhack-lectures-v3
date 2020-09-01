# AJAX | Axios GET Request



## Intro to Axios

Axios is a modern **Promise-based** HTTP client for JS which can be used in front-end and in Node.js backend, to create any type of HTTP request to the server.





Axios is relying on AJAX technology. **AJAX** stands for *Asynchronous JavaScript And XML*.





### Axios - Main Features

- Make [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) from the browser
- Make `HTTP` requests from [Node.js](https://nodejs.org/api/http.html)
- Supports the [Promise API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- Intercept requests and responses
- Transform requests and responses data
- Cancel requests
- Automatic transforms JSON into JS objects
- Client-side support for protecting against [XSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery)







## Request method aliases

For convenience, the aliases have been provided for all supported request methods:



<https://github.com/axios/axios>





## Installing Axios



**Using CDN**

```
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

**Using NPM**

```
$ npm install axios
```













## Postman

[Postman](https://www.getpostman.com/docs) allows us to test Web API requests from our system. We could set the desired parameters as if we were in our own code.

We can use any HTTP verb for the request and we can use any amount of parameters.



### Installing Postman

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_59d53910a8a94a1096fa00a5ed2003aa.png)



Go to [the official website](https://www.getpostman.com/) and download Postman. Be careful to select the right Operating System for your computer.





**You can also use Insomnia which has similar features.**











#### GET request -  https://restcountries.eu/rest/v2/name/spain

Open Postman. You will see this:

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_af6eb57129e0e23b8d1f19d31e869e38.png)





For now, we will focus on the navigation bar:

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_cddeeca69a056e7e2cf76b6200f0c8c6.png)

- **The navigation bar** simulates the browser’s navigation bar
- **The select input** on the left indicates the HTTP verb you want to use in the request
- **The Params button** on the right is for specifying parameters in the request. If the HTTP verb used is *GET*, it will add the parameters in the URL’s *query string*
- **The SAVE button** allows you to save the request, in case you want to repeat the same request. This is useful when you are introducing the same data repeatedly.
- **The SEND button** will create the request and send it.

Let’s input the request to search by country name:

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_bc94497caeb6d47eb571d30564519cfb.png)

When the *SEND* button is clicked, Postman will display the information related to the response in the panel below.

![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_51323792b25e8a6a053836c3c77b45fc.png)

Now, you can try to get the data from some other API endpoint. It’s easy right? ![:100:](http://materials.ironhack.com/build/emojify.js/dist/images/basic/100.png)





<br>





### Simple axios GET request

```bash
mkdir axios-1

cd axios-1

touch index.html index.js style.css
```



<br>



##### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Rest Countries API</title>
</head>
  
<body>
  
  <h1>Countries Info</h1>
<!--  use input's id to grab the value from the input field -->
  <input id="the-input" type="text">
  <button id="the-button">Get the country</button>
    
<!-- the data we get from the API will be populated in here:   -->
  <h2 id="country-header">COUNTRIES:</h2>
  <div id="country-list"></div>

  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="index.js"></script>
  
</body>
</html>
```



<br>



##### `index.js`

```js
// index.js

const urlString = 'https://restcountries.eu/rest/v2/name/spain';
const baseURL = 'https://restcountries.eu/rest/v2/name/';

const countryList = document.querySelector('#country-list');
const button = document.querySelector("#the-button");

// EXAMPLE 1
// axios.get
function getCountryInfo1(countryNameInput) {
  axios.get(`${baseURL}${countryNameInput}`)
    .then(responseFromAPI => {
      const { data } = responseFromAPI;
      let htmlString = '';

      data.forEach((countryObj) => {
        htmlString += `
          <h2>${countryObj.name}</h2>
          <p>${countryObj.capital}</p>
          <br>`
      });

      countryList.innerHTML = htmlString;
    })
    .catch(err => console.log('Error is: ', err));
}



// EXAMPLE 2 -  ALTERNATIVE WAY

// axios.create([configObj])
const getCountryByName = axios.create({ baseURL: baseURL, method: get });

function getCountryInfo2 (countryNameInput) {

  getCountryByName(`${countryNameInput}`)
    .then(responseFromAPI => {
      const { data } = responseFromAPI;
      let htmlString = '';

      data.forEach((countryObj) => {
        htmlString += `
          <h2>${countryObj.name}</h2>
          <p>${countryObj.capital}</p>
          <br>`
      });

      countryList.innerHTML = htmlString;
    })
    .catch(err => console.log('Error is: ', err));
}

button.addEventListener('click', () => {
  const country = document.getElementById("the-input").value;
  getCountryInfo2 (country);
});
```









​	



# [EXERCISE - Axios GET and Chart.js](<https://github.com/ross-u/Exercise---Axios-GET-and-Chart.js>)









