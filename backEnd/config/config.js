const mongoose = require("mongoose");
const connect = ()=>{
    return mongoose.connect("mongodb+srv://shaheem:123@cluster0.tc9spgr.mongodb.net/test?retryWrites=true&w=majority")
}
module.exports = connect;