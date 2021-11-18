import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link,useHistory,useLocation } from 'react-router-dom'
import '../Assets/UserLogin.css'
const Userlogin = () => {


    const [name, setname] = useState("")
    const [pass, setpass] = useState("")
    const [User, setUser] = useState([])
    const [userLogin, setuserLogin] = useState(false)
    const [logIn, setlogIn] = useState(0)

   let history=useHistory();
   let location=useLocation();
   let lsUser=localStorage.getItem('userLogin');
   if (lsUser) {
       history.push('/userDashboard')
   }
   useEffect(() => {
       axios.get('http://localhost:3000/user').then((response)=>{setUser(response.data)})
       
    }, [])
    
    let loginIs=0;
    let loginData="ok"
    const loginCheck = () =>{
        
        
        if (name&&pass) {
        User.map((data,i)=>{
                    // while(data.name==name&&data.pass==pass){
                    // }
                    
                    
                    if(data.name==name&&data.pass==pass){

                        setuserLogin(true)
                        setlogIn(1);
                        localStorage.setItem('userLogin',data.id)
                        history.push('/')
                    }
                 
                    
                    
                   

                   
                })
                if(logIn==0){
                    setlogIn(3)
        
                }
            }
            else{
                setlogIn(0)
                alert("all fields required")
            }

    }
    return (
        <div className="userlogin ">
                <br />
                <br />
                <br />
                <br />
             <div className="card  mx-auto m-5 p-5 loginCard col-lg-3 col-sm-7 col-md-4 col-10">
                 <h3 className="text-center text-light">User Login</h3>
             <input type="text" className="form-control" placeholder="user name" onChange={(e)=>{
                 setname(e.target.value)
                }}/>
             <input type="password" className="form-control" placeholder=" password " onChange={(e)=>{
                 setpass(e.target.value)
                }}/>
             <button className="btn btn-primary" onClick={loginCheck}>Login</button>
             <div className="text-center pt-2" style={{color:'blue ',cursor:'pointer'}}>
                 <Link to="/signup" className="text-primary">
                 Dont Have Account?
                 </Link>
             </div>
             </div>
             {
                 logIn==3?<h1 className="text-danger text-center mt-2">Incorrect username or password</h1>:""
                 } 
        </div>
    )
}

export default Userlogin
