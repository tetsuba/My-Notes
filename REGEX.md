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



# character class
`[...]`

Any characters inside the square brackets will match.
For example, to match a vowel character: `[aeiou]`.

```
$ echo 'beep and boop' | sed 's/b[aeiou]\+p/BXXP/g'
BXXP and BXXP
```


# negated character class
`[^...]`
Put a `^` after the opening square bracket in a character class to negate it.
For example, to match a non-vowel character: `[^aeiou]`

```
$ echo 'beep boop' | sed 's/[^aeiou]/Z/g'
ZeeZZZooZ

$ echo 'cool "beans" zzzz' | sed -E 's/"([^"]+)"/\1/g'
cool XXX zzzz
```


# characte class sequences
Regex engines provided many pre-defined character class sequences:

* `\w` - word character: `[A-Za-z0-9_]`
* `\W` - non-word character: `[^A-Za-z0-9_]`
* `\s` - whitespace: `[ \t\r\n\f]`
* `\s` - whitespace: `[^ \t\r\n\f]`
* `\d` - digit: [0-9]`
* `\d` - non-digit: [^0-9]`



# achors
* `^` - anchor at the begining
* `$` - anchor to the end

 
# groups
(a|b) - match a or b

* `()` capture groups
* `(?:)` non capture group

```
echo beep boop | sed -E 's/b(ee|oo)p/XXX/g'
XXX XXX 
```


 
