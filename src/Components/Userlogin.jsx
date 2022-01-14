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
   let lsUser=localStorage.getItem('userLogin');
   if (lsUser) {
       history.push('/userDashboard')
   }
   useEffect(() => {
       axios.get('https://prcartnew.herokuapp.com/users/').then((response)=>{setUser(response.data.data)})
       
    }, [])
    
    let loginIs=0;
    let loginData="ok"
    const loginCheck = () =>{
     
        
        if (name&&pass) {
        User.map((data,i)=>{
         
                    // while(data.name==name&&data.pass==pass){
                    // }
                    
                    
                    if(data.email==name&&data.password==pass){

                        setuserLogin(true)
                        setlogIn(1);
                        localStorage.setItem('userLogin',data._id)
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
        <div className="userlogin " >
                <br />
                <br />
                <br />
                <br />
             <div data-aos="zoom-in-up" className="card mx-auto mb-5  px-4 pt-4 pb-5 loginCard col-lg-3 col-sm-7 col-md-4 col-10">
             <div className='text-center' style={{"font-size":"2rem"}}>
                    <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
                    <br /> 
                  <span style={{"font-weight":"500"}}> 
                  User Login
                  </span>
                </div>
           <div className='d-flex position-relative align-items-center'>
           <input type="text" className="w-100" placeholder="email" onChange={(e)=>{
                 setname(e.target.value)
                }}/>
           <i className="fa fa-user position-absolute fa-2x" style={{right:"2rem"}} aria-hidden="true"></i>
           </div>
            <div className='d-flex position-relative align-items-center'>
            <input type="password" className="w-100"  placeholder=" password " onChange={(e)=>{
                 setpass(e.target.value)
                }}/>
                <i class="fa fa-key position-absolute fa-2x" style={{right:"2rem"}} aria-hidden="true"></i>
            </div>
             <button className="btn btn-dark" onClick={loginCheck}>Login</button>
             <div className="text-center pt-2" style={{color:'blue ',cursor:'pointer'}}>
                 <Link to="/signup" className="text-primary">
                 Dont Have Account?
                 </Link>
             </div>
             </div>
             {
                 logIn==3?<h1 className="text-danger text-center mt-2">Incorrect email or password</h1>:""
                 } 
     
        </div>
    )
}

export default Userlogin
