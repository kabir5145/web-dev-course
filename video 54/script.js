alert("Hello world");

console.log("Code is running...");

var a = prompt("Enter your number");
console.log("The number you entered is: " + a);

var isTrue = confirm("Do you want to proceed?");

if (isTrue) {
    console.log("User chose to proceed.");
} else {
    console.log("User canceled the operation.");
}

document.title = "New Title Set by script.js"

// document.body.style.backgroundColor = "red"