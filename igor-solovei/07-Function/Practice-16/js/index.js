
function getName() {
   arguments = prompt("What is your name?");
   return arguments;
}
//console.log(getName());


function sayHello() {
   name = getName();
   arguments = `"Hello, ${name}!"`;

   return arguments;
}


console.log(sayHello());




