// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  //console.log(fruits.get("apples"));

  fruits.forEach(function(v,k){
      //console.log(`${k}= ${v}`);
  })

  for(const x of fruits.entries())
  {
     // console.log(x[1]);
  }

  for (const x of fruits.keys()) {
    //  console.log(x);
  }
  for (const x of fruits.values()) {
      console.log(x);
  }