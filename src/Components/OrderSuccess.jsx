import React, { useState } from 'react'
import { useHistory } from 'react-router';

import { Toast,Row,Col,Button,ToastContainer } from "react-bootstrap";

const OrderSuccess = () => {
    const [show, setShow] = useState(true)
    const [position, setPosition] = useState('bottom-end');
    const history = useHistory();
    const [Time, setTime] = useState(2)
// setTimeout(() => {
    
//     history.push('/')
// }, 20000);

setTimeout(() => {
    
    setTime((num)=>{
            return num-1
    })
}, 20000);

    return (
         <div className=" p-1 text-center  justify-content-center">
                <div class="m-5  d-flex flex-column align-items-center p-5">

<h1 class="">Order Successful</h1>
<div class="d-flex justify-content-center align-items-center my-5 flex-wrap mx-auto">

    <div><img style={{width:'10rem',height:'10rem'}}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fcheckmark-clipart-right-sign-15.png&f=1&nofb=1"
            alt="" class="mr-5" srcset=""/></div>
    <div class="d-flex flex-column justify-content-around font">
        <div class="mt-2" >Your payment has been received.Your order placed successfully it will despatch soon
        </div>
        <div class="mt-5">If you have any query email us <a href="">prdeveloper@gmail.com</a></div>
    </div>
</div>
</div>

        </div>
    )
}

export default OrderSuccess
