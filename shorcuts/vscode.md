## Key Mapping

Cmd = Ctrl

Option = Alt

## Open File or Path From CLI

In VS code, open command palette (**Cmd+Shift+P**) and write

`shell command: Install 'code' command in PATH`

Then from any command line use the following commands to open files or paths

`code filename`

`code path`

## Open Files Faster

Open command palette (**Cmd+Shift+P**), remove '>' if it is present and then write file name

## Run VS Code Commands

Open command palette (**Cmd+Shift+P**), add '>' if it is not present and then write command name

## Look for Symbols(Classes, Functions, Methods, Variable Names) in a File

Open command palette (**Cmd+Shift+P**), remove '>' if it is present, then add '@' and write the symbol name

You can also do the same by using **Cmd+Shift+**., this will let you navigate thru all symbols in a file

## Look for Symbols(Classes, Functions, Methods, Variable Names) in Entire Project

Open command palette (**Cmd+Shift+P**), remove '>' if it is present, then add '#' and write the symbol name

## Go to Specific Line in File

**Ctrl+G**, the write line number

## Move Cursor Word by Word

**Alt + Arrow** (Ctrl + Arrow)

## Highlight Selected Text Multiple Times for Multiline Editing

First highlight text using shift+arrow, then **Cmd+D** as many times as needed

## Set Multiple Cursors

Alt + Click

## Move Line

**Alt+ArrowUp** or **Alt+ArrowDown**

## Copy Line

**Alt+Shift+ArowUp** or **Alt+Shift+ArowDown**

## Highlight Line By Line

**Cmd+L**

## Comment Selection

**Cmd+/**

## Open Terminal Inside VS Code

**Ctrl+`**

## Clear Terminal

**Cmd+K**

## Create Custom Snippet

open command palette (**Cmd+Shift+P**), add '>' if it is not present and then write

`Configure User Snippet`

Then you can create global snippet(Available through all projects) or project snippets, you can also create snippet by programming language.

Once you select the type of snippet, you just need to add an entry to the JSON file:

```
{
    	"Print to console": {
	 	"prefix": "log",
	 	"body": [
	 		"console.log('$1');",
	 		"$2"
	 	],
	 	"description": "Log output to console"
	 }
}
```

To implement snippet, just type the prefix and hit enter

## Safely Rename Symbols(Classes, Methods, Functions)

Right click on symbol and select 'Find All References'
