let a=1; //number          int float double long 
let name1="ram"// string

let fn= function add(){
    console.log(3+6);
} //function type

let nums=[1,2,3,4,5,6,7]// array

let name2={
    firstname:"sabin",
    lastname:"sharama",
    fullname: function()
    {
        return this.firstname+ this.lastname;
    }
}
//document.getElementById("x").innerHTML="First Name :"+name2.firstname+ ", "+ "Last Name :"+name2.lastname
//document.getElementById("x").innerHTML=`First Name : ${name2.firstname}  ,   Last Name : ${name2.lastname}`

//name2.firstname
//name2[firstname]


let  address={};
address.streetaddress="abc Street";
address.city="Pokhara";
address.Country="Nepal"
//console.log(address);

let x={};
let y=[];



let xx=[1,2,3,4,5]

xx.forEach(function(i) {
   // console.log(i);
});

const person = {fname:"John", lname:"Doe", age:25};


for (let x in person) {
 // console.log(x);
  console.log(`${x}=${person[x]}`);
}