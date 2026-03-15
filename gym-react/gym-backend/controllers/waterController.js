import Water from "../models/Water.js"


export const addWater = async (req,res)=>{

  try{

    const {amount} = req.body

    const water = await Water.create({

      user:req.user,
      amount

    })

    res.status(201).json(water)

  }catch(error){

    res.status(500).json({message:error.message})

  }

}



export const getWater = async (req,res)=>{

  try{

    const water = await Water.find({user:req.user})
      .sort({date:-1})

    res.json(water)

  }catch(error){

    res.status(500).json({message:error.message})

  }

}