function getusers() {
    const data = fetch("https://jsonplaceholder.typicode.com/users");

    console.log(data);
}

getusers();