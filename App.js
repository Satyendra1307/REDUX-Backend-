const express = require('express')
const cors = require('cors')
const app = express()
const data = require('./Default/Default')
require('./db/Connection')
app.use(express.json())
app.use(cors())
app.use('/api',require('./Routes/Route'))
app.get('/',(req,res)=>{
    res.send('server is running')
    res.end()
})
data()
const port = 7777
app.listen(port,()=>{
    console.log('http://localhost:7777')
})
