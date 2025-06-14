import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDb from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();

await connectDb()

app.use(cors())
app.use(express.json())

app.get('/', (req,res)=> res.send("API IS WORKING"))
app.use('/api/admin',adminRouter)
app.use('/api/blog',blogRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is Running on Port `+ PORT)

})

export default app;