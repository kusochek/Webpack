import axios from "axios";
import Sum from "./components/sum";

const calc = new Sum(2, 9);
console.log(calc.sum());
console.log(calc.sum());
console.log(calc.sum());

const user = {
    data: {
        firstName: "Sasha",
    }
}

if (user?.data?.firstName) console.log(user);

async function getData() {
    const resp = await axios("https://jsonplaceholder.typicode.com/posts");
    console.log(resp);
}

getData();


// console.log("Hello world!");

// const fetch = require("node-fetch");

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(data => data.json())
//     .then(resp => console.log(resp));

// const http = require('http');
// console.log(http);

// function sum(x, y) {
//     return x + y;
// }

// console.log(sum(10, 12));
