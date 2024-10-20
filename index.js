require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

const product = {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "age": 28,
    "isActive": true,
    "address": {
      "street": "123 Main St",
      "city": "New York",
      "state": "NY",
      "zipcode": "10001"
    },
    "hobbies": ["reading", "traveling", "gaming"]
  }
  

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get("/twitter", (req, res) => {
    res.send("sumit@123");
})

app.get('/login' , (req , res)=>{
    res.send("<h1>please login at chai aur code</h1>");
})

app.get("/youtube" ,  (req , res)=>{
   res.send("chai aur code");
})

app.get("/github" , (req , res)=>{
     res.json(product);
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
})