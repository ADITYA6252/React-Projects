import mongoose from "mongoose"

const waterSchema = new mongoose.Schema({

  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },

  amount:{
    type:Number,
    required:true
  },

  date:{
    type:Date,
    default:Date.now
  }

})

const Water = mongoose.model("Water",waterSchema)

export default Water