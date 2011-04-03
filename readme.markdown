## What is this

This repo contains several helpful tools for using noweb literate programming with PHP.  At present there are two components:

* A node.js tool that watches specified noweb files and performs tangle on them ("compiling" them into usable code) when they are saved.
* A language bundle file for TextMate on the Macintosh that will syntax highlight PHP code in TextMate.

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


