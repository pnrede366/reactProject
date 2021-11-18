import React, { useState } from 'react'
import { useHistory } from 'react-router';
import '../Assets/OrderSuccess.css'
import { Toast,Row,Col,Button,ToastContainer } from "react-bootstrap";

const OrderSuccess = () => {
    const [show, setShow] = useState(true)
    const [position, setPosition] = useState('bottom-end');
    const history = useHistory();
    const [Time, setTime] = useState(2)
setTimeout(() => {
    
    history.push('/')
}, 2000);

setTimeout(() => {
    
    setTime((num)=>{
            return num-1
    })
}, 1000);

    return (
         <div className="parent p-1">
                <div class="m-5  d-flex flex-column align-items-center p-5">

<h1 class="">Order Successful</h1>
<div class="d-flex justify-content-between align-items-center my-5">

    <div><img style={{width:'20rem',height:'20rem'}}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fcheckmark-clipart-right-sign-15.png&f=1&nofb=1"
            alt="" class="mr-5" srcset=""/></div>
    <div class="d-flex flex-column justify-content-around font">
        <div class="mt-2" >Your payment has been received.Your order placed successfully it will despatch soon
        </div>
        <div class="mt-5">If you have any query email us <a href="">prdeveloper@gmail.com</a></div>
    </div>
</div>
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
          <Toast.Body>
              Redirecting To Home Page
                <button className="btn btn-danger">{Time}</button>
            </Toast.Body>
        </Toast>
     </ToastContainer>
      </Col>
      
    </Row>
        </div>
    )
}

export default OrderSuccess
