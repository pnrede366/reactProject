import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "./ContextData";
import Products from "./Products";
import axios from "axios";
import '../Assets/Product.css'
import { Toast,Row,Col,Button,ToastContainer } from "react-bootstrap";
import LandingPage from "./LandingPage";
const Home = () => {
  const [show, setShow] = useState(false)
  const [Data, setData] = useState([])
  const [Cart, setCart] = useState([])
  const [OldCart, setOldCart] = useState([])
  const [position, setPosition] = useState('bottom-end');
  const  userLoginId=localStorage.getItem("userLogin")
  const history = useHistory()
 
useEffect(() => {
    axios.get("http://localhost:3000/product")
      .then((response) => setData(response.data)      
           );
           axios.get(`http://localhost:3000/user/${userLoginId}`).then((response)=>{
            setCart(response.data.cart)
            // console.log(response.data.order);
           })

    }, [])

    const addToCart = (id) =>{
      if (!userLoginId) {
        history.push("/login");
      }
            setCart((old)=>{
              return [...old,id]
            })
              setShow(true)
            // console.log(Cart);

            
            
          }

useEffect(() => {

  axios.patch(`http://localhost:3000/user/${userLoginId}`,{
    cart:Cart
  })
}, [Cart])

       
      

return (
<div  >
<LandingPage/>
<div className="d-flex justify-content-between pt-5 px-2 flex-wrap mainHome"> 

  
{
  Data.map((dd,i)=>{
    return (
    <div className="pMain mb-5 w-25" key={i}>
  
<div className="card pCard p-1"  style={{backgroundColor:'#fff'}}>
   <div className="card-header">
   <img className="pImg" src={dd.path}  style={{height:'12rem'}}/>
   </div>
    <div className="pTitle m-1">{dd.name}</div>    
     <div className="pPrice m-1" >Price: ₹ <span className="text-danger">{dd.price}</span> </div>
    <div className=" btn-group buttonGroup w-100 mt-2" >
    <button className=" btn btn-outline-danger " onClick={()=>{
                                history.push("/productDetails", {'id': dd.id,'quantity':dd.quantity});
                              }}>Buy Now <i class="fa fa-shopping-bag" aria-hidden="true"></i></button>
   <button className=" btn btn-outline-primary " onClick={()=>{
             addToCart(dd.id)
         }}>Add To WishList <i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
    
        </div>
     </div>
  </div> 
   ) 
  
})
}
</div>
  
<Row>
<div style={{position:'relative',bottom:'0rem'}}>
      <Col xs={6}>
     <ToastContainer position={position} className="m-5 position-absolute">
     <Toast position={position} onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
              />
            <strong className="me-auto">PrCart</strong>
          </Toast.Header>
          <Toast.Body>Item Added To Cart 
            <i class="fa fa-cart-plus text-primary" aria-hidden="true"></i>
            </Toast.Body>
        </Toast>
     </ToastContainer>
      </Col>
</div>
      
    </Row>
  

            </div>
)
}


export default Home;
