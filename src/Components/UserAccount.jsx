import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
const UserAccount = () => {
    const [Data, setData] = useState([])
    const history = useHistory()
    
    const  userLoginId=localStorage.getItem("userLogin")
    if(!userLoginId){
            history.push('/login')
    }
    useEffect(() => {
        axios.get(`http://localhost:3000/user/${userLoginId}`).then((response)=>{
          setData(response.data)
        })
        
     }, [])
    //  console.log(Data);

    return (
        <div className="info" >
            <form className="w-50 m-auto mt-5  p-2 loginCard" >
        <div>
            <h2 className="text-center">Account Info</h2>

            <label htmlFor="">Name</label>
            <input disabled className="form-control" value={Data.name} type="text" /> <br />
            <label htmlFor="">Email</label>
            <input disabled className="form-control" value={Data.email} type="text" /> <br />
            <label htmlFor="">Password</label>
            <input disabled className="form-control" value={Data.pass} type="text" /> <br />
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
