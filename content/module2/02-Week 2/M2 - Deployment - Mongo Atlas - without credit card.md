# M2 - Deployment - Mongo Atlas (without a credit card)



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



### Follow the instructions from the app dashboard "Deploy" section



While in the server root directory, in the terminal run :



```bash
# Commit the most recent work and merge it to the master branch
git add .
git commit -m 'Update xyz.js with new middleware'
git push origin <branch-name>


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



##### In the Dashboard >>> *<u>Settings</u>* section, add the following Config Var:



```
SESSION_SECRET=cookies-and-milk
```



<br>





- Open your project in the VSCode, and open the terminal.

- We will work from the root directory of your project.



#### Check that Heroku is installed.



```bash
heroku --version
```





#### Run the `heroku login` command. 

```bash
heroku login
```





<br>





## Connecting the repository to Heroku





#### Login to the Heroku website and click on 	>>>  ***Create New App***  





#### Inside the server directory run :



```bash
# Add heroku remote
heroku git:remote -a <name-of-the-app>


# Check the remotes available
git remote -v


# Make some changes to the code and deploy them to Heroku using Git.
git add .

git commit -m 'Make it better'

git push heroku master
```



<br>





##  MongoDB Atlas configuration - (without credit card)

<br>



https://www.mongodb.com/atlas-signup-from-mlab



<br>

### **Sign Up & Create a Free Cluster** 

1. Sign Up for Mongo Atlas - enter the email, password, first name, last nae
2. Select  >>>  **Starter Clusters**
3. In the drop-down **Cloud Provider & Region** select: 
   -  Europe Region with "**FREE TIER AVAILABLE**" flag
4. In the drop-down "**Cluster Tier**" make sure to select:
   - **M2 Sandbox**
5. Click the button **Create Cluster**



<br>





### Setup MongoDB Atlas Cluster:



1. In the sidebar select **SECURITY  ->  Database Access**

   <br>

2. Click on **<u>+ ADD NEW USER</u>** to create a new user

   - Select **Read and write to any database** - User Privileges
   - Set the **Username** and **Password**
   - Create New User

   <br>

3. In the sidebar select **SECURITY  ->  Network Access**

   <br>

4. Click on **<u>+ ADD IP ADDRESS</u>**

   - Click on **ALLOW ACCESS FROM ANYWHERE**
   - Confirm

   <br>

5. Connect To Your Cluster: Click on the gray button **CONNECT**

   - Select **Connect Your Application** option

   - Choose Your driver version:  **DRIVER**: Node.js

   - **Copy** the **Connection String Only**

     

<br>





## Set the "Config Vars" update the project files



1. In the Heroku **app** **Dashboard** >> **Settings**:

   - Create tne new **Config Var** KEY -  MONGODB_URI
   - Set the value to be the previously copied **Connection String** from Mongo Atlas.
   - **Remember to add the** `<password>` **to the Connection String** you copy/pasted.

   

   <br>

2. Update also the `.env` file in your project, which is used for development:

   - Change the name from DB_NAME (or whatever you called it) to **MONGODB_URI**

   - MONGODB_URI value should include the complete URI including the database name, like:

     

     ##### `.env`

     ```sh
     MONGODB_URI=mongodb://localhost:27017/deployment-db-name
     ```



<br>

3. Update the `app.js` and `bin/seed.js`.

   

   #### `app.js` & `bin/seed.js`

```js
// 			app.js   	AND    bin/seed.js

//	...

require('dotenv').config();			//  <--- ADD


mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true})		//  <--- UPDATE
  .then((x) => console.log('Connected to the DB', x.connections[0].name))
  .catch(err => console.error('Error while trying to connect to MongoDB',err));

//	...
//		...
//			...

```



<br>

4. Commit the changes and push to remote on GitHub (`origin`) and Heroku (`heroku`)

   

```bash
git add .

git commit -m 'Update .env variables and add MONGODB_URI'

git push origin master

git push heroku master
```



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
~$~$ node bin/seed.js

```



<br>