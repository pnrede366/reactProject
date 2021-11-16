import axios from "axios";
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router";
import '../Assets/ProductDetails.css'

const ProductDetails = (props) => {
  console.log('porps',props.location.state);
     const [product, setproduct] = useState([]) 
  const [Id, setId] = useState('')
  const history = useHistory();

     useEffect(() => {
    setId(props.location.state)        
  console.log('id',props.location.state.id);          
    axios.get(`http://localhost:3000/product`).then((response)=>{
      setproduct(response.data);
    });
      console.log(product);
 
  }, [])
    return (
        <div>
       {
         product.map((dd,i)=>{
           if (dd.id==props.location.state.id) {
           return (
              <div class='product'>
              <div class='product-1'>
                  <img src='https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?cs=srgb&dl=pexels-torsten-dettlaff-193004.jpg&fm=jpg' alt='' style={{'width':'40rem',height:'50vh'}}/>
                  <div class='d-flex'>
                  
                  </div>
              </div>
              <div class='product-2'>
                  <h2>{dd.name}</h2>
                  <h5><i class='fa fa-bolt text-danger p-1' aria-hidden='true' ></i>{dd.descr}</h5>
                  <h3><i class='fa fa-inr p-2' aria-hidden='true'></i>{dd.price}</h3>
                  
                  <div>
                  <h5>Available Offers</h5>
                  <div><i class='fa fa-tag text-success py-2' aria-hidden='true'></i>  Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card
                  T&C</div>
                  <div><i class='fa fa-tag text-success py-2' aria-hidden='true'></i>Bank Offer10% Off on Bank of Baroda Mastercard debit card first time transaction
                  T&C</div>
                  <div><i class='fa fa-tag text-success py-2' aria-hidden='true'></i>Special PriceGet extra 10% off (price inclusive of discount)
                  T&C</div>
                  <div><i class='fa fa-calendar-check-o text-primary py-2' aria-hidden='true'></i>No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹4499
                  T&C</div>
                  <button class='btn btn-warning ' onClick={
                    ()=>{
                      history.push('/placeorder',props.location.state)
                    }
                  }>Buy Now</button>
                  </div>
              </div>
          </div>
             )
             
           }
         })
       }
        </div>
    )
}

export default ProductDetails
