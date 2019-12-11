## GitHub Pages

[GitHub Pages](https://pages.github.com/) is a tool that let’s you turn your GitHub repository into a live website on the Internet with just a few clicks. This way, we can easily create projects and portfolios without worrying about server configurations, DNS redirections or any other deployment problem we might have. **It’s also free!**



In GitHub Pages we can deploy anything from a simple static HTML page based on a markdown file, to a more sophisticated front-end web application.





### Creating the project

Let’s deploy the Ironhack Web Project we worked on earlier. If you didn’t manage to finish before, here is the code you will need:



#### Create the files and the folder structure

```bash
mkdir github-pages-deployment

cd git-hub-pages-deployment

mkdir scripts css 
touch index.html styles/styles.css scripts/script1.js scripts/script2.js

code .
```



`index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <link rel="stylesheet" href="./css/style.css">

  <title>GitHub Pages Demo</title>
</head>
<body>
  <div class="container" id="title-container">
    <h1>My Web App</h1>
  </div>
  <div class="container">
    <button id="button">Click me!</button>
  </div>
  <script src="./scripts/script1.js"></script>
  <script src="./scripts/script2.js"></script>
</body>
</html>
```





`css/style.css`

```css
#title-container {
  background-color: black;
}

h1 {
  text-align: center;
  color: white;
}

.container {
  width: 400px;
  margin: 50px auto;
}
```



`scripts/script1.js`

```js
var button = document.getElementById('button');

button.addEventListener('click', function() {
  alert('This app is awesome!');
});

```



`scripts/script2.js`

```js
console.log('SCRIPT 2');
```





### Creation of local and remote repositories

**Initialize** a new local repository in the project folder with:

```bash
$ git init
```

Then, add all the files to the **staging status** with:

```bash
$ git add .
```

Finally, commit all the files to **save in the repository**:

```bash
$ git commit -m "Created Ironhack Web App"
```





#### Create a new remote repository in GitHub called ***Ironhack Web App***. 



Copy the link to the remote repository and open the terminal to execute:

```bash
$ git remote add origin <link to the remote repository>
```



Now that we have linked the repositories, the final step is to update the remote repository with the files we have in the local repository. Execute:

```bash
$ git push origin master
```







### Deploying using GitHub Pages

![img](https://i.imgur.com/XSyyXk0.png)



In your GitHub profile inside [`github.com`](https://github.com/), open your remote repository *Ironhack Web App*. 

Now, open the remote repository settings in the right panel:

![img](https://i.imgur.com/UsFb3FF.png)



Then, scroll down until you see the **GitHub Pages** section:

![img](https://i.imgur.com/SaMQIqw.png)





### Deploy a **Custom** site as described in the bottom option. 



To do that, we need to **create a new branch** called **`gh-pages`**.

```bash
$ git checkout -b gh-pages
```



It will create a new branch with the name `gh-pages` and change to that branch. You can check it with:

```
$ git branch
```

Since the brances are created based on the status of the current commit in the branch we were, in this case master, we already have the project ready in the branch `gh-pages`.

Last step is to deploy the project, pushing everything to the right branch:

```
$ git push origin gh-pages
```





### Accessing GitHub Pages project

If we want to access to the online project we have, we must go to the next location:

### https://github-username.github.io/repository-name

This will display the result of your work like this:

![img](https://i.imgur.com/FiDs38S.png)

| Name                           | Description                                          |
| :----------------------------- | :--------------------------------------------------- |
| raulvv                         | Your username on GitHub with no uppercase characters |
| [GitHub.io](http://github.io/) | GitHub server                                        |
| Ironhack-Web-App               | The exact name of your repository                    |

We can have as many GitHub Pages as we want. 

We only need to change the final section of the url and it will show us any project.

