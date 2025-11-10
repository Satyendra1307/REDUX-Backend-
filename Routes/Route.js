const Usercontroller = require('../Controller/Usercontroller.js')
// const { addEmployee } = require('../Controller/EmployeeController.js')
//  //Ye line controller file ko access karne ke liye likhi gayi hai —taaki hum “saveUser” aur “loginUser” functions ko yahan se call kar saken.

const express = require('express'); //Express backend ka “engine” hai jisse hum requests handle karte hain.Iske bina hum “/saveUser” ya “/loginUser” jaise API routes nahi bana sakte.

const router = express.Router();//Express ke andar ek feature hota hai Router() — jisse hum alag-alag routes ko group karke likh sakte hain. router ek mini application ki tarah kaam karta hai jo specific routes handle karta hai (signup, login, etc.).
router.post('/saveUser',Usercontroller.saveUser)//Ye line ek POST API route banati hai:Jab frontend se koi request /saveUser pe aayegi (e.g. signup form submit karte waqt),tab Usercontroller.js me likha saveUser function execute hoga.
router.post("/loginUser", Usercontroller.loginUser); //Jab frontend se user login form submit karega,to ye route loginUser function ko call karega (jo database me email-password check karta hai).ye line “login” request ko loginUser controller tak le jaati hai.
// router.post('/addEmployee', addEmployee)
module.exports = router //Isse hum is router ko main server file (jaise app.js ya index.js) me import kar sakte hain: