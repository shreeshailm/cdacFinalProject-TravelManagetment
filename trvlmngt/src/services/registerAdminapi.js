import axios from "axios";
import { createUrl, log } from "../utils/utils";


export async function registerAdminapi(fName,lName,email,pass,pan,dob){

    const url =createUrl('/api/auth/signup')
    const body = {
      firstName: fName,
      lastName: lName,
      email: email,
      panNumber: pan,
      password: pass,
      role: [
        "ADMIN"
      ],
      dob: dob,
    };

      try {
        const response = await axios.post(url, body)
        log(response.data)
        return response.data
      } catch (ex) {
        log(ex)
        return "Admin not added yet!"
      }

}