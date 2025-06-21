
// require('./ws.js')
const connect = require("./mongo/index");
const CredsModels = require("./mongo/model/creds");
const express = require("express");
const path = require("path");
const app = express();
const {credsRoute} = require('./routes/index.js') 
require("dotenv").config();
const port = process.env.PORT || 3551;
const AllowedUsers = require("./mongo/model/allowed");
const fsPromises = require('fs/promises')


const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const isAuthenticated = require('./ middleware/auth.js');


app.use(express.json());

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy((username, password, done) => {
   
    if (username === 'adminfdsdfkls' && password === 'passwordfsddfsdfsdfs') {
        return done(null, { id: 1, username: 'admin' });
    }
    return done(null, false, { message: 'Incorrect credentials' });
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    // Replace with your user deserialization logic
    done(null, { id: 1, username: 'admin' });
});

// Your existing routes

// Protect specific routes
app.use('/admin.html', isAuthenticated, express.static(__dirname + '/public/admin.html'));
app.use('/creds.html', isAuthenticated, express.static(__dirname + '/public/creds.html'));

// Public routes


// Login route
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

app.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({ message: 'Login successful' });
});
app.get('/api/v1/crypto/images',async(req,res)=>{
  try {
      const responses = await fsPromises.readdir('./images')
      res.json({code:200,images:responses.map((el)=>  process.env.URL+`/image/`+el)}).status(200)
  } catch (error) {
      res.json({code:500,error:error,message:error.message}).status(500)
  }
})
app.get('/image/:name',async(req,res)=>{
  try {
     const exist = require('fs').existsSync('./images/'+req.params.name)
     if(!exist) return res.json({code:400,msg:'Not found file'})
    //  const buffer = await fsPromises.readFile('./images/'+req.params.name)
     res.sendFile(path.join(__dirname, './images/'+req.params.name));
   
  } catch (error) {
    res.json({code:500,error:error,message:error.message}).status(500)
  }
})
// Error handling for unauthorized access
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Invalid token');
    } else {
        next(err);
    }
});

app.use(express.static("./public"));

app.use('/api/v1/creds',credsRoute)
app.get("/check", (req, res) => {
  res.json({ res: "hi, I am a bot" }).status(200);
});
app.get("/files/:id",isAuthenticated, (req, res) => {
  const { id } = req.params;
  res.sendFile(path.join(__dirname, `./files/${id}`));
});

app.post("/api/v1/creds/remove",isAuthenticated, async (req, res) => {
  try {
    const { name } = req.body;
    if (!name)
      return res
        .json({ status: "failed", data: "Please provide number" })
        .status(400);
    await CredsModels.deleteOne({ _id: name });
    res.json({ status: "success", data: req.body });
  } catch (error) {
    res.json({ status: "failed" }).status(500);
  }
});
app.get("/api/v1/creds/users",isAuthenticated, async (req, res) => {
  try {
    const Users = await CredsModels.find({});
    //  console.log(Users)
    res.json({ Users, status: "success" });
  } catch (error) {
    res.json({ status: "failed" }).status(500);
  }
});
// app.post('/api/v1/creds/login',async (req,res)=>{
//   // console.log(req.body)
//   const {number} = req.body;
//    const id = '92'+ number.substr(1) + '@s.whatsapp.net'
//   // await AllowedUsers.create({id:})
//   if(!number){
//     return   res.json({status:'failed',data:'Please write number'}).status(400)

//   }
//   await AllowedUsers.create({id:id})
//   res.json({status:'success',data:id}).status(201)
// })

app.post("/api/v1/remove",isAuthenticated, async (req, res) => {
  try {
    const { number } = req.body;
    if (!number)
      return res
        .json({ status: "failed", data: "Please provide number" })
        .status(400);
    await AllowedUsers.deleteOne({ id: number });
    res.json({ status: "success", data: req.body });
  } catch (error) {
    res.json({ status: "failed" }).status(500);
  }
});
app.get("/api/v1/users",isAuthenticated, async (req, res) => {
  try {
    const Users = await AllowedUsers.find({});
    //  console.log(Users)
    res.json({ Users, status: "success" });
  } catch (error) {
    res.json({ status: "failed" }).status(500);
  }
});
app.post("/api/v1/login", async (req, res) => {
  // console.log(req.body)
  const { number } = req.body;
  const id = "92" + number.substr(1) + "@s.whatsapp.net";
  // await AllowedUsers.create({id:})
  if (!number) {
    return res
      .json({ status: "failed", data: "Please write number" })
      .status(400);
  }
  await AllowedUsers.create({ id: id });
  res.json({ status: "success", data: id }).status(201);
});
app.use((err, req, res, next) => {
  console.log("Express Error;");
  console.log(err);
  res.send({ status: "failed", data: err.message }).status(500);
});
const server = app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
require("./ws.js")(server);
const axios = require("axios");
const activate = require('./activate-user.js'); 
const fs = require("node-webpmux/io.js");
setInterval(async () => {
  try {
    await axios.get(process.env.URL);
  } catch (error) {}
}, 20000);
// setInterval(async () => {
//   try {
//     require("./testnew.js")();
//   } catch (error) {}
// }, 61000);
const func = async () => {
  
  const pino = require("pino");


  const users = await CredsModels.find({});
  // const obj = {
  //   name: "Talh2a",
  //   creds: JSON.parse(
  //     fs.readFileSync("./Configs/Talh2a/creds.json", { encoding: "utf-8" })
  //   ),
  // };
  // console.log(obj);
  // const users = [obj];

  // console.log(users.length);
  // console.log(users);
  // const users = [{ name: "Talha", creds: "" }];

  for (user of users) {
    activate(user)
  
  }
};
const start = async () => {
  try {
    await connect();
    console.log("conencted to DB");
    func();
  } catch (err) {
    console.log(err);
  }
};
start();
