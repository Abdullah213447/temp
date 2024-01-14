//Modules

const hasan='hasan';
var x=10; 

const sayHi = (name) =>{
    console.log(`hi ${name}`);
}

// sayHi('abdullah');
// sayHi(hasan);
// sayHi(x);

//exporting function to some other file.
module.exports=sayHi;