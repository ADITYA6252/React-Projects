import Subscriber from "../models/subscriberModel.js"

export const subscribe = async(req,res)=>{

  try{

    const {email} = req.body

    const newSubscriber = new Subscriber({email})

    await newSubscriber.save()

    res.json({message:"Subscribed successfully"})

  }catch(error){

    res.status(500).json({message:"Error subscribing"})

  }

}