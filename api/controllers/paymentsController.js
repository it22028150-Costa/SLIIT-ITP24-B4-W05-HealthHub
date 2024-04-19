const Card = require('../models/CardDetails')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt') 

//@desc Get all users
//@route Get /users
//@access Private

const getSavedDetails = asyncHandler(async(req,res) => {
    const {useremail} = req.query
    const list = await Card.find({'useremail': useremail}).select().lean() //Lean makes sure that the methods are not returned with the response
    if (!list?.length){
        return res.status(400).json({message: `No card details for ${useremail} found`})
    }
    res.json(list)
})



//@desc Create New User
//@route POST /users
//@access Private

const savePaymentDetails = asyncHandler(async(req,res) => {
    const {useremail,cardno,merchant,expdate,cvv} = req.body

    //Confirm data
    if(!useremail || !cardno || !merchant || !expdate || !cvv){
        return res.status(400).json({message: 'All fields are required'})
    }

    // //Check for duplicate
    // const duplicatecardno = await Card.findOne({cardno}).lean().exec()


    // if (duplicatecardno.useremail == useremail){
    //     return res.status(400).json({message:`Same card`})
    // }

    // // Hash cvv

    // const hashedCVV = await bcrypt.hash(cvv,2) // salt rounds



    const userObject =  {useremail, cardno, merchant,expdate,cvv}

    // Create and store new user

    const card = await Card.create(userObject)

    if (card) {
        res.status(201).json({message: `New card for ${useremail} created`})
    } else {
        res.status(400).json({message: 'Invalid user data recieved'})
    }
})



//@desc Update a User
//@route PATCH /users
//@access Private

const updateUser = asyncHandler(async(req,res) => {
    const { id, username, roles, active, password } = req.body

    //Confirm data 
    if (!id || !username || !Array.isArray(roles) || !roles.length || typeof active !== 'boolean'){
        return res.status(400).json({message: 'All fields are required'})
    }

    const user = await User.findByID(id).exec()

    if(!user){
        return res.status(400).json({message:'User not found'})
    }

    const duplicate = await User.findOne({username}).lean().exec()
    //Allow updates to the original user
    if (duplicate && duplicate?._id.toString() !== id){
        return res.status(409).json({message: 'Duplicate Username'})
        
    }

    user.username = username
    user.roles = roles
    user.active = active

    if(password){
        //Hash Password
        user.password = await bcrypt.hash(password,10) // salt rounds
    }

    const updatedUser = await user.save()

    res.json({message: `${updatedUser.username} updated`})

})


//@desc Delete a User
//@route DELETE /users
//@access Private

const deleteUser = asyncHandler(async(req,res) => {
    const {id} = req.body

    if(!id){
        return res.status(400).json({message: 'User ID Required'})
    }

    const user = await User.findByID(id).exec()

    if(!user){
        return res.status(400).json({message: 'User not found'})
    }
    
    const result = await user.deleteOne()

    const reply = `Username ${result.username} with ID ${result._id} deleted` 

    res.json(reply)


})



module.exports = {
    getSavedDetails, savePaymentDetails
}