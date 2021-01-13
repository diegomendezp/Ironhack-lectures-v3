## GIT Introduction





<br>



### [git website](https://git-scm.com/)

### [Github website](https://github.com/)



<br>



**What is Git ?**



Git is a distributed version-control system for tracking changes in the code during the software development. 



Git and GitHub are two different things :

- Git is a software used to track the changes coordinate work among programmers. 
- GitHub is the **Git code managemment platform** that you can use to keep copies of the code and share it easily.
- Other Git management platforms are [GitLab](https://about.gitlab.com/), [BitBucket](https://bitbucket.org/), etc. 









3

### Getting started with git (code along)

##### Create a example project file structure

```bash
mkdir git-intro

cd git-intro

touch index.html style.css

code .
```







**Check if** you have **`git`** **installed**:

```bash
git --version

# git version 2.23.0
```



**If not installed**, first install Git following [this link](https://www.atlassian.com/git/tutorials/install-git).





##### 

4

In the project folder on the root level (directory with our `index.html`) initialize git.

The **`git init`** command creates a new **Git** repository. It can be used to convert an existing, unversioned project to a **Git** repository.



##### Initialize git

```bash
# Initialize git repository in the current project
git init

# List all the files in the directory, this will show you .git folder
ls -a
```

##### 

5

##### Create a GitHub repository, and copy the **add origin** command:

```bash
# First create the GitHub repository on the github.com
#  ...
#  ...

# Create a connection between local and online repository
git remote add origin <github repo url>

# List the repositories connected to our local code
# This will show the repo that we just connected to
git remote -v
```



6

##### Update the `index.html` file: 

##### Create the initial HTML skeleton  (<u>use Emmet</u> `!` + `Tab`) :

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Your Name</title>
</head>
<body>
  
</body>
</html>
```





7

##### Add and commit the changes:

```bash
# Check the status of the files in the project and the staging area.
git status

# Add all unstaged (red) files to the stagging area (prepare to commit)
# git add <filename>
git add .

# Check the status of the files and the staging area (stagged files are now green).
git status

# Create a commit (snapshot)
git commit -m 'Initial commit'

# Stagging area is now clear
git status

# Check the commit log (log including all commits)
git log

# Push code to the GitHub repository
git push origin master


# Notice that each commit has a hash identifier
# Hash identifiers are used to move through to the history (by repointing the HEAD)
```





<br>



### [GIT cheatsheet](https://gist.github.com/ross-u/2179208fa4378b86e7997700290e8f9a)





18

#### In short (basic steps)

#####   

```bash
# Intitialize git in your project (only if .git doesn't exist)
git init

# Create commit
git status

git add .

git commit -m 'Meaningful commit message'

git push origin master
```

