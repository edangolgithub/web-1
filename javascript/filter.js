let animals = [
    'cat', 'dog', 'elephant', 'bee', 'ant','antelope','alligator'
];

// 1
let a=animals.filter((name)=>name.startsWith('a'));
//console.log(a);
//------------------------------------

//2
let aa= animals.filter(startswitha);

function startswitha(name)
{
    return name.startsWith('a')
}

//console.log(aa);
//----------------------------------------

//3

let aaa=animals.filter(function(name){
    return name.startsWith('a')
})

//console.log(aaa);
//--------------------------------



animals.forEach(function(x){
console.log(x);
}
)

animals.forEach(x=>console.log(x))
