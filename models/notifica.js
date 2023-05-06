const mongoose = require("mongoose");

const notifSchema = mongoose.Schema({
    author: String,
    title: String,
    description: String,
    date : Date
},{
    versionKey:false
})

const NotificationModel = mongoose.model("notification",notifSchema);

module.exports = {
    NotificationModel
}

