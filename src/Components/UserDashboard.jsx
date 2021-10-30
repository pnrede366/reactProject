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
    <div className="d-flex justify-content-around main">
      <div className="">
        <Link to="/orders">
        <div className="box p-2 m-5 ">
          <div>
          
            <i className="fa m-4 fa-4x fa-shopping-bag" aria-hidden="true"></i>
          </div>
          <h2 className="text-center">Your Orders</h2>
        </div>
        </Link>
      </div>
      <div className="">
      <Link to="/userAccount">
        <div className="box p-2 m-5">
          <span>
            <i className="fa m-4 fa-4x fa-user" aria-hidden="true"></i>
          </span>
          <h2 className="text-center" >Account Info</h2>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default UserDashboard;
