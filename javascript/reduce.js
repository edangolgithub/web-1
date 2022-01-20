let num=[1,2,3,4,5,6,7,8,9,10] //55


let s=num.reduce(function(sum,el){
    return sum+el;
})

console.log(s);