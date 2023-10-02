//1) Hello World

// let x = "Hello world";
// console.log(x);

//alert("Hello world");

//prompt("Hello World");

// Note(async can work with read the js file and parallel execute the html file and defer can work with completly read the html file and after that execute the js file)

//2)Statement and Comment
/* let krish = 5
alert(krish);
 */

//3)Javascript variable

//variable,let,const

/* var krish = 15;
let x = "krish" +" "+ 4206
alert(x); */

//4)Javascript operator

/* l.let isLogged = 1; 

if(isLogged == 0){
    document.write("Login")
}else{
    document.write("Logout")
}; */

/* 2.let isLogged = 1;

let x = isLogged == 0 ? "Login" : "Logout";

document.write(x); */

/* let x = ""; //undifined
console.log(x)
 */


//SWITCH IN JAVASCRIPT

//Example:

/* A) BY USING IF-ELSE LOOP

 If Input = 1, "y" , "yes" output = continue...
If Input = 0, "n" , "no" output = continue... 

let input = 1;

if ( input === 1) {
    document.write("Krishnat Mahajan...")
}else if (input === "y") {
    document.write("Krishnat Mahajan...")
} else if (input === "yes") {
    document.write("Krishnat Mahajan...")
}else if (input === 0) {
    document.write("Pradip Jadhav...")
}else if (input === "n") {
    document.write("Pradip Jadhav...")
}else if (input === "no") {
    document.write("Pradip Jadhav...")
} else{
    document.write("Bhosadike...")
}; */



//B) BY USING SWITCH STATEMENT

 //If Input = 1, "y" , "yes" output = continue...
//If Input = 0, "n" , "no" output = continue...

//=== comparision (in switch statement comparision is not mandetory bcz already it work)

//input ="n";

/* switch(input){
case 1: //input === 1
    document.write("Krishnat Mahajan...");
    break;
case "y"://input === "y"
    document.write("Krishnat Mahajan...");
    break;
case "yes": //input === "yes"
    document.write("Krishnat Mahajan...");
    break;
case 0: //input === 0
    document.write("Pradip Jadhav...");
    break;
case "n": //input === "n"
    document.write("Pradip Jadhav...");
    break;
case "no": //input === "no"
    document.write("Pradip Jadhav...");
    break;
default :
    document.write("Bhosadike..."); 
} */

//OR

/* switch(input){
    case 1: //input === 1
    case "y"://input === "y"
    case "yes": //input === "yes"
        document.write("Krishnat Mahajan...");
        break;
    case 0: //input === 0
    case "n": //input === "n"
    case "no": //input === "no"
        document.write("Pradip Jadhav...");
        break;
    default :
        document.write("Bhosadike..."); 
} */


//LOOP ---- IMPORTANT TOPIC

//1.WHILE LOOP

/* In a while loop, the condition is evaluated before each iteration. If the condition is true, the code block is executed. Afterward, the condition is checked again, and if it remains true, the loop continues.
The while loop may not execute its code block at all if the initial condition is false. */

//example-1

//let counter = 1;
/* while(counter <=10 ){
 document.write("Pradip Darlos...");
 counter++;
}; 

//example-2

/* let counter = 1;
let sum = 0;
while(counter <= 100 ){
    if(counter % 2 == 0){
        sum = sum + counter;
    }
    counter++;
};
document.write(sum); */

//2.DO WHILE

/* In a do-while loop, the code block is executed first, and then the condition is evaluated. If the condition is true, the loop continues, and the process repeats.
The do-while loop guarantees that the code block is executed at least once, regardless of the condition's initial value. */

/* let counter = 1; 
do{
    document.write("Pradip Darlos...");
    counter++; 
}
while(counter <=10 ){
 
};  */


//3.FOR LOOP

/* A for loop provides a compact way to initialize a variable, specify a condition, and define an iteration statement all in one line.
The initialization typically sets the loop variable, the condition is evaluated before each iteration, and the iteration statement updates the loop variable.
The for loop is especially useful when you know the number of iterations in advance or when you need to iterate over a sequence. */

/* let counter = 1;
 while(counter <=10 ){
 document.write("Pradip Darlos...");
 counter++;
};
 */

// for(let counter = 1; counter <=10; counter++){
//     document.write("Pradip Darlos...")
// };

//BREAK,CONTINUE,NESTED LOOP.

/* for(let counter=1; counter <= 10; counter++){
    if(counter == 5){
         break;
    } 
    document.write(counter);
    document.write("<br>");
} */

//let x = "krishnat Mahajan"

//prompt("Krishnat Mahajan");


//IMPORTANT TOPIC

//FUNCTION

/* function mulTable(num){
    for(i=1 ;i <= 10; i++){
        document.write(`2*${i} = ${2*i}`)
        document.write("<br>")
    }
};

mulTable();

document.write("Krishnat Mahajan <br>");

mulTable(); 
 */


//PARAMETER AND ARGUMENTS

/* Parameters: Parameters are variables that are declared in the function or method definition. They act as placeholders for the values that will be passed into the function when it is called. Parameters define the type and name of the expected values. They serve as a blueprint for the function to know what kind of data to expect and how to use it. Parameters are defined in the function or method signature.

Arguments: Arguments, on the other hand, are the actual values that are passed to a function or method when it is called. They correspond to the parameters defined in the function or method signature. When a function is invoked, the values provided as arguments are assigned to the corresponding parameters, allowing the function to work with specific data. Arguments are the concrete values passed into the function during its execution. */

/* function mulTable(num){
    for(i=1 ;i <= 10; i++){
        document.write(`${num}*${i} = ${num*i}`)
        document.write("<br>")
    }
};

mulTable(2);

document.write("Krishnat Mahajan <br>");

mulTable(12);  */

//note (num) -- Parameter
    //(2 & 12)-- Argument

//Multiparameter Added
/* function add(num1,num2){
    document.write(num1 + num2);
};

add(10,12); */

//The arguments object.

/* The "arguments" object is a special JavaScript object that is available inside a function and contains information about the arguments passed to that function. It provides a way to access and manipulate the values of the function's parameters. */

/* function add(){
    console.log(arguments);
};

add(2,3);
add(2,3,4);
add(5,6,7,8); */


/* function add(){
    if(arguments.length == 0){
        document.write("Bhosadike ye to khali hain")
    }else{
        let sum = 0;
        for(let i = 0; i< arguments.length; i++){
            sum = sum + arguments[i];
        }
        console.log(sum);
    }
}

add(5,7,8); */

//RETURN IN FUNCTION

// In summary, the return statement in a function is used to specify the value that the function should produce or output. It allows you to encapsulate functionality, provide results, exit early, enable composition, and handle errors within your code.

/* function add(a,b){
    let d =["krish","Pradip"];
    return d;
};

let c = add(5,6);

document.write(c); */

//ANONOMOUSE FUNCTION (Jis function ko koi naam nahi usse anonomouse function kehate hain)

/* Overall, anonymous functions provide flexibility, encapsulation, and convenience in various programming scenarios. They are particularly useful for callback functions, immediately invoked function expressions, higher-order functions, event handling, and closures.
 */

/* let show = function () {
    console.log("Hello World!");
};

show();
 */

/* function show(){
    console.log("Hello World!");
}; 
//set-timeout
 
setTimeout(function show(){
    console.log("Hello World!");
},3000); */

//IMMIDIATLY INVOLKED FUNCTION

/* Immediately Invoked Function Expressions (IIFE) are anonymous functions that are executed immediately after they are defined. They are typically used to create a private scope, prevent variable name clashes, and execute code without polluting the global namespace. */

//let string = "Hey!Krish" ---Global variable
/* (function show(){
    let string = "Hey!Krish"  --Local Variable
    console.log(string);
    alert(string);
})();  */


//IMPORTANT TOPIC
//OBJECT IN JAVASCRIPT AND PROPERTIES IN OBJECT
/* Objects in JavaScript can be used for a variety of purposes, including:

Modeling real-world entities (e.g., a user, a car, a book)
Organizing data structures (e.g., arrays, linked lists, trees)
Defining custom data types (e.g., classes, prototypes)
Implementing modules and namespaces
Interacting with APIs and manipulating JSON data
Objects play a crucial role in JavaScript and are an essential part of the language's expressive power and flexibility.
 */

//OBJECT
/* let person = {
    firstName:"Krishnat",
    lastName:"Mahajan",
    Age : 25
};

console.log(person.lastName); */

//METHODS IN JAVASCRIPT

/* In JavaScript, a method is a function that is associated with an object or a class. It allows objects to perform actions or provide functionality. Methods are defined within the object or class definition and can be called or invoked to perform a specific task. */

/* Methods can be accessed and called using the dot notation (objectName.methodName() or className.methodName()), and they can also access and modify the object's properties using the this keyword. */