//console.log('a');

function greet($greeting='hello js'){
    console.log($greeting);
}

greet();

let args1 = [1,2,3];
let args2 = [4,5,6];

function test(){
    console.log(args1+','+args2);
}


test(...args1,...args2);