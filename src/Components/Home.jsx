import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "./ContextData";
import Products from "./Products";
import axios from "axios";
import '../Assets/Product.css'
import { Toast,Row,Col,Button,ToastContainer } from "react-bootstrap";
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
            console.log(response.data.order);
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
<div>

<div className="d-flex justify-content-around mt-2 flex-wrap"> 

  
{
Data.map((dd,i)=>{
  return (
    <div className="pMain" key={i}>
<div className="card pCard" >
     <img className="pImg" src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-m127gzkhins/gallery/in-galaxy-m-sm-m127gzkhins-front-black-405435102?$684_547_PNG$" alt="" />
     <div className="pTitle">{dd.name}</div>
     <div className="pPrice" >{dd.price} ₹</div>
     <button className=" btn btn-outline-primary" onClick={()=>{
         addToCart(dd.id)
     }}>Add To WishList</button>

 </div>
</div>
  )
  
})
}
</div>

<Row>
      <Col xs={6}>
     <ToastContainer position={position} className="m-5">
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
      
    </Row>
              </div>
)
}


export default Home;
