## SETUP

Set a name that is identifiable for credit when review version history

```sh
git config --global user.name “[firstname lastname]”
```

Set an email address that will be associated with each history marker

```sh
git config --global user.email “[valid-email]”
```

Set automatic command line coloring for Git for easy reviewing

```sh
git config --global color.ui auto
```

Initialize current directory as a git repo

```sh
git init
```

Clone remote repo

```sh
git clone [url]
```

## STAGE & SNAPSHOT

Show modified files in working directory, staged for your next commit

```sh
git status
```

Add a file as it looks now to your next commit (stage)

```sh
git add [file]
```

Unstage a file while retaining the changes in working directory

```sh
git reset [file]
```

Diff of what is changed but not staged

```sh
git diff
```

Diff of what is staged but not yet commited

```sh
git diff --staged
```

Commit your staged content as a new commit snapshot

```sh
git commit -m '[description]'
```

## BRANCH & MERGE

List your branches. a \* will appear next to the currently active branch

```sh
git branch
```

Create a new branch at the current commit

```sh
git branch [branch-name]
```

Switch to another branch and check it out into your working directory

```sh
git checkout [branch-name]
```

Merge the specified branch’s history into the current one

```sh
git merge [branch]
```

## INSPECT & COMPARE

Show all commits in the current branch’s history

```sh
git log
```

Show the commits on branchA that are not on branchB

```sh
git log branchB..branchA
```

Show the commits that changed file, even across renames

```sh
git log --follow [file]
```

Show the diff of what is in branchA that is not in branchB

```sh
git diff branchB...branchA
```

Show any object in Git in human-readable format

```sh
git show [SHA]
```

## SHARE & UPDATE

Add a git URL as an alias

```sh
git remote add [alias] [url]
```

Fetch down all the branches from that Git remote

```sh
git fetch [alias]
```

Merge a remote branch into your current branch to bring it up to date

```sh
git merge [alias]/[branch]
```

Transmit local branch commits to the remote repository branch

```sh
git push [alias]/[branch]
```

Fetch and merge any commits from the tracking remote branch

```sh
git pull
```

## TRACKING PATH CHANGES

Delete the file from project and stage the removal for commit

```sh
git rm [file]
```

Change an existing file path and stage the move

```sh
git mv [existing-path] [new-path]
```

Show all commit logs with indication of any paths that moved

```sh
git log --stat -M
```

## REWRITE HISTORY

Apply any commits of current branch ahead of specified one

```sh
git rebase [branch]
```

Clear staging area, rewrite working tree from specified commit

```sh
git reset --hard [commit]
```

## TEMPORARY COMMITS

Save modified and staged changes

```sh
git stash
```

List stack-order of stashed file changes

```sh
git stash list
```

Write working from top of stash stack

```sh
git stash pop
```

Discard the changes from top of stash stack

```sh
git stash drop
```

## CHECK LISTENING PORTS WITH NETSTAT COMMAND

```
netstat -nlp | grep :5000
```

```
lsof -n -i :5000 | grep LISTEN
```

## HOW TO CHANGE A GIT REMOTE

```
git remote set-url origin git@github.com:katherin26/portfolio-projects.git
```

```
git pull origin
git push origin main
```
