## What is this

This repo contains several helpful tools for using noweb literate programming with PHP.  At present there are two components:

* A node.js tool that watches specified noweb files and performs tangle on them ("compiling" them into usable code) when they are saved.
* A slight alteration to noweb.php by Henri Bergius to allow it to run in < PHP 5.3 (only tested in 5.2)
* A language bundle file for TextMate on the Macintosh that will syntax highlight PHP code in TextMate.
* A language plugin file for Gedit.

## noweb.php

A port of noweb.php from [Henri Bergius](https://github.com/bergie) so that it will work in PHP 5.2.  This is a somewhat ugly hack/patch which relies on overuse of static to get around PHP5.2's limitations regarding closures (specifically allowing functions to close over the current object).  Under the lGPL license per original copyright/licensing.    

## noweb_php.lang

TextMate language syntax so that PHP blocks will be appropriately highlighted.

## php-noweb.lang

gedit language plugin so that PHP blocks will be appropriately highlighted.

## noweb_watch.js

### Requirements

Requires [noweb.php](https://github.com/bergie/noweb.php)
and [node.js](nodejs.org)

### Installation

Install noweb.php, add it to your path (e.g. ln -s noweb.php /usr/local/bin/noweb.php).  
Install node.js.

### Usage

Pass the filenames to watch as arguments:

node noweb_watch.js filename ...

## Todo

* Add Eclipse syntax colouring plugin
* Loads more stuff to do for the watcher