// Once we install node we also install npm and because of that we
// have access to npm global command

// npm - global command, comes with node
// npm --version

// location dependency - use it only in this project
// npm i <packagename>

// global dependency - use it to any project
// npm install -g <packagename>
// sudo install -g <packagename> (mac)

// package.josn - manifest files (store important infor about project)
// manual approach (create package.json in the rootm create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);