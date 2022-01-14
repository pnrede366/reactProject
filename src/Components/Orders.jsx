import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
const Orders = () => {
  const [Products, setProducts] = useState([]);
  const [Data, setData] = useState([]);
  const history=useHistory()

  const userLoginId = localStorage.getItem("userLogin");
  useEffect(() => {
    axios.get(`https://prcartnew.herokuapp.com/getorders/${userLoginId}`).then((response) => {
      setData(response.data.data);
      console.log("prod", response.data);
    });
    axios
      .get("https://prcartnew.herokuapp.com/products")
      .then((response) => {
        console.log(response);
        setProducts(response.data.data)});
     
  }, []);
  return (
    <div  className="my-3 ">
        <h1 className="text-center"> Your Orders</h1>
        <br />
        <div className="d-flex justify-content-around flex-wrap">
      {Data.map((dd, i) => {
        return Products.map((cc,i)=>{
          if (dd.product==cc._id) {
            
            
          return   (
            // <h1 key={i}>{cc.name}</h1>
            <div onClick={()=>{
              history.push("/productdetails",{'id': cc._id})
            }}>
              {/* <div className="" key={i}>
                <div className="card pCard">
                  <img
                    className="pImg"
                    style={{height:'15rem'}}
                    src={cc.img}
                    alt=""
                  />
               
                  <img src={dd.img} alt="" />
                  <div className="pTitle">Name: {cc.name}</div>
                  <div className="pPrice">Price: {cc.price} ₹</div>
                  <div className="pPrice">Qantity: {dd.quantity} </div>
                </div>
              </div> */}

<div  className="card text-center p-1 bg-light"   id="cardId">
  {/* {catSelector}          */}
          <div className="py-2 px-2">
            <img   src={cc.img} 
            alt="" style={{width:"100%",height:"20vh"}} />
        </div>
        <div className="uppercase">
            {cc.name}
        </div>
        <div className="descr mx-auto my-1">
            {cc.descr}
        </div>
        <div className="d-flex mx-auto">
            <h2 className="productPrice">{cc.price}</h2> <h2>₹</h2>

        </div>
            <div className="pPrice">Qantity: {dd.quantity} </div> 
        
      
              
            </div>
          </div>
            )
          }  
        })}
          )}

     
  
    </div>
  </div>
  )
};

export default Orders;
