const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const conn = require('./DB/conn');
const models = require('./DB/models');
const rankHolders = require ('./DB/module_RankHolders');
const reviews = require('./DB/module_Reviews');
const ContactUs = require('./DB/module_ContactUS');
const Parade_Imgs = require('./DB/models_paradeImgs');
const Kumite_Imgs = require('./DB/models_kumite');
const Lalkar_Imgs = require('./DB/module_lalkar');
const selfDefence_Imgs = require('./DB/models_Self-defense');
const BeltGrading_Imgs = require('./DB/models_BeltGrading');
const Trip_Imgs = require('./DB/models_Trips');
const members_Data = require('./DB/models_Members');


const cors = require('cors');

const port = 8080;
const app = express();

console.log(__dirname);
let public = path.join(__dirname,'./public')
app.use(express.static(public));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.set('view engine', 'hbs');

app.get('/', async (req,res)=>{
    let result;
    let result_RankHolders;
    try{
        result =  await models.find({ });
        result_RankHolders =  await rankHolders.find({ });
        // console.log(result_RankHolders);

    }
    catch(err){
        console.log(err);
    }

    res.status(200).render('index',{

        update_heading_0 : result[0].Heading_Update,
        update_heading_1 : result[1].Heading_Update,
        update_heading_2 : result[2].Heading_Update,
        update_heading_3 : result[3].Heading_Update,

        update_Img_0 : result[0].Img_Link,
        update_Img_1 : result[1].Img_Link,
        update_Img_2 : result[2].Img_Link,
        update_Img_3 : result[3].Img_Link,

        update_detail_0 : result[0].Document_update,
        update_detail_1 : result[1].Document_update,
        update_detail_2 : result[2].Document_update,
        update_detail_3 : result[3].Document_update,

        RankHolderIMG_0: result_RankHolders[0].RankHolderIMG,
        RankHolderIMG_1: result_RankHolders[1].RankHolderIMG,
        RankHolderIMG_2: result_RankHolders[2].RankHolderIMG,
        RankHolderIMG_3: result_RankHolders[3].RankHolderIMG,

        RankHolderName_0: result_RankHolders[0].RankHolderName,
        RankHolderName_1: result_RankHolders[1].RankHolderName,
        RankHolderName_2: result_RankHolders[2].RankHolderName,
        RankHolderName_3: result_RankHolders[3].RankHolderName,

        RankHolderBelt_0: result_RankHolders[0].RankHolderBelt,
        RankHolderBelt_1: result_RankHolders[1].RankHolderBelt,
        RankHolderBelt_2: result_RankHolders[2].RankHolderBelt,
        RankHolderBelt_3: result_RankHolders[3].RankHolderBelt,

        RankHolderDesig_0 : result_RankHolders[0].RankHolderDesig,
        RankHolderDesig_1 : result_RankHolders[1].RankHolderDesig,
        RankHolderDesig_2 : result_RankHolders[2].RankHolderDesig,
        RankHolderDesig_3 : result_RankHolders[3].RankHolderDesig



    });
});
app.get('/BeltGrading',(req,res)=>{
    res.status(200).render('BeltGrading');
});
app.get('/Blogs',(req,res)=>{
    res.status(200).render('Blogs');
});
app.get('/ContactUs',(req,res)=>{
    res.status(200).render('ContactUs');
});
app.get('/Events',(req,res)=>{
    res.status(200).render('events');
});
app.get('/Gallery',(req,res)=>{
    res.status(200).render('Gallery');
});
app.get('/Instructors',(req,res)=>{
    res.status(200).render('Instructors');
});
app.get('/Kumite',(req,res)=>{
    res.status(200).render('kumite');
});
app.get('/Lalkar',(req,res)=>{
    res.status(200).render('Lalkaar');
});
app.get('/MissionVissionHistory',(req,res)=>{
    res.status(200).render('MissionVissionHistory');
});
app.get('/OpportunitiesSelectionProcedure',(req,res)=>{
    res.status(200).render('OpportunitiesSelectionProcedure');
});
app.get('/Parade',(req,res)=>{
    res.status(200).render('Parade');
});
app.get('/Self-defense',(req,res)=>{
    res.status(200).render('Self-defense');
});
app.get('/Trips',(req,res)=>{
    res.status(200).render('Trips');
});
app.get('/Members',(req,res)=>{
    res.status(200).render('Members');
});

app.get('/reviews', async (req,res)=>{
    let resultReviews = await reviews.find({ });
    res.send(resultReviews);
});

app.get('/ParadeImgs', async (req,res)=>{
    let ParadeImgsData = await Parade_Imgs.find({ });
    res.send(ParadeImgsData);
});

app.get('/KumiteImgs', async (req,res)=>{
    let KumiteImgsData = await Kumite_Imgs.find({ });
    res.send(KumiteImgsData);
});

app.get('/LalkarImgs', async (req,res)=>{
    let LalkarImgsData = await Lalkar_Imgs.find({ });
    res.send(LalkarImgsData);
});

app.get('/selfDefenceImgs', async (req,res)=>{
    let selfDefenceImgsData = await selfDefence_Imgs.find({ });
    res.send(selfDefenceImgsData);
});

app.get('/BeltGradingImgs', async (req,res)=>{
    let selfDefenceImgsData = await BeltGrading_Imgs.find({ });
    res.send(selfDefenceImgsData);
});

app.get('/TripImgs', async (req,res)=>{
    let TripImgsData = await Trip_Imgs.find({ });
    res.send(TripImgsData);
});

app.get('/MembersData', async (req,res)=>{
    let Data = await members_Data.find({ });
    res.send(Data);
});



app.post('/contactUS', async (req,res)=>{
    let bodyData = ContactUs(req.body);
    let contactUSPromise;
    // console.log(req.body);
    try {
        //  Block of code to try
        contactUSPromise = await bodyData.save();
    }
        catch(e) {
        //  Block of code to handle errors
        console.log(e);
    }
        
    if (contactUSPromise != null) {
        res.status(200).json({
            resMessage: "email saved sucessfully!",
            status : '200'
        });
    }
    else{
        res.status(400).json({
            resMessage : "something went wrong!"
        });
    }
});

app.listen(port,()=>{
    console.log("listning to prot no : " , port);
});