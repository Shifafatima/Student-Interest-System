const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const Admins = mongoose.model('admins');

const { body, validationResult } = require('express-validator');
const { response } = require('express');

router.post('/login',[
    body('email','Not avalid Email').isEmail(),
    body('password','Password can\'t be blank').exists(),
],async (req,res)=>{
    let success=false;
    let errors=validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()});
    }

    try 
    {
        const {email,password}=req.body;
        const admin=await Admins.findOne({email});
        if(!admin)
        {
            success=false;
            return res.status(400).json({success,error:'Invalid Email'});
        }

        success=true;
        return res.json({success,email});

    }catch (error) {
        console.error(error.message);
        res.status(500).send('Internal server error');
    }

})

router.post("/signUp", [
    body("email", "Please enter a valid email").isEmail(),
    body("password", "Please enter a valid password").exists(),

], async (req, res) => {

    let success = false;	
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let user = await Admins.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).json({ success, error: "User with this email exists" });
    }

    const { email, password } = req.body;


    user = Admins.create({
        email: email,
        password: password,
    });

    success=true;

    res.json({email,success});


});
module.exports=router;