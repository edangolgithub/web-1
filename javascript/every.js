function greaterthan5(x)
{
    return x>=5
}

const  nums=[5,6,7,8,9]

const n=nums.every(greaterthan5)
console.log(n);


const names=["ram","sh","hi221","kr"];
function lengthmore4(name)
{
    return name.length>4
}

const truth=names.every(function(name){ return name.length>=4});
console.log(truth);

const truth1=names.every((name)=>name.length>=4);
console.log(truth1);

const truth2=names.every(lengthmore4);
console.log(truth2);

const some= names.some(x=>x.length>4)

console.log(some);