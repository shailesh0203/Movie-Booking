import Booking from "../models/booking.model.js";
import Show from "../models/Show.js"


// Function to check availability of selected seats for a movie
const checkSeatsAvailability = async (showId, selectedSeats)=>{
  try {
    const showData = await Show.findById(showId)
    if(!showData) return false;

    const occupiedSeats = showData.occupiedSeats;

    const isAnySeatTaken = selectedSeats.some(seat => occupiedSeats[seat]);

    return !isAnySeatTaken;
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

export const createBooking=async(req,res)=>{
    try {
        const {userId}=req.auth()
        const {showId,selectedSeats}=req.body
        const {origin} =req.headers

        //chech seat availability
        const isAvailable=await checkSeatsAvailability(showId,selectedSeats)

        if(!isAvailable){
            return res.json({success:false,message:"selected seats are not available"})
        }

        //get the show details
        const showData=await Show.findById(showId).populate('movie')

        //Create a new Booking

        const booking=await Booking.create({
         user:userId,
         show:showId,
         amount:showData.showPrice*selectedSeats.length,
         bookedSeats:selectedSeats
        })

        selectedSeats.map((seat)=>{
            showData.occupiedSeats[seat]=user.id
        })
        showData.markModiefied('occupiedSeats')

        await showData.save()

        //stripe gateway initialize

        res.json({success:true,message:'booked succesfully'})
    } catch (error) {
        console.log(error.message)
         res.json({success:false,message:error.message})
    }
}


