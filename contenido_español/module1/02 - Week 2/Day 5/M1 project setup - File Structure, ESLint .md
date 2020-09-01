# M1 project setup



### Create file structure



```bash
mkdir m1-project 
cd m1-project

# Create the folder structure
mkdir src css img

# Create main file
touch src/main.js

# Create Game class file
touch src/game.js

# Create Player class file
touch src/player.js

# Create css file
touch css/style.css

# Create index.html file
touch index.html

# Create .gitignore file
touch .gitignore
```





<br>

### Set the content of the `.gitignore`



<br>



### Initialize `git` repository localy

```bash
# Initialize local git repository
git init


# Create the GitHub repository
#
#


# Add the remote using the `git remote add ...` code provided for the new GitHub repo
git remote add origin <.git_url_to_your_repo>


# Check the newly added remote
git remote -v


# Make the initial commit
git add .
git commit -m 'Initial commit'


# Push the new commit to remote (GitHub) repository
git push origin master

```





<br>





### Initialize and setup the `eslint` for the current project

```bash
# Check if you have `npm` installed
npm -v

# Initialize npm
npm init

# Initialize eslint in the current project
npx eslint --init


# > To check syntax and find problems, and enforce code style

# What type of modules does your project use? > None of these
# Which framework does your project use? > None of these
# Does your project use TypeScript? > N
# Where does your code run? > Browser
# How would you like to define a style for your project?  > Use a popular style guide
# Which style guide do you want to follow? > Standard
# Would you like to install witn npm? > Y

```



<br>



![](https://i.imgur.com/Kk41Lfo.png)



<br>



### Install the ESLint extension in VS Code





<br>



### Setup the ESLint settings in VSCode

1. Open the VSCode Command Palette:

   **Mac:**   `CMD` + `Shift` + `P`  

   **Win/Linux:**   `Ctrl` + `Shift` + `P` 

   

2. Type and open the  ` Open Settings (UI)`

3. Type and Enable the option `Eslint Format Enable`

4. Type and Enable the option `JavaScipt Format: Enable`



![](https://i.imgur.com/sf5NhNR.png)





<br>



![](https://i.imgur.com/wOoauaS.png)

