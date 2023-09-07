import axios from "axios";
import { createUrl, log } from "../utils/utils";


export async function registerHotelOwnerapi(fName,lName,email,pass,pan,dob){

    const url =createUrl('/api/auth/signup')
    const body = {
      firstName: fName,
      lastName: lName,
      email: email,
      panNumber: pan,
      password: pass,
      role: [
        "HOTEL_OWNER"
      ],
      dob: dob,
    };

      try {
        const response = await axios.post(url, body)
        log(response.data)
        return response.data
      } catch (ex) {
        log(ex)
        return "HotelOwner not added yet!"
      }

}