// let users = [
//     { name: "Sathishkumar", id: 1 },
//     { name: "Yuvaraj", id: 2 },
//     { name: "Sakthipriya", id: 3 },
// ]

const mongoose = require('mongoose')
const User = require("../modules/userModel")



exports.ListUsers = async(req, res)=>{
    const users = await User.find();
    res.send(users, 200)
};

exports.CreateUser = async(req, res) =>{
    const {name,email,phone_number,password} = req.body;
    // users.push({name,id})
    const user = await User.insertOne({name, email, phone_number, password})
    res.send(user, 201)
}

exports.GetUser = async(req, res) =>{
    const { id } = req.params;
    // const user = users.find(user=>user.id ==id)
    const user = await User.find({_id:id})
    res.send(user)
}

exports.UpdateUser = async(req, res) =>{
     const { id } = req.params;
    const { name,email,phone_number,password } = req.body;
    // users = users.map(item=>item.id ==id?{ name,id }:item)
    const user = await User.updateOne({_id:id}, { name,email,phone_number,password } )
    res.send(user,202)
}

exports.DeleteUser = async(req, res)=>{
    const { id } = req.params;
    // users = users.filter(item=>item.id !=id)
    const user = User.deleteOne({_id:id})
    res.send({"detail":"User deleted sucessfully!","data":user},204)
}