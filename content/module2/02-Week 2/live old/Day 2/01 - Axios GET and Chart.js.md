# Axios GET and Chart.js



Let’s keep practicing a bit! In this case, we will retrieve stock data from an [IEX Trading API](https://iextrading.com/developer/), and display it on a chart.



### ChartJS

For displaying our data, we will use a library called [ChartJS](http://www.chartjs.org/), that help us to print impressive charts we few lines of code.

![img](https://user-images.githubusercontent.com/23629340/36738310-80b9bc08-1bdd-11e8-813e-fa6b05c9b4f9.png)



### Getting Started

Create a `stock-chart` folder. Inside the folder, create an `index.html` and a `script.js`.

```bash
 mkdir stock-chart
 cd stock-chart
 touch index.html
 touch script.js
```



On our `index.html` we need to create a basic HTML structure and link our `javascript` file.







### Test the API return with POSTMAN



![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_59d53910a8a94a1096fa00a5ed2003aa.png)



Open Postman and click on the orange button **"+New"** in the left corner.  Create a **"New Collection"** called **'axios and chart.js'**.



Add a request to this collection:

- `GET`  for the URL with endpoint: `https://api.iextrading.com/1.0/stock/amzn/chart`



Click the Send button to send the request. Check the data you got back from the IEX Trading API in the response *Body* !







### Get the data!

To get the data from the API, we need to do a GET request using Axios, so go ahead and add the Axios CDN on the `<head>` tag of our HTML.

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```





Connect you `index.js` with your `index.html`. On our `script.js` we should have the necessary code to make the GET request. For our example, we will check the [Amazon](http://materials.ironhack.com/s/S1ZB0nzpVVm) stock price. We should send to the API, the ticket of the stock we want to get the info. For Amazon, we should use **‘amzn’**.

```js
const stockInfo  = axios.create({
  baseURL: 'https://api.iextrading.com/1.0/stock/',
});

const stockTicket = "amzn";

stockInfo.get(`${stockTicket}/chart`)
  .then(response => console.log(response))
  .catch(error => console.log(error));
```

Go ahead and check on the browser what are we getting from the API! ![:wink:](http://materials.ironhack.com/build/emojify.js/dist/images/basic/wink.png)







#### Add ChartJS



We have several ways to add ChartJS to our project. In this case, we will use the CDN, so go ahead and add it to our `index.html` file:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
```





According to [ChartJS Documentation](http://www.chartjs.org/docs/latest/getting-started/) we also need to add a `canvas` in our HTML file, so place it inside the `body`.

```html
<canvas id="myChart"></canvas>
```





We are ready to print our Chart. On the `script.js` let’s add a `printTheChart()` function. We will call this function after we get the data from the API, and pass that data to function.

```js
const printTheChart = (stockData) => {
  const stockLabels = stockData.map( element => element.date);
  const stockPrice = stockData.map( element => element.close);
  const ctx = document.getElementById('myChart').getContext('2d');
  
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: stockLabels,
      datasets: [{
        label: "Stock Chart",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: stockPrice,
      }]
    }
  });
});


stockInfo.get(`${stockTicket}/chart`)
    .then((response) => printTheChart(response.data) )
    .catch( (error) => console.log(error));
```





That’s it! If you navigate to the `index.html` on the browser, you should be able to see the chart with the data:

![img](https://user-images.githubusercontent.com/23629340/36739652-bdac988a-1be0-11e8-8cad-31ccc08d14d2.png)



As you may notice, on the `dataset` property of the chart, we can change the `background color` or the `border-color`. We have several options to display the Chart. Do not be afraid of checking the documentation to customize it as much as you want.





### Advanced Mode!

Go ahead and add an `input` where the user can fill the ticket of any stock, and you display the data about it! You need to call the API every time the user clicks on the `Submit` button! ![:muscle:](http://materials.ironhack.com/build/emojify.js/dist/images/basic/muscle.png)