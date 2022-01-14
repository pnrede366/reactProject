import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Products from "./Products";
import axios from "axios";

import { getProducts } from '../Action/CatAction';
import { Toast,Row,Col,Button,ToastContainer } from "react-bootstrap";
import LandingPage from "./LandingPage";
import { useDispatch, useSelector } from "react-redux";
import Aos from "aos"
const Home = () => {
  const [show, setShow] = useState(false)
  const [Data, setData] = useState([])
  const [Cart, setCart] = useState("")
  const [OldCart, setOldCart] = useState("")
  const [position, setPosition] = useState('bottom-end');
  const  userLoginId=localStorage.getItem("userLogin")
  const history = useHistory()
  const selector = useSelector(state => state.searchReducer)
  const catSelector = useSelector(state => state.getProductsReducer)

 const dispatch = useDispatch()
useEffect(() => {

dispatch(getProducts(""))

    axios.get("https://prcartnew.herokuapp.com/products")
      .then((response) => setData(response.data.data)      
           );

           axios.get("https://prcartnew.herokuapp.com/cart")
      .then((response) => console.log(response)    
           );
          
  
    }, []) 

    const addToCart = (id) =>{
    
      if (!userLoginId) {
        history.push("/login");
      }
      else{

      
      axios.post("https://prcartnew.herokuapp.com/checkcart",{
        userid:userLoginId,
        productid:id,
        quantity:0
           })
      .then((response) =>{ 


        if (!response.data.success) {
          
          axios.post(`https://prcartnew.herokuapp.com/cart/`,{
         
            userid:userLoginId,
                productid:id,
                quantity:0
            
          }).then(()=>{
      
          alert("added to cart")
          })
        }
        else{
          alert("already in cart")

        }
        setOldCart(response.data.success)
        
      }
      );
    }
        
            // console.log(Cart);

            
            
          }

     
      

return (
<div  >
<LandingPage/>
{catSelector?<h1>|{catSelector}</h1>:<h1>|Products</h1>}
<div id="productPage"  data-aos="fade-up" > 

  
{
  Data.filter((val) => {
    // console.log(selector);
    if (selector == "") {
      // console.log(search);
      return val;
    } else if (
      val.name.toLowerCase().includes(selector.toLowerCase())
    ) {
      
      // console.log(search.toLowerCase);
      return val;
    }
  }).map((dd,i)=>{
    
    if (dd.category==catSelector) {
    
    return (
      
            
          
      <div  className="card text-center p-1 bg-light " id="cardId">
         
      <div style={{cursor :"pointer"}} onClick={()=>{
      history.push("/productDetails", {'id': dd._id});
    }} className="py-3 px-5">
        <img src={dd.img} 
        alt="" style={{width:"100%",height:"20vh"}} />
    </div>
    <div  className="uppercase">
        {dd.name}
    </div>
    <div className="descr mx-auto my-1" style={{width:"10rem",height:"1rem",overflow:"hidden"}}>
        {dd.descr}
    </div>
    <div className="d-flex mx-auto">
        <h2 className="productPrice">{dd.price}</h2> <h2>₹</h2>
    </div>
    
    <div>
        
       
    </div>
  

    
    
    <div className="d-flex justify-content-center align-items-center ">
        <button className="btn btn-dark rounded-pill mx-2 my-2" onClick={()=>{
          setCart(dd._id)
          addToCart(dd._id)
        }}>
            <span>add to cart <i class="fa fa-cart-plus text-danger" aria-hidden="true"></i></span>
        </button>
        
    </div>
    
  </div>
     
)}
else if(catSelector==""){

  return (
    
     
           

      <div  className="card text-center p-1 bg-light " id="cardId">
         
        <div style={{cursor :"pointer"}} onClick={()=>{
        history.push("/productDetails", {'id': dd._id});
      }} className="py-3 px-5">
          <img src={dd.img} 
          alt="" style={{width:"100%",height:"20vh"}} />
      </div>
      <div  className="uppercase">
          {dd.name}
      </div>
      <div className="descr mx-auto my-1" style={{width:"10rem",height:"1rem",overflow:"hidden"}}>
          {dd.descr}
      </div>
      <div className="d-flex mx-auto">
          <h2 className="productPrice">{dd.price}</h2> <h2>₹</h2>
      </div>
      
      <div>
          
         
      </div>
    

      
      
      <div className="d-flex justify-content-center align-items-center ">
          <button className="btn btn-dark rounded-pill mx-2 my-2" onClick={()=>{
            setCart(dd._id)
            addToCart(dd._id)
          }}>
              <span>add to cart <i class="fa fa-cart-plus text-danger" aria-hidden="true"></i></span>
          </button>
          
      </div>
      
    </div>
   
)
}


   
  })
}

</div>


</div>     
)
}


export default Home;
