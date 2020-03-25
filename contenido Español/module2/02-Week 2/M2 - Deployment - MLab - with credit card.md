# M2 - Deployment  - MLab 





### Create the `.env` variables that will be used in production 

### and update the files that depend on them



###### `.env`

```bash
PORT=3000
MONGODB_URI=mongodb://localhost:27017/your-db-name
SESSION_SECRET=cookies-and-milk
```



<br>



###### `app.js`

```js
// app.js


// STEP 1

// Ensure that dotenv is imported using `require`
require("dotenv").config();



// STEP 2

// UPDATE MONGOOSE CONNECTION URL STRING
mongoose.connect(process.env.MONGODB_URI , {
  useNewUrlParser: true,
  useUnifiedTopology: true
});




// STEP 3

// UPDATE EXPRESS-SESSION `secret`
app.use(
  session({
    secret: process.env.SESSION_SECRET,							// <--- UPDATE
    // cookie: { maxAge: 3600000 * 1 },	// 1 hour
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 60 * 60 * 24 * 7 // Time to live - 7 days (14 days - Default)
    })
  })
);
```

<br>





## Create a Heroku account



https://signup.heroku.com/



<br>



## Install Heroku CLI



#### [LINK: Docs - Install the Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#npm)



### If unable to install the CLI via the Standalone installation (using a file) :

```bash
npm install -g heroku


heroku --version

# heroku/7.0.0 (darwin-x64) node-v8.0.0


heroku login
```



<br>





## Login to the Heroku website and *<u>Create New App</u>*  



1. Select **New**  >>>  **Create new app** >>> **Choose region - Europe**  >>> **Create app**.
2. After you create the app, you should be redirected to the app's dashboard.
3. Select the **Deploy** section.



<br>



## Connecting the Server side repository to Heroku





### Follow the instructions from the app dashboard "Deploy" section



While in the server root directory, in the terminal run :



```bash
# Commit the most recent work and merge it to the master branch
#
#


# Checkout to the master branch
git checkout master



# Add heroku remote
heroku git:remote -a <name-of-the-newly-created-app>




# Check the remotes available
git remote -v




# Make some changes to the code and deploy them to Heroku using Git.
git add .

git commit -m 'Make it better'

git push heroku master
```





<br>



## Set the Config Var for sessions



<br>



#### In the Dashboard >>> *<u>Settings</u>* section, add the following Config Var:

```
SESSION_SECRET=cookies-and-milk
```





<br>



- Open your project in the VSCode, and open the terminal.

- We will work from the root directory of your project.





<br>



## MongoDB - MLab configuration



```bash
# CREATE MongoLab SANDBOX DB
heroku addons:create mongolab:sandbox


# OPEN THE DB IN MLAB
heroku addons:open mongolab
```



<br>



<br>



Double-check that the config variable process.env.MONGODB_URI is available (set by the same name) in your Heroku app **Settings **:

 *Heroku app Dashboard   **>>**   Settings   **>>**   Config Vars   **>>**   Reveal Config Vars*



![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1cb30f9dffdce535dfd81a094c36f58a.png)





<br>



## [Specify the version of node](https://devcenter.heroku.com/articles/deploying-nodejs#specify-the-version-of-node)



#### Set the `"engines": { "node": 'x.xx.xx'}` in the `package.json`



#### Run `node --version` to get the version of Node.js installed 

```bash
node --version
```



##### `package.json`

```json
"engines": {
  "node": "12.x"
}
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





<br>





## Heroku commands



#### To fetch your app’s most recent logs, use the `heroku logs` command:

```bash
 heroku logs
```







The `logs` command retrieves 100 log lines by default. 

#### You can specify the number of log lines to retrieve (up to a maximum of 1,500 lines) by using the `--num` (or `-n`) option.

```bash
heroku logs -n 200

```





### [Real-time tail](https://devcenter.heroku.com/articles/logging#real-time-tail)

#### Real-time tail displays recent logs and leaves the session open for real-time logs to stream in. 

```bash
heroku logs -t

```





### [heroku run bash](https://devcenter.heroku.com/articles/heroku-cli-commands#heroku-run)

We can open the terminal instance on the Heroku container ([dyno](https://www.heroku.com/dynos)) in order to run custom scripts or see the files included in the instance. 

```bash
# Open the terminal in the app dyno in Heroku
heroku run bash

# We may then run the seed file
node bin/seed.js

```



<br>