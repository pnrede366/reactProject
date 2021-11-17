import axios from "axios";
import React, { useEffect, useState } from "react";
import '../Assets/UserLogin.css'
const Signup = () => {
  const [UserName, setUserName] = useState("")
    const [UserEmail, setUserEmail] = useState("")
    const [UserPass, setUserPass] = useState("")
    const [UserMatchPass, setUserMatchPass] = useState("")
    const [EmailValidation, setEmailValidation] = useState([])
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
        console.log("submit");

    }
  return (
    <div className="signupMain p-1">
      <form  onSubmit={onSubmitHandler}>
        <div className="container w-50  p-2 card">
          <div className="d-flex ">
            <i className="fa p-2 fa-user fa-2x" aria-hidden="true"></i>{" "}
            <input type="text"  className="form-control"  placeholder="Enter Your Name" onChange={(e)=>{
                setUserName(e.target.value)
            }}/>
          </div> <br />
          <div className="d-flex ">
            <i className="fa p-1 fa-envelope fa-2x" aria-hidden="true"></i>{" "}
            <input type="email" className="form-control" placeholder="Enter Your Email" onChange={(e)=>{
                setUserEmail(e.target.value)
            }} />
          </div> <br />
          <div className="d-flex ">
            {" "}
            <i className="fa p-2 fa-lock fa-2x" aria-hidden="true"></i>{" "}
            <input type="password" className="form-control"  placeholder="Enter Your Password" onChange={(e)=>{
                setUserPass(e.target.value)
            }}/>
          </div> <br />
          <div className="d-flex ">
            {" "}
            <i className="fa p-1 fa-key fa-2x" aria-hidden="true"></i>{" "}
            <input type="password" className="form-control" placeholder="Re-enter Password" onChange={(e)=>{
                setUserMatchPass(e.target.value)
            }}/>
          </div> <br />
          
          <button type="submit" className="btn btn-danger">REGISTER</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
