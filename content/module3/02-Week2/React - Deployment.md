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





## 1. Login to the Heroku website and *<u>Create New App</u>*  



#### Open your [Heroku Dashboard](https://dashboard.heroku.com/apps)



1. Go to [`dashboard.heroku.com/apps`](https://dashboard.heroku.com/apps), and then select:

    **New**  >>>  **Create new app** >>> **Choose region - Europe**  >>> **Create app**.

2. After you create the app, you should be redirected to the app's dashboard.

3. Select the **Deploy** section.



<br>



![](https://i.imgur.com/B8YG3DS.png)



<br>





## 2. Connect Heroku app to the local repository


<br>



#### Follow the Deployment instructions - *Deploy* section

<br>

While in the Heroku app *Dashboard* open the ***Deploy*** section

<br>

To login to Heroku and create a new Dyno, from your server/project root directory,  run the following commands (also mentioned in the ***Deploy*** section) :



```bash
# Login to heroku from the terminal
heroku login
```


<br>

```bash
# Add heroku remote
heroku git:remote -a <name-of-the-newly-created-app>

# Check the remotes available
# Newly added `heroku` remote repository connection should be shown
git remote -v
```



<br>





```bash
# Commit the most recent work on the development branch
git add .
git commit -m 'Write a clear meaningful commit message here'
git push origin <development-branch-name>


# Checkout to the master branch
git checkout master


# Merge (bring) updates from the development branch
git merge <development-branch-name>

git push heroku master
```



<br>









## 3. Setup the client (React app) and create the `build`



<br>



#### Set client side (React app) environment variables

<br>



1. In the client side (React app) root folder create the new files:

```bash
touch .env.development .env.production
```



<br>



2. Update both files in the following way:

   - In the `env.development` file (in React app) set the URL of the server used in development:

     

     ##### `.env.development`

     ```bash
     # .env.development
     REACT_APP_API_URL=http://localhost:5000
     ```

     

     <br>

     

   - In the `env.development` file (in React app) set the URL of the server in production, our newly created heroku app:

     

     ##### `.env.production`

     ```bash
     # .env.production
     REACT_APP_API_URL=https://name-of-your-app.herokuapp.com
     ```

     

     <br>

     

#### The `create-react-app` Environment Variables 



**NOTE:** Our production server will be running on the URL of the newly created app in Heroku, that we set in the `.env.production` in the previous step. 



The *Create React App* will automatically load the values coming from the files `.env.production` or `.env.development`  to the React app, depending on how the app is run:

<br>



###### `.env.development`:

During the development when running the React app localy via `npm start`, *Create React App*   automatically loads the values from `.env.development` and makes them available in the app.



<br>

###### `.env.production`:

When creating the production `build` with `create-react-app` by using the `npm run build` command, the variables from `.env.production` are loaded and made embedded in the app during the build time.



<br>



#### `REACT_APP` prefix



**NOTE:** When creating custom environment variables in your React app, they must begin with `REACT_APP_`.  Meaning that **`REACT_APP_`** prefix **is mandatory**. 

 Any other variables will be ignored by *Create React App*. 



<br>



<hr>

<br>





## 4. Update `axios` request URLs in your React App



Before creating the build, you must refactor you React App frontend code and change all hardcoded URLs used in the `axios` requests. You must change this and instead set the value coming from `.env` file exposed via the `process.env` .

Refactor all the `axios` requests in your React app. You must refactor the `baseURL` in each **service** (e.g. `auth-service.js`) and also `axios` requests that are not in a service.



<br>



**Examples:**

<br>



1. For axios requests refactored into services, update the `baseURL`:



##### `lib/task-services.js`

```js
//	lib/task-services.js


/* Fallback solution
const apiURL = (process.env.NODE_ENV === 'development') ? 'http://localhost:5000' : 'https://your-app-name.herokuapp.com';
*/


  constructor() {
    this.api = axios.create({
	//  baseURL: http://localhost:5000									 // <-- REMOVE
      baseURL: process.env.REACT_APP_API_URL,			     // <-- ADD
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



For individual axios requests, (not refactored to a **service** ) update the request URL, for example the following should be refactored:

```js
    axios.post(
      'http://localhost:5000/api/users', 
      { username, password }, 
      { withCredentials: true }
    )
```



​	Into an axios request using `process.env.REACT_APP_API_URL` as the value of the base URL:

```js
    axios.post(
      `${process.env.REACT_APP_API_URL}/api/users`, 
      { username, password }, 
      { withCredentials: true }
    )
```

 

<br>



## 5. Create the *production* React App *build*



The *Create React App* command `npm run build`  creates the build of the React App ready for production. The build process creates an `index.html`  file as the entrance point of our app and the minified bundle of `.js` and `.css` files holding the logic (and styles) of our App.



<br>



#### Create the build



From the root folder of the React App project run the command:

```bash
npm run build
```





This step will produce a new directory (called `build/`) containing the minified and optimized code, ready to be deployed in production.



![Run build React video example](https://media4.giphy.com/media/cZ1YYMq47oy4HUx88k/giphy.gif)





<br>





## 6. *Serving* the *production React app* `build`



<br>



**NOTE:** Our production server will be running on the URL of the newly created app in Heroku. The same production server will be used for additional purpose, and that is to also serve the production build of the React app. 



<br>



#### Add the React App `/build` files to the server



1. <u>Copy all</u> the files and folders <u>from</u> the client side <u>React App `/build`  folder</u>.

   

2. <u>Paste</u> the copied files and folders  <u>to the server's</u> `/public` folder.

   





<br>



![Adding build to server video example](https://media1.giphy.com/media/zY1u0gF5zXWsZvW1xx/giphy.gif)



<br>







#### Create server route to serve the React App



We will make the React and app accessible through the same URL/domain that our server is running at.

Create a route used to serve the React App from our server.

Make sure to create this route **right after the *ROUTES MIDDLEWARE*** and  **before the *ERROR HANDLING** middleware.



![img](https://i.imgur.com/HWFFB0h.png)



<br>



#####Server - `/app.js`

```jsx
//	app.js

// ROUTE FOR SERVING REACT APP (index.html)
app.use((req, res, next) => {
  // If no previous routes match the request, send back the React app.
  res.sendFile(__dirname + "/public/index.html");
});
```



<br>



<hr>



<br>





## 7. Mongo Atlas configuration - cloud Database



<br>



#### 7.1. [Signup for a Free MongoDB Atlas account](https://www.mongodb.com/cloud/atlas/lp/try2)

![](https://i.imgur.com/vKJgkEB.png)



<br>



![](https://i.imgur.com/jLhyP7k.png)



<br>



#### 7.2. [Sign Up & Create a Free Cluster](https://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster/)

1. Sign Up for Mongo Atlas - enter the email, password, first name, last name

2. Select  >>>  **Starter Clusters (or Shared Clusters)** 

3. In the drop-down **Cloud Provider & Region** select: 

   -  Europe Region 

4. in the **Cluster Tier** select:

   

5. In the drop-down "**Cluster Tier**" make sure to select:

   -  **M0 Sandbox** - with the flag **Free forever**.

6. Click the button **Create Cluster**



<br>



![](https://i.imgur.com/uxoAE6C.png)



<br>







![](https://i.imgur.com/auYMuhb.png)



<br>





![](https://i.imgur.com/sOOp0vs.png)



<br>



![](https://i.imgur.com/j8kcopJ.png)



<br>





#### 7.3. Setup MongoDB Atlas Cluster:



1. In the sidebar in the **SECURITY** part:

   - select **->  Database Access**

   

   <br>

   

2. Click on **<u>+ ADD NEW USER</u>** to create a new user

   - Select **Read and write to any database** - User Privileges
   - Set the **Username** and **Password**
   - Set **Database User Privileges** to : ***Atlas admin***
   - Create New User

   

   <br>

   

   ![](https://i.imgur.com/L9Pie5j.png)

   

   <br>

   

3. In the sidebar select **SECURITY  ->  Network Access**

   

   <br>



![](https://i.imgur.com/88GeH9u.png)



<br>



4. Click on **<u>+ ADD IP ADDRESS</u>**

- Click on **ALLOW ACCESS FROM ANYWHERE**
- Confirm



<br>



![](https://i.imgur.com/f3tGfbn.png)



<br>



5. Connect To Your Cluster: Click on the gray button **CONNECT**

- Select **Connect Your Application** option
- Choose Your driver version:  **DRIVER**: Node.js
- **Copy** the **Connection String Only**



<br>



![](https://i.imgur.com/btWKcLp.png)



<br>



![](https://i.imgur.com/7pYGh0P.png)





<br>





6. Update the connection string and add the ***username*** and ***password***.
7. Save the created connection string for the future step, where we will set it as the **Config Var** in the new Heroku app.



<br>





## 8. Set *Config Vars* in Heroku



1. In the Heroku **app** **Dashboard** go to >> **Settings**:
2. Click on the **Reveal Config Vars**
3. Create the new keys for the environment variables:
   - `SESSION_SECRET`
   - `MONGODB_URI` - Set the value to be the previously copied **Connection String** from Mongo Atlas. **Remember to add the** `username` and `password` **to the Connection String** you created in Mongo Atlas.

For the sessions secret:

```bash
SESSION_SECRET=s0m3RaNd0mS7r1nG123
```

For the newly created MongoDB database in the Atlas Cloud.

```bash
MONGODB_URI=<Mongo Atlas Conection String with username and password>
```



[![img](https://camo.githubusercontent.com/a98c5092c34d316dbb7136d1aed99a6bfa655adae8297461d193e575ff4c01d2/68747470733a2f2f692e696d6775722e636f6d2f4c675150647a482e706e67)](https://camo.githubusercontent.com/a98c5092c34d316dbb7136d1aed99a6bfa655adae8297461d193e575ff4c01d2/68747470733a2f2f692e696d6775722e636f6d2f4c675150647a482e706e67)



❗ Double-check that all needed config variables (`MONGODB_URI`, `SESSION_SECRET`, etc.) were added properly during the previous step :

*Heroku app **Dashboard** **>>** **Settings** **>>** **Config Vars** **>>** **Reveal Config Vars***





<br>



## 9. Update `mongoose.connect` connection string



<br>

You must verify that your database connection in the `app.js` is using the database connection URL coming via `process.env.MONGDB_URI`:



- Your server `app.js` file should have the `dotenv` import, used to load the values from `.env` file:



##### Server - `app.js`

```js
// app.js

require('dotenv').config();
```



<br>



- In the same file the `mongoose.connect` should have `process.env.MONGDB_URI`  set as the first argument:

  

##### Server - `app.js`

```js
// app.js

mongoose
  .connect(
  	process.env.MONGODB_URI, 
  	{
    	keepAlive: true,
    	useNewUrlParser: true,
    	useUnifiedTopology: true
  	}
	);
```



<br>





<br>



## 10. Update the server's `CORS` settings :

Ensure that `cors` middleware config is having `credentials: true` set.



In addition you should also add the URL of your newly created Heroku app, in the following way:



<br>



##### `app.js` 

```js
// app.js

//	...

//	...

// CORS SETTINGS TO ALLOW CROSS-ORIGIN INTERACTION:
app.use(cors({
  credentials: true,
  origin: [
    'http://localhost:3000', 
    'http://your-heroku-app-name.herokuapp.com',         // <-- ADD
    'https://your-heroku-app-name.herokuapp.com'         // <-- ADD
  ],
}));
```





<br>





## 11. Update the server's `package.json` :



Before deploying our server to Heroku we must [specify the Node.js version](https://devcenter.heroku.com/articles/nodejs-support#specifying-a-node-js-version) that matches the Node.js version we use in development. 



- Run command `node --version` to get the version of Node.js installed:

  

  ```bash
  node --version
  
  #> v12.4.1
  ```

  

<br>



- Add the `engines` section with the `node` version to the server's `package.json` file:  

  

  ##### Server - `package.json`

  ```json
  "engines": {
    "node": "12.x"
  }
  ```





<br>



## 12. Deploy the server to Heroku



<br>



After updating the `mongoose.connect` connection strings and adding the `node` version make sure to `commit` the changes and push to remote on GitHub (`origin`) and Heroku (`heroku`):



##### From *server* directory:

```bash
git add .

git commit -m 'Initial Deployment'

# Push the commit and update the version on GitHub
git push origin master



# Push the commit to heroku origin to deploy in Heroku
git push heroku master


# Open the app in the browser (from terminal)
heroku open
```



<br>



## Heroku commands



### Logs

To fetch your app’s most recent logs, use the `heroku logs` command:

```bash
 heroku logs
```







The `logs` command retrieves 100 log lines by default. 

You can specify the number of log lines to retrieve (up to a maximum of 1,500 lines) by using the `--num` (or `-n`) option.

```bash
heroku logs -n 200
```



<br>



### [Troubleshooting - Real-time tail](https://devcenter.heroku.com/articles/logging#real-time-tail)



If there was an error during the deployment, you will be shown the following screen prompting you to run `heroku logs --tail` command:



![](https://i.imgur.com/sE61lwT.png)



<br>



Real-time tail displays recent logs and leaves the session open for real-time logs to stream in. 

This command is used to troubleshoot any deployment errors when the deployed app is not working as expected.

```bash
heroku logs --tail
```



<br>



### Access the terminal of the Heroku container


We can open the terminal instance on the Heroku container ([dyno](https://www.heroku.com/dynos)) in order to run custom scripts or see the files included in the instance. To do this we use the command [`heroku run bash`](https://devcenter.heroku.com/articles/heroku-cli-commands#heroku-run).

<br>

For example to **run the seed sequence and populate the production database** we should do the following :

```bash
# Open the terminal in the app dyno in Heroku
heroku run bash

# We may then run the seed file
node bin/seed.js

```



<br>





<br>

#### BONUS: Custom React App build scripts

Additionaly if during the lifetime of your project it becomes necessary to inspect the builds or maybe manually load a different `.env` file and values during the build, you can do this by creating a custom script in the `package.json` of our client side (React app).

<br>

Below scripts are an example on creating these custom build scripts.

You won't be needing the custom build scripts during your project and this should serve only as an example on how you can use them to load different `.env` values and create them if need be in future.



1. Add custom example scripts `build:dev` and `build:prod` that load a specific `.env` file during the build to embedd different environemnt variables:

   <br>

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



<br>