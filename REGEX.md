# REGEX Notes
Is a pattern matching language

## Flags
- i: case insensitive
- g: match all occurences
- m: treat string as multiple lines
- s: treat string as a single line

/PATTERN/FLAG

## --
* `.` matches any character
* `?` zero or one time
* `*` zero or more times
* `+` one or more times

### EXAMPLE
```
$ echo 'beep' | sed 's/b..p/BEEP/g'
BEEP

$ echo 'dog and doge' | sed 's/doge\?/DOGE/g'
DOGE and DOGE

$ echo 'beep bp beeep' | sed 's/be*p/BEEP/g'
BEEP BEEP BEEP

$ echo 'beep bp beeeep' | sed 's/be\+p/BEEP/g'
BEEP bp BEEP
```



* `[]` character class
* `^` anchor at the begining
* `$` anchor at the end

* `(a|b)` match a or b

* `()` capture a group
* `(?:)` non capture group

* `/d` digit `[0,9]`
* `/w` word `[A-Za-z0-9]`
* `/s` whitespace `[/t/r/n/f]`


 
