import express from "express"
import cors from "cors"
import morgan from "morgan";
import connect from '../server/database/connection.js';
import router from "../server/router/route.js"


const app = express()

// Midddleware

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');


const port = 8080;

// HTTP Get Request
app.get('/',(req, res)=>{
res.status(201).json("Home GET Request");
});


// Api Routes
app.use('/api', router)


// Start server  only when we have valid connection
connect().then(()=>{
    try {
        app.listen(port, ()=>{
            console.log(`Server is Running on http://localhost:${port}`);
        })
    } catch (error) {
        console.log(`Can not connect to server`);
    }
}).catch(error=>{
console.log(`Invalid Database Connection`);
})


