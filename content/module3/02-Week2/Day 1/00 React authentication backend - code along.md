# React  authentication code along - Server



<br>



#### Clone the repository with starter code

<br>



```bash
git clone https://github.com/ross-u/React-Auth-Server-Code-Along---Starter-Code-.git

cd React-Auth-Server-Code-Along---Starter-Code-/

npm i
```



<br>











#### Rename `.env.sample` file to `.env`



<br>



#### - HTTP request and response flow and session 	`appWComments.js`

#### - `helpers/middlewares.js` - we use it to  abstract some functionality to helper functions



<br>



#### Create the `/signup` route in `routes/auth.router.js`



```js
//		routes/auth.router.js

// POST '/auth/signup'
router.post('/signup', isNotLoggedIn, validationLogin, async (req, res, next) => {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ username });
      
      if (user) return next(createError(400));  // Bad Request
      else {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashPass = bcrypt.hashSync(password, salt);
        const newUser = await User.create({ username, password: hashPass });

        newUser.password = "*";
        req.session.currentUser = newUser;
        res
          .status(201)  //  Created
          .json(newUser);
      }
    } 
    catch (error) {
      next(createError(error));  // 500 Internal Server Error (by default)
    }
  },
);
```



<br>



#### Create the `/login` route in `routes/auth.router.js`

```js
//		routes/auth.router.js

//  POST    '/login'
router.post('/login', isNotLoggedIn, validationLogin, async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username }) ;
      if (!user) {
        next(createError(404));
      } 
      else if (bcrypt.compareSync(password, user.password)) {
        
        user.password = '*';
        req.session.currentUser = user;
        res
          .status(200)
          .json(user);
      //return;	 			TODO - remove from the notes
      } 
      else {
        next(createError(401));	// Unauthorized
      }
    } 
    catch (error) {
      next(createError(error));
    }
  },
);
```



<br>



#### Create the `/logout` route in `routes/auth.router.js`

```js
//		routes/auth.router.js

//  POST    '/logout'
router.post('/logout', isLoggedIn, (req, res, next) => {
  req.session.destroy(function (err) {
      res
    		.status(204)  //  No Content
    		.send();
  });
});
```





<br>





#### Create the `/private` route in `routes/auth.js`

```js
//		routes/auth.router.js

//  GET    '/private'   --> Only for testing - Same as `/me` but it returns a message instead
router.get('/private', isLoggedIn, (req, res, next) => {
  res
    .status(200)  // OK
    .json( { message: 'Test - This is private and the user is logged in' } );
});

```



<br>





#### Export the `router` in `routes/auth.js`

```js
//		routes/auth.js
//	...
//			...

module.exports = router;
```



<br>



#### Import the Postman collection from the `.postman` file in the project directory 



<br>



#### In Postman, test the routes in the following order:

####   `/signup`,  `/private` ,`/logout` ,`/login` and again `/private`.



<br>



Postman will automatically save cookies on the Headers for the next requests. 

Example: after `/auth/signup` cookie is returned in the response and Postman will set that cookie on all the requests in the collection, so that next time we send request, that cookie with session.id is sent automatically to the server.



<br>







#### Create the `/me` route in `routes/auth.router.js`

```js
//		routes/auth.router.js

//  GET    '/me'
router.get('/me', isLoggedIn, (req, res, next) => {
  const currentUserSessionData = req.session.currentUser;
  currentUserSessionData.password = '*';
  
  res.status(200).json(currentUserSessionData);
});
```



<br>



