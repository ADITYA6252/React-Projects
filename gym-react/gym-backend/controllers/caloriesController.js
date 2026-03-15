import Calories from "../models/Calories.js";

export const addCalories = async (req,res) =>{
    try{
        const {food,calories} = req.body

        const newEntry = await Calories.create({

            user:req.user,
            food,
            calories
        })

        res.status(201).json(newEntry)
    } catch(error){
        res.status(500).json({message: error.message})
    }
    

}

export const getCalories = async (req,res) => {
    try{
        const calories  =await Calories.find({user:req.user}).sort({date:-1})

        res.json(calories)
    } catch(error){
        res.status(500).json({message:error.message})
    }
}