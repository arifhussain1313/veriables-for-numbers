var age =  ("I am 23 years old");
alert(age); 

var visit = 0;
if (localStorage.getItem("visit")) {
    visit = parseInt(localStorage.getItem("visit"));
}
visit++;
localStorage.setItem("visit", visit);
alert("You have visited this site " + visit + " times.");

let birthyear =  "My birth year is 2001" + "\n" + "Data type of my declared variable is number";
alert(birthyear);

const visitor = "John Doe";
const product = "T-Shirts";
let quantity = 5;
const message = '${visitor} ordered ${quantity} ${product}(s) on XYZ clothing store.';

document.write(message);