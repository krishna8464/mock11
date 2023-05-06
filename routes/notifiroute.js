const express = require("express")
const {NotificationModel} = require("../models/notifica");
require("dotenv").config()

const notiRoute = express.Router();

notiRoute.post("/create",async(req,res)=>{
    try {
        let date = new Date()
        req.body.date=date
    const noti = new NotificationModel(req.body);
    await noti.save();
    res.status(200).send({"msg":"Notification created successfully"})
        
    } catch (error) {
        res.status(400).send({"err":"Something went wrong"})
    }
})


notiRoute.get("/get",async(req,res)=>{
    try {
        let data = await NotificationModel.find({});
        res.send(data);
        
    } catch (error) {
        res.status(400).send({"err":"Something went wrong"})
    }
})

notiRoute.patch("/update/:id",async(req,res)=>{
    let {desc} = req.body;
    let id = req.params.id
    try {
        let data = {"description" : desc}
        await NotificationModel.findByIdAndUpdate({_id:id},data);
        res.status(201).send({"msg":"notification updated successfully"});
        
    } catch (error) {
        res.status(400).send({"err":"Something went wrong"});
    }
})

notiRoute.delete("/delete/:id",async(req,res)=>{
    let id = req.params.id
    try {
        await NotificationModel.findByIdAndDelete({_id:id});
        res.status(201).send({"msg":"notification deleted successfully"});
    } catch (error) {
        res.status(400).send({"err":"Something went wrong"});
    }
})


module.exports={
    notiRoute
}