# M2 - Deployment - with Mongo Atlas



<br>



## [GIST: Instructions for the students](https://gist.github.com/ross-u/b59ea6a1febefb80bffc15ecf31ea827)



<br>



## Starter Code

https://github.com/ross-u/m2-deployment-jsx-starter-code



**Teacher Only:** Clone the starter code repository.

```bash
mkdir 00-m2-deployment-demo

cd 00-m2-deployment-demo

git clone https://github.com/ross-u/m2-deployment-jsx-starter-code.git .

code .
```



<br>



### 1. [Signup for a Free MongoDB Atlas account](https://www.mongodb.com/cloud/atlas/lp/try2)

![](https://i.imgur.com/vKJgkEB.png)



<br>



![](https://i.imgur.com/jLhyP7k.png)



<br>



### 2. [Sign Up & Create a Free Cluster](https://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster/)

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





## 3. Setup MongoDB Atlas Cluster:



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



<br>





## 4. Create a Heroku account



https://signup.heroku.com/



<br>



## 5. Install Heroku CLI



#### [LINK: Docs - Install the Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#npm)



<br>





## 6. Login to the Heroku website and *<u>Create New App</u>*  



#### Open your [Heroku Dashboard](https://dashboard.heroku.com/apps)



1. Go to [`dashboard.heroku.com/apps`](https://dashboard.heroku.com/apps), and then select:

    **New**  >>>  **Create new app** >>> **Choose region - Europe**  >>> **Create app**.

2. After you create the app, you should be redirected to the app's dashboard.

3. Select the **Deploy** section.



<br>



![](https://i.imgur.com/B8YG3DS.png)



<br>





### Create Heroku Dyno and connect it to the local repository





#### Follow the Deployment instructions

#### Go to *app Dashboard* >> "Deploy" section

While in the server root directory, to login to heroku and create a new Dyno,  run the following commands (also mentioned in the ***Deploy*** section) :



```bash
# Login to heroku from the terminal
heroku login
```



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



## Set the Config Vars in Heroku



<br>



##### In the Dashboard >>> *<u>Settings</u>* section, add the following Config Var:

For the sessions secret:

```bash
SESSION_SECRET=cookies-and-milk
```



For the newly created MongoDB database in the Atlas Cloud.

```bash
MONGODB_URI=<Mongo Atlas Conection String with username and password>
```



<br>



![](https://i.imgur.com/LgQPdzH.png)



<br>



Double-check that the config variable `MONGODB_URI` was added properly in your Heroku app **Settings **:

 *Heroku app **Dashboard**   **>>**   **Settings**   **>>**   **Config Vars**   **>>**   **Reveal Config Vars***



![img](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1cb30f9dffdce535dfd81a094c36f58a.png)











## Set the "Config Vars" update the project files



1. In the Heroku **app** **Dashboard** go to >> **Settings**:

2. Click on the **Reveal Config Vars**

3. Create the new keys for the environment variables:

   - `SESSION_SECRET`

   - `MONGODB_URI` - Set the value to be the previously copied **Connection String** from Mongo Atlas. **Remember to add the** `username` and `password` **to the Connection String** you created in Mongo Atlas.

     

   

   <br>

   


<br>

3. Make sure that `mongoose.connect` URLs are update both in the `app.js` and `bin/seed.js` (if you are using a seed).

   

   #### `app.js` & `bin/seed.js`

```js
// 			app.js   	AND    bin/seed.js

//	...

require('dotenv').config();               //  <--- ADD


//	...

//		...


mongoose
  .connect(
    process.env.MONGODB_URI,            //  <--- UPDATE
    {useNewUrlParser: true}
	)
  .then((x) => console.log('Connected to the DB')
  .catch(err => console.error('Error while connecting to DB', err));

        
//	...
//		...
//			...

```



<br>



4. Update the `package.json` and [specify the version of node](https://devcenter.heroku.com/articles/deploying-nodejs#specify-the-version-of-node):

   - Run command `node --version` to get the version of Node.js installed: 

     ```bash
     node --version
     ```

     

   - Add the `engines` config with the `node` version to the `package.json`:

     ##### `package.json`

     ```json
     "engines": {
       "node": "12.x"
     }
     ```

     

<br>





5. After updating the `mongoose.connect` connection strings  and adding the `node` version make sure to `commit` the changes and push to remote on GitHub (`origin`) and Heroku (`heroku`)

 

```bash
git add .

git commit -m 'Update mongoose connection and add node version'

# Push the commit and update the version on GitHub
git push origin master

# Push the commit and update the deployed version on Heroku
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



### [Access the terminal of the Heroku instance - `heroku run bash`](https://devcenter.heroku.com/articles/heroku-cli-commands#heroku-run)

We can open the terminal instance on the Heroku container ([dyno](https://www.heroku.com/dynos)) in order to run custom scripts or see the files included in the instance. 

```bash
# Open the terminal in the app dyno in Heroku
heroku run bash

# We may then run the seed file
node bin/seed.js

```



<br>

