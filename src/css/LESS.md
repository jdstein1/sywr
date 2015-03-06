# Less

How to use it to write less CSS.


## About

From [lesscss.org][1]:

> Less is a CSS pre-processor, meaning that it extends the CSS language, adding features that allow variables, mixins, functions and many other techniques that allow you to make CSS that is more maintainable, themable and extendable

More info:  [Less usage][2]

## Perks

Using LessCSS grants you certain perks that plain CSS does not.  You can incorporate concepts from scripting languages in order to write less CSS (get it?) like variables, mixins, operations and functions.

Here are some examples:

### variables

Example:

```css
@nice-blue:         #5B83AD;
```

### mixins

Example:

```css
.border {
  border-bottom:    solid 2px black;
}
```

### operations

Example:

```css
color:              #888 / 4;
background-color:   @base-color + #111;
height:             100% / 2 + @filler;
```

### functions

Example:

```css
@link-color:        #428bca; // sea blue
@link-color-hover:  darken(@link-color, 10%);
```

For a complete list of perks, see:  [Less language features][3]

## Compiling

Less is a precompiler, meaning you write styles in Less and it needs to be compiled into CSS in order to be used on a live site.

### When to compile

Less can precompile dynamically, but that is resource expensive.  Reserve compiling on-the-fly for development.

Make precompiling Less a part of your build process.

More info:  [Server-Side and Command Line Usage](http://lesscss.org/usage/#command-line-usage-server-side-and-command-line-usage)

### Watch mode

While developing, you can initiate a watch that precompiles your Less files into CSS everytime a *.less file is changed and saved.

More info:  [Watch mode](http://lesscss.org/usage/#using-less-in-the-browser-watch-mode)

[1]: http://lesscss.org/
[2]: http://lesscss.org/usage
[3]: http://lesscss.org/features/
