import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link,useHistory,useLocation } from 'react-router-dom'

const Userlogin = () => {


    const [name, setname] = useState("")
    const [pass, setpass] = useState("")
    const [User, setUser] = useState([])
    const [userLogin, setuserLogin] = useState(false)
    const [logIn, setlogIn] = useState(0)

   let history=useHistory();
   let location=useLocation();
   console.log(history);
   console.log(location);
   let lsUser=localStorage.getItem('userLogin');
   console.log(lsUser+"ok");
   if (lsUser) {
       history.push('/userDashboard')
   }
   useEffect(() => {
       axios.get('http://localhost:3000/user').then((response)=>{setUser(response.data)})
       
    }, [])
    
    let loginIs=0;
    let loginData="ok"
    const loginCheck = () =>{
        
        console.log(User);
        
        if (name&&pass) {
        User.map((data,i)=>{
                    // while(data.name==name&&data.pass==pass){
                    //     console.clear()
                    //     console.log("login true");
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

        console.log(logIn);
    }
    return (
        <div>
            {
                logIn==3?<h1 className="text-danger">Incoreect username or password</h1>:""
                } 
             <div className="card w-25 mx-auto mt-5 p-2">
                 <h3 className="text-center">User Login</h3>
             <input type="text" className="form-control" placeholder="mobile number" onChange={(e)=>{
                 setname(e.target.value)
             }}/>
             <br />
             <input type="text" className="form-control" placeholder=" password " onChange={(e)=>{
                 setpass(e.target.value)
             }}/>
             <br />
             <button className="btn btn-primary" onClick={loginCheck}>Login</button>
             <div className="text-center pt-2" style={{color:'blue ',cursor:'pointer'}}>
                 <Link to="/signup">
                 Dont Have Account?
                 </Link>
             </div>
             </div>
        </div>
    )
}

export default Userlogin
