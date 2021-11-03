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
          
    axios.get(`http://localhost:3000/product`).then((response)=>{
      setproduct(response.data);
      console.log(response.data);
    });
   
 
  }, [])
    return (
        <div>
       {
         product.map((dd,i)=>{
           if (dd.id==Id) {
             return (
              <div class='product'>
              <div class='product-1'>
                  <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fphotogallery.indiatimes.com%2Fphoto%2F27299395.cms&f=1&nofb=1' alt='' style={{'width':'40rem'}}/>
                  <div class='d-flex'>
                  <button class='btn btn-warning btn-block' onClick={
                    ()=>{
                      history.push('/placeorder',props.location.state)
                    }
                  }>Buy Now</button>
                  </div>
              </div>
              <div class='product-2'>
                  <h2>{dd.name}</h2>
                  <h5><i class='fa fa-bolt text-danger p-1' aria-hidden='true' ></i>{dd.descr}</h5>
                  <h3><i class='fa fa-inr p-2' aria-hidden='true'></i>{dd.price}</h3>
                  
                  <div>
                  <h5>Available Offers</h5>
                  <div><i class='fa fa-tag text-success py-2' aria-hidden='true'></i>  Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card<a href='' class='text-primary px-1'>T&C</a></div>
                  <div><i class='fa fa-tag text-success py-2' aria-hidden='true'></i>Bank Offer10% Off on Bank of Baroda Mastercard debit card first time transaction<a href='' class='text-primary px-1'>T&C</a></div>
                  <div><i class='fa fa-tag text-success py-2' aria-hidden='true'></i>Special PriceGet extra 10% off (price inclusive of discount)<a href='' class='text-primary px-1'>T&C</a></div>
                  <div><i class='fa fa-calendar-check-o text-primary py-2' aria-hidden='true'></i>No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹4499<a href='' class='text-primary px-1'>T&C</a></div>
                  
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
