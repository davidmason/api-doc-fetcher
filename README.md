# waht

Displays a documentation section from the given docs page. Currently only supports core JavaScript object documentation on MDN.

You can see this project being built in the [Coding from Scratch video series](https://www.youtube.com/playlist?list=PLQGHX1yGAOq1NTbrkhVNnLdylBf6ISik2).

## Dependencies

Requires [Node.js](http://nodejs.org/).

## Installation

`npm install -g waht`

## Usage

`waht page [section]`

 - page: docs page to use. e.g. Math.min or Math.min()
 - section (optional): which section of the page to show. Valid values: summary, syntax, desc

e.g.:

`waht Math.min() syntax` or `waht Math.min syntax`

will output:

    Syntax
    Math.min([value1[,value2, ...]])
    Parameters


      value1, value2, ...

      Numbers.
