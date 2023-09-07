import axios from "axios";
import { createUrl, log } from "../utils/utils";
import { config} from '../utils/constants';
export async function addCityapi(Name,State,Country){
    const url=createUrl('/city/addCity',config)
    const body={
        cityName:Name,
        // cityPin:Pin,
        cityState:State,
        cityCountry:Country,
    }
    try{
        const response=await axios.post(url,body)
        log(response.data)
        return response.data
    }catch(ex){
        log(ex)
        return null
    }
}