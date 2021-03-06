#GIT NOTES

# git log
Displays a short log description

* `git log --oneline`

Show a graph log
* `git --no-pager log --graph

### git log cheatsheet
https://devhints.io/git-log

# git config
* `git config --list`
* `git config --global --list

# git cat-file
Provide content or type and size information for respository objects

* `-t type`
* `-p pretty print`

Example

```
tree ./git/objects
git cat-file -t 12wer
```

# git tag


# git mv
git move file and keep tracking info

# git clean
git clean will clear working area by deleting untracked files
* -f to do the deletion
* -d will clean directories
* --dry-run will display what will be removed 

# git checkout
Reset a file using checkout 
`git checkout -- fileName.txt`


# git reset
performs differnt actions depending on the arguments.

### git reset <commit> cheatsheet
1. Move Head and current branch
2. Reset the staging area
3. Reset the working area


--soft = (1)
--mixed = (1) & (2) (default)
--hard = (1) & (2) & (3)


Resets the HEAD of the file back one
`git reset HEAD fileName.txt`



# git revert 
* git revery creates a new commit that introduces the opposite changes from the specified commit.
* The original commit stays in the repository
* Tip:
	- Use revert if you're undoing a commit that has already been shared.
	- Revert does not change hisory





## git merge --no-ff (no fast forward)
* to retain the history of a merge commit, even if there are no changes to the base branch.
* This will force a merge commit, even when one isn't necessary.

```
git checkout master
git merge mew_feature --no-ff
```


## GIT RERERE - REUSE RECORDED RESOLUTION (try this with rebase)
* git saves how you resolved a conflict
* next conflict: reuse the same resolution
* useful for:
	* long lived feature branch (like a refactor)
	* rebasing

Turn it on:
 - git config rerere.enabled true
 - use --global flag to enable for all projects




# git amend
Amend is a quick and easy shortcut that lets you make changes to the previous commit

`git commit add .`
`git commit --amend`



