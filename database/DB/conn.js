const mongoose = require('mongoose');
const db_url = `mongodb+srv://academy113:Academy%40113@cluster0.kgqi1.mongodb.net/karateAcademy?retryWrites=true&w=majority`;

mongoose.connect(db_url,{
    useNewUrlParser: true
}).then(()=>{
    console.log("connected to database");
}).catch((error)=>{
    console.log("Error : ", error);
});
