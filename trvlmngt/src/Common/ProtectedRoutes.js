import { Route} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ProtectedRou(Props) {
    
    const navigate = useNavigate();

    let tempValidityCheck=true;
    if(tempValidityCheck){
     return <Route exact path={Props.path} component={Props.component}></Route>
    }
    else{
        navigate("/");
    }
}

export default ProtectedRou;