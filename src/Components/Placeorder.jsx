import React, { useEffect } from 'react'
import '../Assets/Placeorder.css'
import {  useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

const Placeorder = (props) => {
      const [Id, setId] = useState(props.location.state)
      const  userLoginId=localStorage.getItem("userLogin")

const initialState=''
      const [name, setname] = useState(initialState)
const [mobile, setmobile] = useState(initialState)
const [adress, setadress] = useState(initialState)
const [pincode, setpincode] = useState(initialState)
    
const history = useHistory()
    const onSubmitHandler=(e)=>{
        e.preventDefault()
        axios.patch(`http://localhost:3000/user/${userLoginId}`,{
           mobile:mobile,
           address:adress,
           pincode:pincode

       }).then(()=>{
           history.push('/ordersuccess')
       })
    }
      return (
      
          <div className="parent">
         <form className="main mb-5" onSubmit={onSubmitHandler}>
        <h1>Fill out Delivery Details</h1>
        <label htmlFor="">Name</label>
        <input onChange={
            (e)=>{
                        setname(e.target.value)
            }
        } name="sellername" required className="form-control" placeholder="Enter your name" type="text" />
        <label htmlFor="">Mobile No.</label>
        <input onChange={
            (e)=>{
                        setmobile(e.target.value)
            }
        } name="mobile" required className="form-control" placeholder="Enter your number" type="number"/>
        <label htmlFor="">Address</label>
        <textarea onChange={
            (e)=>{
                        setadress(e.target.value)
            }
        } name="sellercity" required className="form-control" placeholder="Enter your address" type="text"/>
        <label htmlFor="">Zip code </label>
        <input onChange={
            (e)=>{
                        setpincode(e.target.value)
            }
        } name="sellerpincode" required className="form-control" placeholder="Enter your zip code"type="text"/>
  

        <button type="submit" name="submit" required className="btn btn-primary btn-block mt-5 ">Place Order
        </button>
             </form>
          </div>
       
    )
}

export default Placeorder
