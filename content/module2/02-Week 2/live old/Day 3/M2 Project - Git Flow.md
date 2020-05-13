# M2 Project - Git Flow





### Initial setup:



- Create a project repository, and include the generic `.gitignore` file for NodeJS.
- Create an additional `develop` branch (Your project will have 2 main branches `master` and `develop`)
- Add the second team member as the contributor in your GitHub. 
- `master` branch will be used only for deployment.
- `develop` branch will be used for working. **When working on a feature create a new branch from develop.** 



- Tips to avoid merge conflicts:

  - Work on separate files, and communicate with your partner.
  - Initial setup of the back-end should be preferably done in pair, taking turns while coding and preferably coding on one laptop.
  - Do a checkpoints with the partner and communicate things that you will be doing and parts of code that you will be working on.
  - Make smaller commits, and write descriptive message:
    - Max. 50 characters (over 50 will wrap in the message body) ) 
    -  Use imperative e.g. : 
      - "Add session middleware to `app.js` "
      -  "Add `UserModel.js`"
      - "Bugfix route `'/login'` in `routes/auth.js`  "

  

  <br>

  

  ### Working with branches:

  

  ```bash
  # Create a new branch and move to that branch
  git checkout -b <branch-name>
  
  
  
  # Move to a branch
  git checkout <branch-name>
  
  
  
  # List all the available branches
  git branch
  
  
  
  # Delete a branch 
  git branch -D <name-of-the-branch-to-delete>
  
  
  
  # Merge code from another branch into a current branch
  git merge <branch-from-which-to-merge>
  ```

  

<br>



### Additional Resources

#### [Semantic commit messages - Qucik Summary](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#summary)

#### [Git & GiHub: Saved Changes (2min video)](https://youtu.be/Vb0Ghkkc2hk)

#### [Git & GitHub: Git Pull and Git Push (1min video)](https://youtu.be/-uQHV9GOA0w)