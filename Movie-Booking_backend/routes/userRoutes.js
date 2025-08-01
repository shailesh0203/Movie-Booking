import express from "express"
import { getFavorites, getUserBookings, updateFavorite } from "../controllers/user.controller.js";

const userRouter=express.Router();


userRouter.get('/bookings',getUserBookings)
userRouter.get('/update-favourite',updateFavorite)
userRouter.get('/favorites',getFavorites)

export default userRouter