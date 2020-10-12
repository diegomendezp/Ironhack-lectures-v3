# React - Deployment





## Before code along



#### Clone Starter repositories and remove `.git`



```bash
git clone https://github.com/ross-u/M3-Deployment-Client.git

cd M3-Deployment-Client

rm -rf .git

npm i

code .
```



```bash
git clone https://github.com/ross-u/React-Deployment-Server.git

cd React-Deployment-Server
, 
rm -rf .git

git init

npm i

code .
```





<br>





#### Install dependencies

```bash
# Install dependencies in the client folder
cd project-management-client
npm i

# git init

# Install dependencies in the server folder
cd ../project-management-server
npm i

# git init
```







## Code along





#### Open your project's back-end and front-end folders in the VSCode.



#### Switch to the back-end code editor and check that Heroku is installed.



```bash
heroku --version
```





#### Run the `heroku login` command. 

```bash
heroku login
```











<br>





### Create a new Heroku app (in Heroku Dashboard)





#### Login to the Heroku website and *<u>Create New App</u>*  



#### https://dashboard.heroku.com/apps











<br>







## Connect the server repository to Heroku



#### Inside the server directory run :



```bash
# INSIDE THE SERVER REPO (root directory)
# RUN THE FOLLOWING COMMANDS:


# Add heroku remote
heroku git:remote -a name-of-the-app



# Check the remotes available
git remote -v


# Make some changes to the code and deploy them to Heroku using Git.
git add .

git commit -m 'Deploy to heroku'

git push heroku master
```











<br>













## Setup the client (React app) and run the build



<br>



### Setting environment variables - on the client side.





#### Go inside client side folder and create two new file **in the root**:

```bash
cd project-management-client
touch .env.development .env.production
```





<br>



#### Update the CLIENT directory `package.json` ,

####  Add custom scripts 

#### `build-dev` and `build-prod`



These scripts can be used as a example on runing custom builds

##### `package.json`

```js
"scripts": {
    "build:dev": "dotenv -e .env.development react-scripts build",
    "build:prod": "dotenv -e .env.production react-scripts build",
      
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
}
```





#### we are pointing to `http://localhost:5000` which is correct only if in the `development mode`.



####  if we are in the `production mode`, we have to point to *Heroku* address of our app 





### Update both of the `.env.---` files



##### `client/.env.development`

```bash
# .env.development
REACT_APP_API_URL=http://localhost:5000
```



##### `client/.env.production`

```bash
# .env.production
REACT_APP_API_URL=https://name-of-your-app.herokuapp.com
```





<br>





# !!!

**REACT_APP** prefix **is not optional**. React (CREATE REACT APP) is looking for it through `process.env`





<br>



#### Change the URLs in your react app to point to the `process.env` value 



##### `lib/task-services.js`

```js
//	lib/task-services.js


/* Fallback solution
const apiURL = (process.env.NODE_ENV === 'development') ? 'http://localhost:5000' : 'https://your-app-name.herokuapp.com';
*/


  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,			     // <-- UPDATE
      withCredentials: true
    });
  }
```





##### `lib/project-services.js`

```js
//	lib/project-services.js

/* Fallback solution
const apiURL = (process.env.NODE_ENV === 'development') ? 'http://localhost:5000' : 'https://your-app-name.herokuapp.com';
*/

  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,			     // <-- UPDATE
      withCredentials: true
    });
  }

```





##### `lib/auth-services.js`

```js
//	lib/project-services.js

/* Fallback solution
const apiURL = (process.env.NODE_ENV === 'development') ? 'http://localhost:5000' : 'https://your-app-name.herokuapp.com';
*/

  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,			     // <-- UPDATE
      withCredentials: true
    });
  }

```





<br>



## Bundle the React App



##### `npm run build` command, bundles the entire app, creating an `index.html` as the entrance point of our app.





#### Inside the `client side folder` run:

```bash
npm run build
```





This step will produce a new directory (called `build`) containing the minified and optimized code.





#### Copy everything from the `build`  folder on <u>client side</u> 

#### and paste it into `/public` folder on the <u>server side</u> (in `project-management-server`).







<br>







### Update server `app.js`



 #### To make `index.html` and app accessible on our API:

 ####  Add below code at the very end of our `app.js`, right after *routes middleware * and just before `module.exports = app;` or the error handling middleware



#####`server/app.js`

```jsx
//	app.js


//	...

//	...


// ROUTES MIDDLEWARE:
app.use('/api', projectRouter);
app.use('/api', taskRouter);


// ROUTE FOR SERVING REACT APP (index.html)
app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});



module.exports = app;
```







<br>





### MLab configuration



#### Create database via shell

```bash
# CREATE MongoLab SANDBOX DB
heroku addons:create mongolab:sandbox


# OPEN THE DB IN MLAB
heroku addons:open mongolab


# GET THE MONGODB_URI FROM HEROKU VARIABLES
heroku config:get MONGODB_URI
```









### Check that the config variable process.env.`MONGODB_URI` and `SECRET_SESSION` are set for your Heroku app:

 *Heroku app page   **>>**   Settings   **>>**   Config Vars   **>>**   Reveal Config Vars*



![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1cb30f9dffdce535dfd81a094c36f58a.png)











###  Configure the database connection



#### Create / Update `.env` file on the back-end



#### `.env`

```bash
#																/your-database-name-here
MONGODB_URI=mongodb://localhost/project-management-server
```







#### and require it on the top of `app.js` using:

##### `app.js`

```js
// app.js

//	...

require('dotenv').config();		//  <--- ADD


mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true})		//  <--- UPDATE
//  .then...

//  				...

//  						...

//	...
```



<br>



#### Update the  `CORS` settings in the back-end `app.js`

Add `credentials`

and the new `heroku` url.

### `app.js` 

```js
// app.js

//	...

//	...

// CORS SETTINGS TO ALLOW CROSS-ORIGIN INTERACTION:
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000', 'https://your-heroku-app-name.herokuapp.com'],
}));
```





<br>





#### Set the `"engines": { "node": 'x.xx.xx'}` in backend `package.json`



<br>



#### Run `node -v` to get the version of Node.js installed 



##### `server/package.json`

```json
  "engines": {
    "node": "12.x"
  },
```





<br>



#### Create a commit and deploy to Heroku

```bash
# Make some changes to the code and deploy them to Heroku using Git.
git add .

git commit -m 'Production deployment v1'

git push heroku master

heroku open
```





#### To fetch your app’s most recent logs, use the `heroku logs` command:

```bash
 heroku logs
```







The `logs` command retrieves 100 log lines by default. 

#### You can specify the number of log lines to retrieve (up to a maximum of 1,500 lines) by using the `--num` (or `-n`) option.

```bash
heroku logs -n 200
```



<br>



### [Real-time tail](https://devcenter.heroku.com/articles/logging#real-time-tail)

#### Real-time tail displays recent logs and leaves the session open for real-time logs to stream in. 

```bash
heroku logs -t
```



<br>



#### Run the bash terminal on the Heroku dyno/container instance.

```bash
heroku run bash
```

