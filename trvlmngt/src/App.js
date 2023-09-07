import { BrowserRouter, Routes, Route ,Switch} from 'react-router-dom';
//import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUserDB from './components/User/AddUsers';
import LoginUser from './components/User/Login';
import Prof from './components/User/Profile';
import Feedback from './components/Feedback/AddFeedback';
import AllPackage from './components/Package/AllPackage';
import AddPackage from './components/Package/AddPackage';
import ManagePackage from './components/Package/ManagePackage';
import UpdPackage from './components/Package/UpdatePkg';
import AllFeedback from './components/Feedback/AllFeedback';
import GetAllHotelForUser from './components/UsersideHotel/GetHotel';
import Decreaseroomcnt from './components/UsersideHotel/DecreaseRoom';

import AddImage from './components/Package/AddImageInPackage';
import CityList from './components/City/GetAllCities';
import UpdateCity from './components/City/UpdateCity';
import AddCity from './components/City/AddCity';

import Home from './components/home';
import HotelInventory from './components/Hotel/hotelinventory';
import AddHotelInventory from './components/Hotel/addHotelInventory';
import RegisterHotelOwner from './components/Hotel/registerhotelowner';
import AddHotel from './components/Hotel/addHotel';
import AskToAddHotel from './components/Hotel/asktoaddhotel';
import HotelInfo from './components/Hotel/gethotelbyuserid';
import GetAllHotels from './components/Hotel/getallhotels';
import UpdateHotel from './components/Hotel/updatehoteldetails';
import AboutUs from './components/aboutUs';
import Nami from './components/NavBar/navigation';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';
import ContactUs from './components/ContactUs';
import { ToastContainer } from 'react-toastify';
import RegisterAdmin from './components/adminRegistration';
import DeatilsofPackage from './components/Package/AddPackagedetails';
import PaymentPage from './components/Payment/payment';
import Bookingbyuserid from './components/booking/bookingbyuserid';
import Cancelledbookingbyuseris from './components/booking/cancellationbyuserid';


function App() {
  return (
    <>
<Nami></Nami>

          <Routes>
          
            <Route path='/' element={<Home/>} />
            <Route path='/register' element={<AddUserDB/>} />
            <Route path='/adminregistration' element={<RegisterAdmin/>} />
            <Route path='/login' element={<LoginUser/>} />    
            <Route path="/AllPackage" element={<AllPackage/>} />     
            <Route path='/AllFeedback' element={<AllFeedback/>} />
        
          <Route element={<PrivateRoutes/>}>
            <Route exact path="/gethotelbyuserid" Component={HotelInfo} />
            <Route exact path="/getallhotels" Component={GetAllHotels} />
            <Route exact path="/getallhotels/:ccid" Component={GetAllHotels} />
            <Route exact path="/hotelupdate/:hotelId" Component={UpdateHotel}/>
            <Route exact path="/payment" Component={PaymentPage}/>
            <Route path='/profile' element={<Prof/>} />
            <Route exact path="/getttt/:pid" Component={GetAllHotelForUser}/>
            <Route path="/Feedback" element={<Feedback/>} />
            <Route path="/ManagePackage" element={<ManagePackage/>} />
            <Route path="/updatepkg/:pid" element={<UpdPackage/>} />
            <Route path="/addimage/:pid" element={<AddImage/>} />
            <Route path="/AddPackage" element={<AddPackage/>} />
            <Route path="/Citylist" element={<CityList/>} />
            <Route path='/addCity' element={<AddCity/>} />
            <Route path='/update/:did' element={<UpdateCity />} />
            <Route path='/getbookingbyuserid' element={<Bookingbyuserid/>} />
            <Route path='/getcancellationbyuserid' element={<Cancelledbookingbyuseris/>} />
            <Route exact path="/decc/:hotelId" Component={Decreaseroomcnt}/>
            <Route path="/hotelInventory/:hotelId" Component={HotelInventory} />
            <Route exact path="/addhotelinventory" Component={AddHotelInventory} />
            <Route exact path="/addhotel" Component={AddHotel} />
            <Route path='/detailsofpackage/:pid' element={<DeatilsofPackage />} />
         
          </Route>

            <Route path='*' element={<NotFound />} />
              <Route exact path="/registerhotelowner" Component={RegisterHotelOwner} />
              <Route exact path="/asktoaddhotel" Component={AskToAddHotel} />
              <Route exact path="/aboutus" Component={AboutUs} />
              <Route exact path="/contactus" Component={ContactUs} />
             
          </Routes>
          <ToastContainer/>
          </>
  );
}

export default App;
