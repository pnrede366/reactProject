import axios from "axios";
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router";


const ProductDetails = (props) => {
     const [product, setproduct] = useState([]) 
  const [Id, setId] = useState('')
  const history = useHistory();
  const [Counter, setCounter] = useState(1);
  const [ProductPrice, setProductPrice] = useState(0);

     useEffect(() => {
    setId(props.location.state.id)     
    console.log(props.location.state);   
    console.log(Id.id);
    axios.get(`https://prcartnew.herokuapp.com/singleproduct/${props.location.state.id}`).then((response)=>{
      setproduct(response.data.data)
      console.log(response.data.data);
    });
 
  }, [])
    return (
        <div >
       {
        //  product.map((product,i)=>{
          //  if (product.id==props.location.state.id) {
          //  return (
              <div class='product d-flex my-5 flex-wrap justify-content-center  align-items-center'>
              <div class='product-1'>
                  <img  alt='' style={{width:"15rem",height:"15rem"}} src={product.img} />
                  
              </div>
              <div class='product-2  col-md-5 offset-1 p-4 ' >
                  <h2>{product.name}</h2>
                  <h5><i class='fa fa-bolt text-danger p-1' aria-hidden='true' ></i>{product.descr}</h5>
                  <h3><i class='fa fa-inr p-2' aria-hidden='true'></i>{product.price}</h3>
                  
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
                  <div>
                  <button class='btn btn-warning ' onClick={
                    ()=>{
                      history.push("/placeorder",{'id': product._id,'quantity':Counter});
                    }
                  }>Buy Now</button>
                  </div>
                  <div className="col-md-3 col-sm-4 col-12 d-flex justify-content-center flex-column align-items-center  ">
                        <div className="d-flex ">
                          <button
                            className="btn btn-danger"
                            onClick={(e) => {
                             
                              if (product.quantity > 1) {
                                // console.log(product.quantity-=1)
                                setCounter((product.quantity  -= 1));
                                setProductPrice(product.price * product.quantity);
                              }
                            }}
                          >
                            -
                          </button>
                          <button className="btn ">{product.quantity}</button>
                          <button
                            className="btn btn-primary"
                            onClick={(e) => {
                              setCounter((product.quantity += 1));
                              setProductPrice(product.price * product.quantity);
                              
                            }}
                          >
                            +
                          </button>
                        </div>
                        </div>
      
                  </div>
              
              </div>
          </div>
            //  )
             
          //  }
        //  })
       }
        </div>
    )
}

export default ProductDetails
