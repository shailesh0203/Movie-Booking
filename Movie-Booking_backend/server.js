import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./src/inngest"

const app = express();
const PORT =  process.env.PORT || 3000

await connectDB()

//Middleware
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware())


//API Routess
app.get('/', (req, res) => {
  res.send('Welcome to the Movie Booking API');
})
app.use("/api/inngest", serve({ client: inngest, functions }));

app.listen(PORT,()=>console.log(`Server listening at http://localhost:${PORT}`));
