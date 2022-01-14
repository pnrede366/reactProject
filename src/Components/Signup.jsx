import axios from "axios";
import React, { useEffect, useState } from "react";

import { useHistory } from "react-router";
const Signup = () => {
  const [UserName, setUserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [UserPass, setUserPass] = useState("");
  const [UserMatchPass, setUserMatchPass] = useState("");
  const [data, setdata] = useState([]);

  const history = useHistory();
  useEffect(() => {
    axios.get("https://prcartnew.herokuapp.com/users").then((response) => {
      setdata(response.data);
    });
  }, []);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (UserName && UserEmail && UserPass && UserMatchPass) {
      if (UserPass === UserMatchPass) {
        axios
          .post("https://prcartnew.herokuapp.com/users", {
            name: UserName,
            email: UserEmail,
            password: UserPass,
            cpassword: UserMatchPass,
            quantity: 1,
          })
          .then((res) => {
            alert(res.data.message);
            console.log(res);
          });

        // axios.post(`http://localhost:4000/cart/`,{
        //   cart:[],
        //   user:userLoginId
        //  })
      } else {
        alert("password not match");
      }
    } else {
      alert("all field required");
    }
    // console.log("submit");
  };

  const login = () => {
    history.push("/login");
  };
  return (
    <div >
      <form onSubmit={onSubmitHandler} className="">
        <div className="   p-3 card loginCard col-lg-5 col-md-8 col-sm-10 col-11 mx-auto my-5">
          <div className="text-center" style={{ "font-size": "2rem" }}>
            <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
            <br />
            <span style={{ "font-weight": "500" }}>User Signup</span>
          </div>
          <div className="d-flex ">
            <i
              className="fa p-2 pt-4 fa-user fa-2x position-absolute"
              aria-hidden="true"
            ></i>{" "}
            <input
              type="text"
              className="w-100 px-5 "
              placeholder="Enter Your Name"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>{" "}
          <br />
          <div className="d-flex ">
            {/* <i class="fa fa-envelope-o" aria-hidden="true"></i> */}
            <i
              className="fa p-2 pt-4 fa-envelope fa-2x position-absolute"
              aria-hidden="true"
            ></i>{" "}
            {/* <i class="fa fa-envelope-square p-1 pt-3 fa-2x position-absolute" aria-hidden="true"></i> */}
            <input
              type="email"
              className="w-100 px-5 "
              placeholder="Enter Your Email"
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
          </div>{" "}
          <br />
          <div className="d-flex ">
            {" "}
            <i
              className="fa p-2 pt-4 fa-lock fa-2x position-absolute"
              aria-hidden="true"
            ></i>{" "}
            <input
              type="password"
              className="w-100 px-5"
              placeholder="Enter Your Password"
              onChange={(e) => {
                setUserPass(e.target.value);
              }}
            />
          </div>{" "}
          <br />
          <div className="d-flex ">
            {" "}
            <i
              className="fa p-1 pt-3 fa-key fa-2x position-absolute"
              aria-hidden="true"
            ></i>{" "}
            <input
              type="password"
              className="w-100 px-5"
              placeholder="Re-enter Password"
              onChange={(e) => {
                setUserMatchPass(e.target.value);
              }}
            />
          </div>{" "}
          <br />
          <div className="btn-group w-100">
            <button type="submit" className="btn btn-danger">
              REGISTER
            </button>
            <button onClick={login} className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
