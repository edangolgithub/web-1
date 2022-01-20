// Create a Set
const letters = new Set(["a","b","c"]);
const nums=new Set([1,2,1,3,4,4,4,4,4,4,4,4,5]);
const numarray= new Array(1,2,3,4,4,4,4,4,4,5);
numarray.forEach(function(num)
 {
  //  console.log(num);
});


for(const x of numarray)
{
    console.log(x);
}