function checkeven()
{
let num = document.getElementById("t").value;
console.log(num);
if (num % 2 === 0) {
    document.getElementById("ans").innerHTML="evanbe";
}
else {
    document.getElementById("ans").innerHTML="odd"
}
}

let age = 18;

if (age >= 18) {
    console.log("you can vote");
}
else {
    console.log("no");
}


let n = 10;
let message=""
if (n > 0) {
    console.log("positive");
   message="positive"
}
else if (n < 0) {
    console.log("negetive");
    message="negetive"

}
else {
    console.log("zero");
    message="zero"
}

document.getElementById("x").innerHTML=message;

let a = 7;

if (2 < 4 && 4 > 7) {
    console.log(7);
}
else {
    console.log("not seven");
}


let raining = false;

if (raining)// raining=true
{
    console.log("take umbrella");
}
else {
    console.log("go without");
}


let x = 9;
if (x != 9) {
    console.log("not 10");

}
else if (x === 7) {
    console.log(7);
}

else if (x == 8) {
    console.log(8);

}

else if (x > 20) {
    console.log("more than 20");
}else{
    console.log("else");
}