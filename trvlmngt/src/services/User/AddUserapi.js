import axios from "axios";
import { createUrl,log } from "../../utils/utils";

export async function addUserapi(fName,lName,email,pass,pan,dob){

    const url =createUrl('/api/auth/signup')
    const body = {
      firstName: fName,
      lastName: lName,
      email: email,
      panNumber: pan,
      password: pass,
      role: [
        "CUSTOMER"
      ],
      dob: dob,
    };

      try {
        const response = await axios.post(url, body)
        log(response.data)
        return response.data
      } catch (ex) {
        log(ex)
        return "User not added yet!"
      }

}