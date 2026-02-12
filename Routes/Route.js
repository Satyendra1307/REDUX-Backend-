const express = require('express')

const {saveUser,loginUser} = require('../controllers/userController.js');
const{get,add,update,deleteP} = require('../controllers/adminController.js')

const router = express.Router();
router.post("/signup", saveUser);
router.post("/login", loginUser);

router.get("/get",get)
router.post('/add',add)
router.put('/update/:id',update)
router.delete('/delete/:id',deleteP)

module.exports = router;







