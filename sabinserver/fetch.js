const axios = require("axios");

async function getusers() {
   const data =await axios.get("https://jsonplaceholder.typicode.com/users");
//const data= await axios.get("http://localhost:4000/data");
    console.log(data);
}

getusers();