

# Code Along - Build your portfolio page



**Resources page** is used so that students can easily copy the image links for the 3 images we will be using during the code along.

## [RESOURCES PAGE (Images)](https://codepen.io/Denzelzeldi/full/mdbBoMq)



<br>



**Finsihed Webpage** is the example of the completed webpage including CSS. In this code along on Day 1 Week 1, we will only work with HTML. CSS can be added at the end so that students can see the effect (which is the fun part :) ).

## [FINISHED WEBPAGE  (with CSS)](https://codepen.io/Denzelzeldi/full/yLBdGdE)





0

### Before start - environment setup

Install the following extensions in the VS Code:

- **Live Server**
- **HTML CSS Support** 

* **IntelliSense for CSS class names in HTML**
* **Prettier - Code formatter**





<br>



### Use CodePile for sharing the code during the code along.



<br>

1

### Create the folder structure and the files

```bash
mkdir 03-portfolio-webpage

cd 03-protfolio-webpage

mkdir styles scripts images

touch index.html styles/main.css

code .
```





2

## GIT Introduction



**What is Git ?**



Git is a distributed version-control system for tracking changes in the code during the software development. 

Git and GitHub are two different things :

- Git is a software used to track the changes coordinate work among programmers. 
- GitHub is the **Git code managemment platform** that you can use to keep copies of the code and share it easily.
- Other Git management platforms are [GitLab](https://about.gitlab.com/), [BitBucket](https://bitbucket.org/), etc. 









3

### Getting started with git

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


# Push code to the GitHub repository
git push origin master


# Check the history of all existing commits
git log

# Notice that each commit has a hash identifier
# Hash identifiers are used to move through to the history (by repointing the HEAD)
```





8

#### Add `nav` ,`main` and `footer`



```html
<body>

  <nav>
  	<h1> Your Name </h1>  
  </nav>

  <main>
      
    <header>
      <h3>Welcome</h3>
      <p> Hi! Welcome to my portfolio website!</p>
    </header>
      
    <!-- About -->
  	<section></section>
      
    <!-- Projects -->
  	<section></section>
      
    <!-- Contact -->
  	<section></section>
  </main>

  <footer></footer>
    
</body>
```







9

#### Add elements to the `<nav>` tag

```html
<nav>
    <h1>Uros C</h1>

    <ul>
        <li>
            <a href="#">Blog</a>
        </li>
        <li>
            <a href="#">Gallery</a>
        </li>
        <li>
            <a href="#">Contact</a>
        </li>
    </ul>

</nav>
```





10  

#### Add headings and color to the sections

```html
    <main>
        
        <!-- About -->
        <section style="background-color: aliceblue">
          <h1>ABOUT ME</h1>
        </section>
          
        
        <!-- Projects -->
        <section style="background-color: deepskyblue">
          <h1>MY PROJECTS</h1>
        </section>
        
        
        <!-- Contact -->
        <section style="background-color: aliceblue">
          <h1>CONTACT ME</h1>
            
          <br>
          <button>Contact Me</button>
        </section>
        
     </main>
```





11 

#### Add class and id to each `<section>` and `<button>`

```html
        <!-- About -->
        <section class="info-section" style="background-color: aliceblue">
          ...
        </section>
          

        <!-- Projects -->
        <section class="info-section" style="background-color: deepskyblue">
          ...
        </section>
          

        <!-- Contact -->
        <section class="info-section" style="background-color: aliceblue">
          ...
            
        </section>
```





12

#### Add image to the "ABOUT ME" section - [Image URL](https://garden.zendesk.com/css-components/avatars/images/ma.png)

```html
<!-- About -->
<section class="info-section" style="background-color: aliceblue">
    <h1>ABOUT ME</h1>

        <img
             width="300px"
             height="300px" 
             id="avatar-photo"
             src="C"
        >

    <p>Lorem ipsum ... </p>
</section>
```





13

#### Add images to the "PROJECTS" section

```html
<!-- Projects -->          
<section id="project-images">
    <h1>MY PROJECTS</h1>
              
    <p>Lorem ipsum ... </p>          
    <img 
         width="150px"
         height="150px"
         src="<image 1 url>"
         alt="project one screenshot"
    >
    <img 
         width="150px"
         height="150px"
         src="<image 2 url>"
         alt="project two screenshot"
    >
    <img 
         width="150px"
         height="150px"
         src="<image 1 url>"
         alt="project three screenshot"
    >
</section>
```







14

#### Create the form in the "CONTACT ME" section



##### Form outline

```
h4
p

form #contact-form
	 h2
	 label
	 input (text) Name:
	 br
	
	 label
	 input (email) Email:
	 br
	
	
	 label
	 textarea
	 br
	
	 button
	
```





```html
<div>
  
  <h4>CONTACT ME</h4>
  
  <p>Lorem ipsum ....</p>

  
  <form id="contact-form">
    <h2>CONTACT FORM</h2>

    <label>Name: </label>
    <input type="text" name="name" /><br>

    <label>Email: </label>
    <input type="email" name="email" /><br>

    <label>Message:</label><textarea name="message"></textarea>
    <br>
    
    <button>Contact Me</button>
  
  </form>

</div>
```







15

#### Create the footer

```html
<footer>
  <ul>
    <li>
      <a href="">Blog</a>
    </li>

    <li>
      <a href="">Portfolio</a>
    </li>

    <li>
      <a href="">Contact</a>
    </li>
  </ul>
</footer>
```





16

#### Add text to the paragraphs in each section

### [lorem ipsum generator](https://loremipsum.io/#generator)







17

add the `<style>` tag to the `<head>` and copy the styles from the finished example to see the CSS in action!

```html
<head>
  <style>
   ...
    	...
    
  </style>
</head>
```





### [GIT cheatsheet](https://gist.github.com/ross-u/2179208fa4378b86e7997700290e8f9a)





18

#### Commit and push all the changes we created so far

#####   

```bash
git status

git add .

git commit -m 'Add new elements to the index.html'

git push origin master
```

