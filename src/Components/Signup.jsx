import axios from "axios";
import React, { useEffect, useState } from "react";
import '../Assets/UserLogin.css'
import '../Assets/AdminPanel.css'
import { useHistory } from "react-router";
const Signup = () => {
  const [UserName, setUserName] = useState("")
    const [UserEmail, setUserEmail] = useState("")
    const [UserPass, setUserPass] = useState("")
    const [UserMatchPass, setUserMatchPass] = useState("")
    const [EmailValidation, setEmailValidation] = useState([])

    const history = useHistory()
    useEffect(() => {

      axios.get('http://localhost:3000/user').then((response)=>{
        setEmailValidation(response.data)
      })

    }, [])
    const onSubmitHandler=(e)=>{
        e.preventDefault()
        if(UserName&&UserEmail&&UserPass&&UserMatchPass){
        if(UserPass===UserMatchPass){
            axios.post('http://localhost:3000/user',{
            name:UserName,
            email:UserEmail,
            pass:UserPass,
            cart:[],
            adress:'',
            order:[],
            mobile:'',pincode:''
        }).then(()=>{alert("Account Created Successfully")})
            }
        else{
        alert("password not match")
        }
    }
    else{
        alert("all field required")
    }
        // console.log("submit");

    }


    const login =()=>{
      history.push('/login')
    }
  return (
    <div className="signupMain p-1">
      <form  onSubmit={onSubmitHandler} className="">
        <div className="container   p-2 card loginCard col-lg-5 col-sm-8 col-md-4 col-10">
          <div className="d-flex ">
            <i className="fa p-2 pt-4 fa-user fa-2x" aria-hidden="true"></i>{" "}
            <input type="text"  className="form-control"  placeholder="Enter Your Name" onChange={(e)=>{
                setUserName(e.target.value)
            }}/>
          </div> <br />
          <div className="d-flex ">
            <i className="fa p-1 pt-3 fa-envelope fa-2x" aria-hidden="true"></i>{" "}
            <input type="email" className="form-control" placeholder="Enter Your Email" onChange={(e)=>{
                setUserEmail(e.target.value)
            }} />
          </div> <br />
          <div className="d-flex ">
            {" "}
            <i className="fa p-2 pt-4 fa-lock fa-2x" aria-hidden="true"></i>{" "}
            <input type="password" className="form-control"  placeholder="Enter Your Password" onChange={(e)=>{
                setUserPass(e.target.value)
            }}/>
          </div> <br />
          <div className="d-flex ">
            {" "}
            <i className="fa p-1 pt-3 fa-key fa-2x" aria-hidden="true"></i>{" "}
            <input type="password" className="form-control" placeholder="Re-enter Password" onChange={(e)=>{
                setUserMatchPass(e.target.value)
            }}/>
          </div> <br />

              <div className="btn-group">
                <button type="submit" className="btn btn-danger">REGISTER</button>
              <button onClick={
           login
          }  className="btn btn-primary">Login</button>

              </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
