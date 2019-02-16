// Two slashes start single-line comments

var myName;  // declaring a variable. This is a variable declared outside of a function and is therefore a GLOBAL variable

myName = "Julie";  //"Julie" is a string

console.log(myName);

//This is a function to reverse the characters in myName
function reverseName(name){ //Takes in a name as a parameter
    return name.split("").reverse().join(""); //return means output. Here we use some built-in JS methods to take the string myName, split it into individual characters and make them an array, reverse the items in the array, and then join them all back together into a string again.  
}

var backwardsName = reverseName(myName); //creating a variable to store the reversed version of myName called backwardsName. Then, invoking the function, and passing in myName as the parameter.

console.log(backwardsName); //check this out in your console.

document.getElementById("regularname").innerHTML = myName;
document.getElementById("backwardsname").innerHTML = backwardsName;