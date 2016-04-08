# Async talk - demo code

Examples and code for AsyncJS talk on Fractal.

Please note this is not intended to represent a 'best practice' way to organise your Fractal projects! This contains a number of `fractal.js` files to demo different configurations. Your projects will not likely look like this :-)

## Install

1. Install the [Fractal command line helper](https://github.com/frctl/fractal/blob/master/docs/installation.md#1-install-the-cli-helper-globally) globally (if you haven't already)
2. Download this repo
3. Install dependencies: `npm install`

## Run examples

### basic

Run: 
```
cd examples/basic
fractal
```

Simple handlebars component library.

* Default theme: `start`
* Debug theme: `start --theme @frctl/debug-theme`

### react

Run: 
```
cd examples/react
fractal
```

Server side rendering of React components

* Default theme with colour skin: `start`

### commands

Run: 
```
cd examples/commands
fractal
```

Using API plugin, plus a bespoke command.

* List commands: `help`
* API plugin: `api`
* Bespoke list command: `list components --limit 3`

### app integration

Run: 
```
cd examples/app
```

* Run the app: `node index.js`
