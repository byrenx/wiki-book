# Wiki-Book Setup Guide

### Setup
First, install `node-js` just follow the installing node guide below then, go to the project folder using terminal and type `npm install` to install the dependencies in `package.json`

Then, Type `$ gulp` to start the local server and access `localhost:9005` in the browser.

If `gulp` is not found as a command install it globally `npm install -g gulp`


# Setup the Project from Scratch Guide

## Needed Packages:
   1. Node
   2. Browserify
   3. React
   4. React router component
   5. Gulp


## Environment Setup:

### Installing Node (Linux ubuntu 14 - 64 bit)

In the terminal, `curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -`
for version 5 `curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -`
then, `sudo apt-get install -y nodejs`
optionally to compile and install native npm add-ons install, `sudo apt-get install -y build-essential` 

for other installation instruction just visit: [https://nodejs.org/en/download/package-manager/](https://nodejs.org/en/download/package-manager/)

### create the project folder

Go to your project folder using the terminal then type, `npm init` to create `package.json`

### Next, Install gulp

`npm install --save gulp gulp-connect gulp-open` and instal also `npm install -g gulp` to install it globally for it to be available in the command line.

Create `src` and `dist` folder, then create `gulpfile.js` file in the root folder of the project. Write content in `gulpfile.js` see sample from this project. Add or create a `index.html` file inside `src` folder then run `$ gulp` from the terminal. you should able to browse the local server you being setup in `gulpfile.js`


### Installing Browserify and reactify

Directly using npm in the terminal, `npm install --save browserify reactify vinyl-source-stream`

### Install Bootstrap, Jquery and ...

`npm install --save bootstrap jquery gulp-concat`

### Install ESlint for linting JSX

`npm install --save gulp-eslint`

### Install react, react-router and flux

`npm install --save react react-router flux`

### lodash (optional)
 `npm install --save lodash`
