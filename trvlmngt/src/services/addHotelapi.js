import axios from "axios";
import { createUrl ,log } from "../utils/utils";

export async function addHotelapi(hotelName, hotelAddress,hotelDescription,userId){
    const url =createUrl('/hotel')
    const body = {
        hotelName, hotelAddress,hotelDescription,userId
      }

      try {
        const response = await axios.post(url, body)
        log(response.data)
        return response.data
      } catch (ex) {
        log(ex)
        return null
      }

}