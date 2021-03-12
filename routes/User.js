const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
const User = require('../models/User');
const Chore = require('../models/Chore');

const signToken = userID => {
    return JWT.sign({
        iss : "Ausboss",
        sub : userID
    },"Ausboss", {expiresIn: "1h"});
}

userRouter.post('/register', (req,res) => {
    const { name,username,password } = req.body;
    User.findOne({username}, (err,user) => {
        if(err)
            res.status(500).json({message: {msgBody : "Error has occured", msgError: true}});
        if(user)
            res.status(400).json({message : {msgBody : "Username is already taken", msgError: true}});
        else{
            const newUser = new User({name,username,password});
            newUser.save(err=> {
                if(err)
                    res.status(500).json({message: {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(201).json({message: {msgBody : "Account succesfully created", msgError: false}});
            })
        }
    })
});

userRouter.post('/login', passport.authenticate('local', {session : false}), (req,res) => {
    if(req.isAuthenticated()){
        const {_id,name,username,frontyard,backyard,dailytrash,trash2curb,sweepmop,bathroom,livingroom} = req.user;
        const token = signToken(_id);
        res.cookie('access_token',token,{httpOnly: true, sameSite: true});
        res.status(200).json({isAuthenticated: true, user: {name,username,frontyard,backyard,dailytrash,trash2curb,sweepmop,bathroom,livingroom}});
    }
});

userRouter.get('/logout', passport.authenticate('jwt', {session : false}), (req,res) => {
    res.clearCookie('access_token');
    res.json({user:{name : "", username : ""}, success: true});
});
//working on route to get roommates scores. add service action
userRouter.get('/', passport.authenticate('jwt', {session : false}), (req,res) => {
    if(req.isAuthenticated()){
        console.log("getting top score")
        User.findOne().sort({frontyard:-1}).limit(1);
    }
});

userRouter.post('/chore', passport.authenticate('jwt', {session : false}), (req,res) => {
    const chore = new Chore(req.body);
    chore.save(err=> {
        if(err)
            res.status(500).json({message: {msgBody : "Error has occured", msgError: true}});
        else{
            req.user.chores.push(chore);
            req.user.save(err=> {
                if(err)
                res.status(500).json({message: {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(200).json({message: {msgBody : "Successfully added chore", msgError: false}});

            });
        }
    })
});

userRouter.put('/frontyard/:_id', passport.authenticate('jwt', {session : false}), (req,res) => {
    if(req.isAuthenticated()){
    console.log("updating", req.user)
    User.findByIdAndUpdate(req.user._id, { $inc: { frontyard: 1 } },  (err, newChore) =>{
        if(err){
            console.log(err);
           }
           let updatedFY = newChore.frontyard++
           console.log(newChore)
           res.send(newChore)
        })}});

userRouter.put('/backyard/:_id', passport.authenticate('jwt', {session : false}), (req,res) => {
    if(req.isAuthenticated()){
    console.log("updating", req.user)
    User.findByIdAndUpdate(req.user._id, { $inc: { backyard: 1 } },  (err, newChore) =>{
        if(err){
            console.log(err);
        }
        let updatedFY = newChore.backyard++
        console.log(newChore)
        res.send(newChore)
        })}});

userRouter.put('/dailytrash/:_id', passport.authenticate('jwt', {session : false}), (req,res) => {
    if(req.isAuthenticated()){
    console.log("updating", req.user)
    User.findByIdAndUpdate(req.user._id, { $inc: { dailytrash: 1 } },  (err, newChore) =>{
        if(err){
            console.log(err);
        }
        let updatedFY = newChore.dailytrash++
        console.log(newChore)
        res.send(newChore)
        })}});

userRouter.put('/trash2curb/:_id', passport.authenticate('jwt', {session : false}), (req,res) => {
    if(req.isAuthenticated()){
    console.log("updating", req.user)
    User.findByIdAndUpdate(req.user._id, { $inc: { trash2curb: 1 } },  (err, newChore) =>{
        if(err){
            console.log(err);
        }
        let updatedFY = newChore.trash2curb++
        console.log(newChore)
        res.send(newChore)
        })}});
//finish adding routes
userRouter.put('/sweepmop/:_id', passport.authenticate('jwt', {session : false}), (req,res) => {
    if(req.isAuthenticated()){
    console.log("updating", req.user)
    User.findByIdAndUpdate(req.user._id, { $inc: { sweepmop: 1 } },  (err, newChore) =>{
        if(err){
            console.log(err);
        }
        let updatedFY = newChore.sweepmop++
        console.log(newChore)
        res.send(newChore)
        })}});

userRouter.put('/livingroom/:_id', passport.authenticate('jwt', {session : false}), (req,res) => {
    if(req.isAuthenticated()){
    console.log("updating", req.user)
    User.findByIdAndUpdate(req.user._id, { $inc: { livingroom: 1 } },  (err, newChore) =>{
        if(err){
            console.log(err);
        }
        let updatedFY = newChore.livingroom++
        console.log(newChore)
        res.send(newChore)
        })}});

userRouter.put('/bath/:_id', passport.authenticate('jwt', {session : false}), (req,res) => {
    if(req.isAuthenticated()){
    console.log("updating", req.user)
    User.findByIdAndUpdate(req.user._id, { $inc: { bath: 1 } },  (err, newChore) =>{
        if(err){
            console.log(err);
        }
        let updatedFY = newChore.bath++
        console.log(newChore)
        res.send(newChore)
        })}});

userRouter.get('/chores', passport.authenticate('jwt', {session : false}), (req,res) => {
    User.findById({_id : req.user._id}).populate('chores').exec((err,document)=>{
        if(err) 
            res.status(500).json({message : {msgBody : "Error has occured", msgError : true}});
        else{
            res.status(200).json({chores : document.chores, authenticated : true});
        }
    })
});

userRouter.get('/authenticated', passport.authenticate('jwt', {session: false}),(req,res)=> {
    const {username,frontyard,backyard,dailytrash,trash2curb,sweepmop,bathroom,livingroom} = req.user;
    res.status(200).json({isAuthenticated : true, user : {username,frontyard,backyard,dailytrash,trash2curb,sweepmop,bathroom,livingroom}});
});

module.exports = userRouter;