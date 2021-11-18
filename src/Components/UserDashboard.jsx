import React from "react";
import { Link,useHistory } from "react-router-dom";
import "../Assets/UserDashboard.css";
const UserDashboard = () => {

    const  userLoginId=localStorage.getItem("userLogin")
    const history = useHistory()
    if(!userLoginId){
            history.push('/login')
    }
    
  return (
    <div className="d-flex justify-content-around dashboard flex-wrap" style={{backgroundImage:"url('https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?cs=srgb&dl=pexels-picjumbocom-461077.jpg&fm=jpg')",
        backgroundPosition:'center',
        backgroundSize:'cover',
        
        }}>
      <div className="">
        <Link to="/orders" className="text-decoration-none">
        <div className="box p-2 m-5 ">
          <div>
          
            <i className="fa m-4 fa-4x fa-shopping-bag text-dark" aria-hidden="true"></i>
          </div>
          <h2 className="text-center text-dark ">Your Orders</h2>
        </div>
        </Link>
      </div>
      <div className="">
      <Link to="/userAccount" className="text-decoration-none">
        <div className="box p-2 m-5">
          <span>
            <i className="fa m-4 fa-4x fa-user text-dark" aria-hidden="true"></i>
          </span>
          <h2 className="text-center text-dark" >Account Info</h2>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default UserDashboard;
