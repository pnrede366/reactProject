import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Action from '../Redux/Action/Action'
import { Link } from 'react-router-dom'
const CartItem = (props) => {
  const reduxItem = useSelector(state => state.Reducers)
  const dispatch = useDispatch()
  const  userLoginId=localStorage.getItem("userLogin")
  const [product, setproduct] = useState([])
  const [myCart, setmyCart] = useState([])
  const history = useHistory()

        let productStyle = {
          border: "none",
          boxShadow: "0px 0px 5px 5px rgb(234, 251, 255)",
          width: "20vw",
        };
        
        useEffect(() => {
          
          
          axios.get(`http://localhost:3000/product`).then((response)=>{
            setproduct(response.data);
            
          });
          axios.get(`http://localhost:3000/user/${userLoginId}`).then((response)=>{
            setmyCart(response.data.cart);
          })
          
        }, [])
        
        if(!userLoginId){
          history.push('/login')
        }

            
            return (
        
              <div>
         
            
        <h3 className="text-center">
          Your Products
        </h3>

              
        <div className="d-flex justify-content-around">
              {
                product.map((dd,i)=>{
                  if(dd.id==myCart[i]){
                    return (
                      <div className="pMain" key={i}>
                  <div className="card pCard" >
                       <img className="pImg" src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-m127gzkhins/gallery/in-galaxy-m-sm-m127gzkhins-front-black-405435102?$684_547_PNG$" alt="" />
                       <div className="pTitle">{dd.name}</div>
                       <div className="pPrice" >{dd.price} ₹</div>


                       <button className=" btn btn-outline-primary" onClick={
                         ()=>{
                           history.push('/productDetails',dd.id)
                         }
                       }>Buy Now</button>
                       
                      
                   </div>
                  </div>
                    )
                    
                  }
                })
              }
              </div>
        </div>
                // </UserContext.provider>
    )
}

export default CartItem