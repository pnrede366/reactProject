import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {BrowserRouter as Router , Switch,Link,Route,Redirect,useHistory} from 'react-router-dom';
import AdminDashboard from './AdminDashboard';


const AdminPanel = () => {
    
       const [name, setname] = useState('')
       const [pass, setpass] = useState('')
       const [datax, setdatax] = useState('')
       const [check, setcheck] = useState(false)
       let history= useHistory();

       let cc=window.screen.width
//    useEffect(() => {
//     // 
//        )


      
       
    
//    }, [cc])

  

  const sumbitHandler=(e)=>{
    // console.log(window.screen.width);
    e.preventDefault()

    if(name&&pass){

        axios.post("https://prcartnew.herokuapp.com/admin",{name:name,password:pass}).then(Response=>
        { 
            setdatax(Response.data.data)
         console.log(Response.data.data)
      
      
         if(Response.data.success){
            console.log("matched");
            localStorage.setItem('admin',true);
            history.push("/AdminDashboard")
              setcheck(true)
            //    this.history.pushState("http://localhost:3001/AdminPanel");  
              }
        else{
  
          alert("wrong username or pass")
          setcheck(false)
            setname('')
            setpass('')
        }
      
      
      }
         )
        
    }
    else{
        alert("please enter all fields")
    }


   }


    return (
            <div className="adminPanel" >

            <form onSubmit={sumbitHandler} data-aos="zoom-in" className="card  mx-auto px-4 pt-2 pb-5 loginCard col-lg-3 col-sm-8 col-md-4 col-10">
                <div className='text-center' style={{"font-size":"2rem"}}>
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                    <br /> 
                  <span style={{"font-weight":"500"}}> 
                  Admin Login
                  </span>
                </div>
                <div className='d-flex align-items-center position-relative'>
                <input type="text" className="  w-100" placeholder="user name" value={name} onChange={(e)=>{
                    setname(e.target.value)
                }}/>
                <i className="fa fa-user position-absolute fa-2x" style={{right:"2rem"}} aria-hidden="true"></i>
                </div>
                <br />
                <div className='d-flex align-items-center position-relative'>
                <input type="password" className="w-100" placeholder="password" value={pass} onChange={(e)=>{
                    setpass(e.target.value)
                }} />
                <i className="fa fa-key position-absolute fa-2x" style={{right:"2rem"}}  aria-hidden="true"></i>
                </div>
                <br />
                <button className="btn btn-primary " type="submit">Login</button>

                <div></div>
            </form>
        </div>
              
    )
}

export default AdminPanel
