# Git

Enforce a clean **master branch** with **branch** policies. The code in your **master branch** should pass tests, build cleanly, and always be up to date. Your **master branch** needs these qualities so that feature **branches** created by your team start from a known good version of code.May 4, 2018



Taken out of context:   ********************

## Committing to Master[Top](https://www.zeek.org/development/howtos/process.html#toc-top)

We have a designated set of maintainers with authority to commit to `master` in all `*.bro.org`repositories; these folks are in charge of merging in topic branches, `fastpath`, and external contributions. We select them by consensus among the existing group of maintainers. Individual repositories may have further maintainers in addition to the global group.

Generally, all maintainers may merge any pull requests and `fastpath` commits. There’s no "must" however, everybody’s free to skip changes where they don’t feel sufficiently familiar with the corresponding code.

For changes authored by maintainers themselves, we generally stick to the "two people rule": maintainers do not merge their own patches, another maintainer has to do that. The exception is small straight-forward stuff, like simple bug fixes and cleanup. A good rule of thumb: if it’s a fastpath-suitable patch, direct commit into master without review is fine; if it’s a topic branch, consider filing a pull request for your fellow maintainers. However final decision is left to the discretion of the maintainer authoring the change.



********************************





## Git stages

There are three stages in git: The workspace, the staging area and the repository.For better understanding we also add the remote, which is just another repository in a remote server.

![git stages](https://camo.githubusercontent.com/b3eedc13375ea2a245b07d0950b6d70c910def1f/687474703a2f2f626c6f672e706f6472657a6f2e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031342f30392f6769742d6f7065726174696f6e732e706e67)

The **workspace** is where you modify your files, the accessible directory in which you perform file *changes*. If you make changes and you perform a `git status -s` you'll see them labeled with a capital red M. 

Once you make your *changes* you add them in a middle state called **staging area**. The staging area is a temporary state where you list the changes that are going to be added in the next commit.

Finally, when you commit your changes, these files in the staging area are going to be part of the git tree in the **repository**. In addition, and following the decentralized nature of git, we have the remote, which is yet another repository accessible under a URI (github, gitlab and bitbucket are services that let you access to repositories in their machines).



## Daily used git commands

Here you have a list of the commands I use in daily basis. The format is `git command (zsh git plugin shortcut): description`.

| Git command                                |  zsh plugin   | Description                                                  |
| ------------------------------------------ | :-----------: | ------------------------------------------------------------ |
| `git status -s`                            |     `gss`     | List the current changed files                               |
| `git log --oneline --decorate --graph`     |    `glog`     | Shows the repo tree in the cooles way possible               |
| `git checkout [branch-name]`               | `(gco [bn])`  | moving into another branch.                                  |
| `git add -p`                               |    `ga -p`    | Adds changes interactively                                   |
| `git commit -m [msg]`                      | `gcmsg [msg]` | Creates a commit with a one-line message                     |
| `git diff`                                 |     `gd`      | Show the changes in the current working directory            |
| `git fetch`                                |     `gf`      | Downlaods the remote repository into the local repository    |
| `git rebase`                               |     `grb`     | Reapply commits from the remote repo branch into the local one. |
| `git rebase -i`                            |    `grbi`     | Starts an interactive rebase session                         |
| `git push -u origin [current branch name]` |      ---      | Pushes the current branch and binds it to a remote one. Next time you can use just `git push` |
| `git stash`                                |      ---      | Saves the current unstaged changes in the ws into the stash stack for later retrieval. |
| `git stash pop`                            |    `gstp`     | Reapplies temporary changes from stash to the working directory |



## Gitflow

GitFlow is a branching and realease model for git that will help you work as a team as it aids you to scale painlessly your collaboration.

### Basics

GitFlow is based on two main branches, `master` and `develop`. 

The master branch should be protected, since no one is allowed to commit into it. The idea is that master only holds code that can be deployed into production at any moment.

The `develop` branch is the central branch for the development branch. No one should commit directly into it and all code in there should be realiable, since all developers depend on it. It's stability level is more flexible than master, though.





### Working on a feature

Every time you want to ship a new feature you should create a new **feature branch** from develop. It's good to ensure that develop is updated. Let's pretend we want to work on the 'Add ToDo' feature.

```sh
~$ git fetch --rebase develop
~$ git checkout -b `feat/add-todo`
```

That's it, from now on we can work on the feature and perform as many commits as we want. For a best practice on writing commit messages follow [Semantic Commit Messages](https://seesparkbox.com/foundry/semantic_commit_messages).

Once we finished we should merge it to develop, or even better, create a Pull Request (PR from now) in our preferred git service. In order to do this you have to push it first.

```sh
# Merging strategy
~$ gco develop
~$ git merge feat/add-todo

# PR strategy
~$ git push -u origin feat/add-todo #then creating the PR on github/gitlab
```

When creating the PR, it may happen that it can't be merged automatically due to merging conflicts. This happens because someone updated develop after you updated develop and before creating the PR. In this case we should update our feature branch with the new contents of develop and update the PR (just by pushing it again).

```sh
~$ git fetch
~$ git merge origin/develop # This will arise some conflicts that should be solved
~$ git commit # commit your solved conflicts in the merge commit
~$ git push
```

Or the same with rebase

```sh
~$ git fetch
~$ git rebase origin/develop # This will arise conflicts while reapplying commits
~$ git rebase --continue # Apply the commit with the conflicts resolved
~$ git push
```

After this process, the PR will be available to merge.

![feat](https://datasift.github.io/gitflow/GitFlowDevelopBranch.png)

### Bugfixes

When fixing some code on your project, follow the same steps as in working on a feature but name your branch with `fix/` prefix instead.

### Release

To release a new version of your app you should basically move the current state of develop into master. Depending on the size of the project team and the release strategy, that can be made with a simple merge or with a complex QA approval strategy.

In the first case you should do a merge (or PR) and tag.

```sh
~$ gco master
~$ git merge develop
~$ git tag 1.0.1
```

For a correct version tagging follow [Semantic Versioning](https://semver.org/).

If your company requires a more complex release strategy, then create a **release** branch from develop (e.g. `release/1.0.1`). That branch can be deployed into a middle stage for the QA team to do their work and inform about bugs. The development team is allowed to commit on the release branch but only for fixing bugs. This way you can work on fixing the next version while the rest of the team is still shipping features on `develop`.

Once the QA accepts a version, this branch can be merge both to develop (to update it) and to master so it can be released. Don't forget to tag master now with the current version number.

![Release branch](https://datasift.github.io/gitflow/GitFlowMasterBranch.png)

## Recipes

### Discard all current changes

🚸 noob hazard: You are going to loose all your current work if you don't know what you're doing. Proceed with caution.

`git reset --hard HEAD`

Discards all current changes (non-staged / marked in red) and places your workspace on the unchanged HEAD state.

### Fix your mistakes from the past

Usually you're focused on getting something to work and you end up committing several times without giving a fork. Don't worry, I understand we all do it sometimes.

Before pushing you have your last change to ammend your mistakes thanks to rebase.

Imagine you have this history: 

```bash
* de1eaf5 i pray to spongebob for this to work now
* d6cd1e2 fix: now working for sure
* 9bedf67 fix: now its working
* f7f3f6d fix: sign in with strange chars
* 310154e feat: sign in with basic auth
* a5f4a0d documentation: added README

```

Last 3 commits don't look really good, so it's time to get the rebase axe to squash them all!

```
~$ rebase -i 310154e
```

This is starting an interactive rebase session starting from `310154e`. This means that the first commit to reapply will be the next one: `f7f3f6d`. This is the same as writing HEAD~4 (edit last four commits).

An editor will be open with the commands for the rebase and some instructions.

```
pick de1eaf5 i pray to spongebob for this to work now
pick d6cd1e2 fix: now working for sure
pick 9bedf67 fix: now its working
pick f7f3f6d fix: sign in with strange chars
```

Modify so the final result looks like

```
squash de1eaf5 i pray to spongebob for this to work now
squash d6cd1e2 fix: now working for sure
squash 9bedf67 fix: now its working
pick f7f3f6d fix: sign in with strange chars
```

Save n quit. The git tree will look now like

```
* f7f3f6d fix: sign in with strange chars
* 310154e feat: sign in with basic auth
* a5f4a0d documentation: added README
```

