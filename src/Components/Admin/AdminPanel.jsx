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
   useEffect(() => {
 
        axios.get("http://localhost:3000/admin").then(Response=>
       setdatax(Response.data)
       )


      
       
    
   }, [])

  

  const sumbitHandler=(e)=>{

      e.preventDefault()

      if(name==datax[0].name&&pass==datax[0].password){
          console.log("matched");
          localStorage.setItem('admin',true);
          history.push("/AdminDashboard")
            setcheck(true)
          //    this.history.pushState("http://localhost:3001/AdminPanel");  
            }
      else{
          console.log("not");
          setcheck(false)

      }


   }


    return (
            <div>
            <form onSubmit={sumbitHandler} className="card w-25 mx-auto mt-5 p-5 bg-primary">

                <input type="text" className="form-control " placeholder="name" value={name} onChange={(e)=>{
                    setname(e.target.value)
                }}/>
                <br />
                <input type="text" className="form-control " placeholder="password" value={pass} onChange={(e)=>{
                    setpass(e.target.value)
                }} />
                <br />
                <button className="btn btn-warning" type="submit">Login</button>

                <div></div>
            </form>
        </div>
              
    )
}

export default AdminPanel
