//MODULE
//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only bare minimun)
const names = require('./4-names');
const sayHiFunction = require('./5-utils');
require('./7MIND-GRANADE');
sayHiFunction("DOE")
sayHiFunction(names.peter)
sayHiFunction(names.john)