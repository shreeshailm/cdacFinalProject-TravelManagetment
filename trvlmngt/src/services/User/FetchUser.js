import axios from "axios";
import { createUrl ,log } from "../utils/utils";

export async function fetchAll(){

    const url =createUrl('/api/auth')
      try {
        const response = axios.get(url)
        log(response.data)
        return response.data
      } catch (ex) {
        log(ex)
        return null
      }

}

export async function fetchUser(id){

  const url =createUrl('/api/auth')
    try {
      const response = axios.get(url)
      log(response.data)
      return response.data
    } catch (ex) {
      log(ex)
      return null
    }

}