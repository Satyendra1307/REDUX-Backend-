const mongoose = require('mongoose') //Mongoose ek ODM (Object Data Modeling) tool hai — jo MongoDB ke saath kaam karna asaan bana deta hai.
//Ye humein MongoDB me directly queries likhne ke bajaye JavaScript objects ke zariye kaam karne ki facility deta hai.
const db="mongodb+srv://satyendra:1234@cluster0.jnvgd7z.mongodb.net/?appName=Cluster0"
mongoose.connect(db,{  //Ye function mongoose ko kehta hai is URL (db) se connect ho jao.
}).then(()=>console.log("connection start")).catch((error)=>{
    console.log(error.message)
})