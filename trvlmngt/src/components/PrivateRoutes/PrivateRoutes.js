
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/UserContext";


const PrivateRoutes=()=>{
    const{...user}=useUser();
let auth=user.loggedin
return(
    auth ? <Outlet/>:<Navigate to="/login"/>
)
}
export default PrivateRoutes;