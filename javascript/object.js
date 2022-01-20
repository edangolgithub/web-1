function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");


console.log(myFather);



let x= [1,2,3,4,5]

for(i=0;i<5;i++)
{
    console.log(x[i]);
}

x.forEach(function(i){
    console.log(i);
})

for(let i of x)
{
    console.log(i);
}