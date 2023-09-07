import { useState } from "react";
import { config } from "../../utils/constants";
import { ToastContainer, toast } from "react-toastify";
import { createUrl } from "../../utils/utils";
import axios from "axios";
import AdminNavigation from "../../Navigate/AdminNav";
import { useNavigate } from "react-router-dom";


function AddPackage() {

    const navigate = useNavigate();
    const [PackageDtl, setPackageDtl] = useState({ packageName: "", image: "", packageDescription: "", noOfDays: "", price: "" });
    const url = createUrl('/tourpackage/addPackage')

    const AddPackage = async () => {
        debugger;
        const body = {
            packageName: PackageDtl.packageName,
            image: PackageDtl.image,
            packageDescription: PackageDtl.packageDescription,
            noOfDays: PackageDtl.noOfDays,
            price: PackageDtl.price,
          }
        try {
            console.log(PackageDtl);
            const result = await axios.post(url,body,config);
            toast.success("Package added successfully")
            setTimeout (()=>{
                navigate('/ManagePackage');
            },[2500])
        }
        catch (error) {
            console.log("Error Occured" + error);
        }
        debugger;
    }

    const packageDtlChange =(args)=>{
       var copyOfPackage={...PackageDtl};
       console.log(args)
       copyOfPackage[args.target.name]=args.target.value;
       setPackageDtl(copyOfPackage);
    }

    
    return <>



        {/* <AdminNavigation/> */}


        <div class="jumbotron" style={{ marginTop: "-19px" }}>
        <ToastContainer position='top-right' autoClose={2500}/>
            <div class="container" style={{marginTop:30}}>
                <center><h2>Add A New Package</h2></center>

            </div>
        </div>

        <div className="container-fluid text-center" style={{marginTop:30}}>

            <div className="row content">
                <div className="col-lg-2 sidenav">
                </div>
                <div className="col-lg-8 text-center">

                    <div>
                        <div><center><big>Name Of Package</big></center></div>
                        <input type="text" placeholder="Enter Package Name" className="form-control" name="packageName" value={PackageDtl.packageName} onChange={packageDtlChange}></input>
                    </div>

                    <br></br>
                    {/* <div>
                        <div><center><big>Package Discription</big></center></div>
                        <input type="text" placeholder="Enter Discription" className="form-control"  name="packageDescription" value={PackageDtl.packageDescription} onChange={packageDtlChange}></input>
                    </div>

                    <br></br>
                    <div>
                        <div><center><big>No Of days</big></center></div>
                        <input type="number" placeholder="Enter Days" className="form-control" name="noOfDays" value={PackageDtl.noOfDays} onChange={packageDtlChange}></input>
                    </div>

                    <br></br>
                    <div>
                        <div><center><big>Price</big></center></div>
                        <input type="number" placeholder="Enter Price" className="form-control" name="price" value={PackageDtl.price} onChange={packageDtlChange}></input>
                    </div> */}

                    <br></br>
                    {/* <div>
                        <div><center><big>Image</big></center></div>
                        <input type="file" className="form-control" name="image" value={PackageDtl.image} onChange={packageDtlChange}></input>
                    </div> */}

                    {/* <br></br>Select The Region<br></br><br></br>
                    <select class="form-select form-select-lg lg-3" aria-label=".form-select-lg example">
                        <option selected disabled>Open this select menu</option>
                        <option value="1">Get</option>
                        <option value="2">data</option>
                        <option value="3">from</option>
                        <option value="3">db</option>
                    </select> */}

                    <div>
                        <br></br>
                        <button type="button" class="btn btn-success" onClick={AddPackage}>Add Package</button>

                    </div>


                </div>
                <div className="col-lg-2 sidenav">
                </div>
            </div>
        </div>


    </>
}

export default AddPackage;