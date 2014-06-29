# waht

Displays a documentation section from the given docs page. Currently only supports core JavaScript object documentation on MDN.

## Dependencies

Requires [Node.js](http://nodejs.org/).

## Installation

`npm install -g waht`

## Usage

`waht page [section]`

 - page: docs page to use. e.g. Math.min or Math.min()
 - section (optional): which section of the page to show. Valid values: summary, syntax, desc

e.g.:

`waht Math.min() syntax`

outputs

    Syntax
    Math.min([value1[,value2, ...]])
    Parameters


      value1, value2, ...

      Numbers.
