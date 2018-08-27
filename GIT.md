#GIT NOTES

## git log
Displays a short log description

* `git log --oneline`

Show a graph log
* `git --no-pager log --graph

## git config
* `git config --list`
* `git config --global --list

## git cat-file
Provide content or type and size information for respository objects

* `-t type`
* `-p pretty print`

Example

```
tree ./git/objects
git cat-file -t 12wer
```

## git tag


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

