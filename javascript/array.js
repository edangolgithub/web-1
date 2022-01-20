const nums=[1,2,3,4,5]
const numss= new Array(1,2,3,4,5)

for(let i=0; i<5;i++)
{
    //console.log(nums[i]);
}

nums.forEach(function(i){
    //console.log(i);
});

//123
//456
//789

// multi dimensional array
const matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
//console.log(matrix[1][2]);
for(let row= 0; row<3; row++)
{
    for(let col=0; col<3; col++)
    {
        //process.stdout.write(matrix[row][col])
        console.log(matrix[row][col]);
    }
}

matrix.forEach(function(x,i){
    console.log(x[i]);
})