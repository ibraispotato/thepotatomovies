const moongoose = require('mongoose');
const express = require('express');
require("dotenv").config()
const Routes = require('./routers/routersTexts')
const UserRoutes = require('./routers/userRouter')
const FavRoutes = require('./routers/favrouters')
const showRoutes = require('./routers/showrouter')





const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors({origin: 'http://localhost:3000'}))
app.use((req,res,next) => {
    console.log(req.path , req.method)
    next();
})
app.use("/api/comments",Routes)
app.use("/api/register/",UserRoutes)
app.use("/api/favourite",FavRoutes)
app.use("/api/show",showRoutes)





moongoose.connect("mongodb+srv://ibra:Salwa2743@cluster0.tkdjqfz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    app.listen((process.env.PORT), () => {
        console.log(`connecting to ${process.env.PORT}`);
    })
}).catch((error) => console.error(error))