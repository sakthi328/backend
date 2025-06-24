const fs = require("fs");

const http = require('http');
const express = require('express');

const app = express();

app.use(express.json());

let users = [
  { name: "Sathishkumar", id: 1 },
  { name: "Yuvaraj", id: 2 },
  { name: "Sakthipriya", id: 3 },
];

app.get('/users/:id',(req, res)=>{
    const {id} = req.params;
    const user = users.find(user=>user.id ==id)
    console.log(user);
    res.send(user)
})

app.get('/users',(req, res)=>{
    res.send(users)
})

app.post('/users',(req, res)=>{
    const {name,id} = req.body;
    users.push({name,id})
    res.send({name,id},201)
})

app.delete('/users/:id', (req, res)=>{
    const { id } = req.params;
    users = users.filter(item=>item.id !=id)
    res.send({"detail":"User deleted sucessfully!"},204)
})



app.listen(3000, () => {
  console.log("nodejs server is runing on localhost:3000!");
});


// const server = http.createServer((request, response)=>{
//     if(request.url === "/users"){
//         response.writeHead(200,{'content-type': "application/json"});
//         response.end([{"name":"sathishkumar", id:1},{"name":"yuvaraj", id:2},{"name":"sakthipriya",id:3}])
//     }
// })


// server.listen(3000, ()=>{
//     console.log("nodejs server is runing on localhost:3000!")
// })



// fs.writeFileSync('newfile.txt',"hi how are you");

// const text = fs.readFile("newfile.txt","utf8",(err,data)=>{
// if(err){
//     console.log(err)
//     throw err
// }
//  console.log(data)
// });


// try{
//     if(response.status !== 200){
//         throw Error
//     }
// } catch (error){

// }

// console.log("newfile.txt is created successfully")