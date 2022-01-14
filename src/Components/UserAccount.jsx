import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import Userlogin from './Userlogin'
const UserAccount = () => {
    const [Data, setData] = useState([])
    const history = useHistory()
    
    const  userLoginId=localStorage.getItem("userLogin")
    if(!userLoginId){
            history.push('/login')
    }
    useEffect(() => {
        axios.post(`https://prcartnew.herokuapp.com/singleuser/`,{
            id:userLoginId
        }).then((response)=>{
            console.log(response);
          setData(response.data.data)
        })
        
     }, [])
    //  console.log(Data);

    return (
        <div className="info" >
            <form className=" col-lg-5 col-md-8 col-sm-10 col-10 mx-auto my-5 loginCard p-4 " >
        <div>
            <h2 className="text-center">Account Info</h2>

            <label htmlFor="">Name</label>
            {/* {Data} */}
            <input disabled className="form-control " value={Data.name} type="text" /> <br />
            <label htmlFor="">Email</label>
            <input disabled className="form-control" value={Data.email} type="text" /> <br />
            <label htmlFor="">Password</label>
            <input disabled className="form-control" value={Data.password} type="text" /> <br />
            <button className="btn btn-outline-light" onClick={
                ()=>{
                    localStorage.removeItem("userLogin")
                }
            }>Logout</button>
        </div>

            </form>
            
        </div>
    )
}


export default UserAccount
