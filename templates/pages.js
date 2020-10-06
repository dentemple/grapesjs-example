/*
    This file provides a shortcut for registering new pages here instead of declaring
        them directly to the webpack file.

    The properties declared here are passed directly to html-webpack-plugin:
    https://github.com/jantimon/html-webpack-plugin
*/

const path = require('path')

const pages = [
  {
    title: 'GrapesJS Project',
    template: path.resolve(__dirname, 'index.html')
  }
]

module.exports = pages
