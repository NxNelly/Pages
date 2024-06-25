# Code

### 17.06.24
## Git


Source control system

	- Handles small and bug projects
	- Branching and merging
	racking changes in the source code, enabling multiple developers to work together on non-linear development
	
	
## Node Js

	- allows developers to build server-side applications 
	- High performance
	- JavaScript


## Typescript Compiler

Compiles projects to javascriptt

	- makes it easier to create large and complex projects
	- add type safety (prevents errors)

## Visual Studio Code

	- Environment
	- Text Editor
	- Runs java script

## ESLint

Checks code for common problems (syntax errors, formatting issues, code style violations, and potential bugs)

## Git Graph

Pictorial representation of git
 helpful to developer teams to share their Git branching strategies


## Check for correct installation and version:
	- Open console
	- Type git --version. The result should be something like git version 2.34.1.
	- Type node --version. The result should be something like v20.14.0.
	- Type tsc --version. The result should be something like Version 4.5.4.
![image](https://github.com/NxNelly/Code1/assets/173050947/43b45af5-b0b7-40d0-941b-5af35833c109)



## Repositories: 
Code1 (Notes)
Caffeine ++ (team)

## Markdown:

Create markdown page:

	- Codename.md (automatically creates markdown)
 ### Syntax

__bold text__

_cursive_

___bold and cursive___

tiefgestellt <sub>lalala

hochgestellt <sup>lalala


## Other Git Things

tracked files:

- Files tracked by Git are aware of the changes or commits 
- you can revert to previous versions of the file
- on the list of tracked files

untracked files:

- does not keep history of commits

how to:

git update-index command - [git update-index --skip-worktree < file>]

undo - [git update-index --no-skip-worktree < file>]

Removing all untracked files:

Steps to delete untracked Git files
- Run git clean -n to see a dry run.
- Run git clean -f to force untracked file deletion.
- Use git clean -f -d to remove untracked directories.
- Use git clean -f -x to remove untracked . gitignore files.
- Add the -i switch to do an interactive git clean.

## merge, rebase and squash

__merge:__ putting a forked history back together again

independent lines of development - integrate them into a single branch

preserves history

__rebase:__ changes the base of the developer's branch from one commit to another

rewrites history - streamlining complex history

dont use with teammates
different parent notes

__spuash:__ clean up and simplify your commit history

before sharing your work with team

adding commit chandes onto Parent commit

## L01.5
CLI (Command Line Interface)

CVS (Concurrent Versioning System)

### 18.06.24

## HTML
_(Hypertext Markup Language)_
(L02.1)

- markup tells a web browser how to display text, images and other forms of multimedia on a webpage

Syntax:

- structure of elements 

Semantics:

- information about the actual data structure behind the information

- example, this means using heading tags instead of just changing the size

first Browser [CERN](https://worldwideweb.cern.ch/)

(L02.2)
 
## create HTML file

 correct structure:
 - !
 - [Enter]
 ```javascript
 <!DOCTYPE html> //Tells browser this is a html Document
<html lang="en"> // Everything inside this tag uses html
<head> // Information about the website
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body> // main content on the Website
    
</body>
</html>
```
(L02.3)

![Screenshot (3)](https://github.com/NxNelly/Code1/assets/173050947/92267a97-985b-4624-8da6-e96840fd3245)

(L02.4)
## Tags 
Defines different type of content on a Webbrowser, using angle brackets (< >)

[List of Tags](https://www.tutorialstonight.com/html-tags-list-with-examples?utm_content=cmp-true)

- Basic tags (<!DOCTYPE>, html ...)
- Formatting tags (b, strong, i...)
- Image tags (img, figure...)
- Link tags (a, link, nav )
- List tags (ol, ul, li...)
- Form and input tags ( form, input, label...)
- Table tags (table, tread, tbody...)
- Media tags (audio, video, track, source )
- Meta tags (non visible information - meta, link)
- style and programming tags (style, programming)
- general tags (div, span, header ...)

20.06.24

## Javascript

Javascript is the most used programming language

Link Javascript to html
inside html (head):
 ```
<script src="FirstCode.js"></script>

```
## Typescript
typescript is more structured but mostly similar to Typescript

- to activate typescript

open CMD Terminal - rightclick on folder integrated terminal
	
 type: tsc --init

- create .ts file

- Ctr+Shift+B (Run Build Task)
- tsc: build
- tsc: watch

  _now it creates a js file that uses the typescript code_
  
- to check if working
  ```
  console.log("Hello World from Typescript, compiler is working");
  ```

### Difference JavaScript and TypeScript
- Typescript is a Object-oriented language
- Typescript has a static typing feature
  _(Variables are bound to one data type and cant be changed during execution, promotes type safety)_
- Typescript supports interfaces
- JavaScript is easier to learn

__TypeScript makes it easier to write accurate code more quickly and catch bugs prior to runtime__

## [Operators](https://www.tutorialspoint.com/typescript/typescript_operators.htm)

__7 + 5 = 12__
7, 5, and 12 are __operands__, while + and = are __operators__

- Arithmetic Operators (+, -, *, / ...)
- Relational Operators (elationship between two entities. Relational operators return a Boolean value - <, >, <=, >= ...)
- Logical Operators ( &&(And), ||(OR), !(NOT) - (A > 10 || B >10) , !(A >10 ))
- Bitwise Operators (Uses binary, performs operator on each bit - &, |, ^...)
  
  E.g
  
A=5 B=3

A=000000110 B=00000011

(A&B) is 00000010 is __2__

- Assignment Operators (=, +=, -=... e.g. : C + = A equivalent to C = C + A)

(L04.4)
24.06.24

## Arrays
- Komplexe Datentypen - Sammlung an Informationen 
- homogen - gleiche Datentypen
- können primitive und komplexe Datentyben beinhalten (verschachtelung)

### In JS:
- "[]" oder "new Array()"
- in Klammern Liste von Elementen mit Komma getrennt
  e.g.: let a = [7, true, "Hallo"]
- Information wird abgefragt mit Parameter [index] (index = zahl startet bei 0)
  e.g.: a[1]

###  Assoziatives Array:
- verknüpfung mit Schlüsseln
- let s = {"zahl": 7, "wahr": true, text: "Hallo"}
- Ausgabe: Parameter.Schlüssel
- e.g.: s.zahl

25.06.24
DomTest, loops,

Appendix:
https://jirkadelloro.github.io/EIA2-Inverted/X01_Appendix/
