# Vim

# files
 - `:ls` list files opened
 - `:e fileName.txt` open file
 - `:b fn.txT` switch files
 - `:bp` previous file
 - `:bn` next file

# copy
v: to select what to copy
y: to copy selected text or to copy the current line

paste -  p or P

# Visual Select
Press 'v' to go into visual select mode.

Once selected a block, you can press:
 - y: "yank" the text into the paste buffer
 - x or d: delete the selected test
 - '>>': indent the text right by shiftwidth
 - '<<': indent the text left by shiftwidth

# Moving around
 - ^ or 0: move to the start of the current line
 - $: move to the end of the current line
 - gg: jump to the beggining of the file
 - G: jump to the end of the file

# delete
 - x: delete the character under the cursor
 - dd: delete the current line
 - d$ or D: delete from the cursor to the end of the current line
 - d0 or d^: delete from the cursor to the start of the current line
 - dG: delete from the current position to the end of the file
 - dgg: delete from the current position to the start of the file
 - dj: delete the current line and the line below
 - dk: delete the current line and the line above
 - 2dd, 3dd, etc: delete the next N lines


# Search
/ - forward slash to start the search query from the top
? - question mark to start a search query form the end

n -  jump to the next match
N - jump to the previous match

combining search with delete
* d/PATTERN - delete to the next match of pattern
* d?PATTERN -  delete to the previous of pattern
* dn - delete to the next already matched pattern
* dN - delete to the previous already matched patter

search and replace
:s/PATTEREN/REPLACEMENT/FLAGS

:s/cat/dog/
:s/cat/dog/g    -- g for global
:s/cat/dog/i

search every line :%s/cat/dog


# Insert Mode
 - o: go into insert mode, inserting a new line below the current line
 - O: go into insert mode, inserting a new line above the current line
 - a: go into insert mode from one character to the right
 - A: go into insert mode at the end of the current line
