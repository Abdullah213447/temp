//Modules ES (Encapsulated Code)

//importing object from tut04.js
const names = require('./tut04');
console.log(names);

//importing function from tut03.js
const sayHi= require('./tut03');
sayHi(names.abdullah);

//importing array from tut06.js
const data=require('./tut06');
console.log(data);

//importing function from tut07.js
require('./tut07');

