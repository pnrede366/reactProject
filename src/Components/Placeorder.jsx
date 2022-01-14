import React, { useEffect } from 'react'

import {  useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

const Placeorder = (props) => {
      const [Product, setProduct] = useState(props.location.state.id)
      console.log(props.location.state);
      const  userLoginId=localStorage.getItem("userLogin")
      const initialState=''
      const history = useHistory()
      if(!userLoginId){
          history.push('/login')
      }
      const [name, setname] = useState(initialState)
      const [mobile, setmobile] = useState(initialState)
      const [adress, setadress] = useState(initialState)
const [pincode, setpincode] = useState(initialState)

  
    const onSubmitHandler=(e)=>{
        e.preventDefault()
     axios.post(`https://prcartnew.herokuapp.com/order/`,{
            name:name,   
        mobile:mobile,
           address:adress,
           zipcode:pincode,
           quantity:props.location.state.quantity,
            product :props.location.state.id,
            user:userLoginId
        }).then((res)=>{
                history.push('/ordersuccess')
        })
    }


    const formStyle={
        /* From https://css.glass */
"background":" rgba(255, 255, 255, 0)",
"borderRadius": "16px",
"boxShadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
"backdropFilter": "blur(18.2px)",
    }
      return (
      
          <div >
            
            <div>
            <form  style={formStyle} className='p-4 col-lg-5 col-md-8 col-sm-10 col-10 mx-auto my-5  mx-auto'  onSubmit={onSubmitHandler}>
             
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
             } name="sellercity
             " required className="form-control" placeholder="Enter your address" type="text"/>
             <label htmlFor="">Zip code </label>
             <input onChange={
                 (e)=>{
                             setpincode(e.target.value)
                 }
             } name="sellerpincode" required className="form-control" placeholder="Enter your zip code"type="text"/>
       
       <button type="submit" name="submit"  className="btn btn-primary   ">Place Order
             </button>
             
                  </form>
            </div>
         
          </div>
       
    )
}

export default Placeorder
