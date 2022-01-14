import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Route, useHistory } from "react-router";


const CartItem = (props) => {
 
  const userLoginId = localStorage.getItem("userLogin");
  const [product, setproduct] = useState([]);
  const [myCart, setmyCart] = useState([]);
  const history = useHistory();
  const [Counter, setCounter] = useState(1);
  const [ProductPrice, setProductPrice] = useState(0);
  const [ProdArray, setProdArray] = useState([]);
  const [removeProduct, setremoveProduct] = useState([])
  const [refresh, setrefresh] = useState("")
  let prodnum;
  let productStyle = {
    border: "none",
    boxShadow: "0px 0px 5px 5px rgb(234, 251, 255)",
    width: "20vw",
  };

  useEffect(() => {
 
    axios.get(`https://prcartnew.herokuapp.com/products`).then((response) => {
      console.log(response.data);
      setproduct(response.data.data)
    });
    axios.get(`https://prcartnew.herokuapp.com/cartproducts/${userLoginId}`).then((response) => {
      setmyCart(response.data.data);
      setProdArray(response.data.arr)
      console.log(ProdArray);
      console.log("cart",myCart);
      
    
    });
   
  }, [refresh]);





  const remove = (i) =>{

      axios.post(`https://prcartnew.herokuapp.com/removecart`,{id:i,userid:userLoginId}).then((res)=>{
        alert("removed")
        setrefresh("ok")
        
      })
      console.log(i);
        
      }
      

    
      
    
    


  if (!userLoginId) {
    history.push("/login");
  }

useEffect(() => {
  axios.get(`https://prcartnew.herokuapp.com/cartproducts/${userLoginId}`).then((response) => {
    setmyCart(response.data.data);
    setProdArray(response.data.arr)
  });
}, [removeProduct])
  return ( 
    <div style={{backgroundColor:'#fff'}} >
      <h3 className="text-center" >
        Cart
        <i class="fa text-dark fa-cart-plus" aria-hidden="true"></i>
      </h3>

      <div className="" >
        {
          ProdArray.length==0?<h1 className="bg-warning text-center p-4 text-light">Cart is empty 
          <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
          </h1>:ProdArray.map((dd, i) => {
          
       
            return (
              <div className="border-bottom  d-flex justify-content-around align-items-center py-4 flex-wrap" data-aos="zoom-in" >
                      <div key={i} >
                        <div className="text-center img-fluid " >
                         
                          <img
                            className="w-75 mx-auto mt-2 " style={{width:"100%",height: "20vh"}}
                            src={dd.img}
                            alt=""
                          />
                          
                          <div className="">{dd.name}</div>
                          <div className="">{dd.price} ₹</div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4 col-12 d-flex justify-content-center flex-column align-items-center  ">
                        <div className="d-flex ">
                          <button
                            className="btn btn-danger"
                            onClick={(e) => {
                             
                              if (dd.quantity > 1) {
                                // console.log(dd.quantity-=1)
                                setCounter((dd.quantity  -= 1));
                                setProductPrice(dd.price * dd.quantity);
                              }
                            }}
                          >
                            -
                          </button>
                          <button className="btn ">{dd.quantity}</button>
                          <button
                            className="btn btn-primary"
                            onClick={(e) => {
                              setCounter((dd.quantity += 1));
                              setProductPrice(dd.price * dd.quantity);
                              
                            }}
                          >
                            +
                          </button>
                        </div>
      
                        <div className="my-5 ">
                          <h6>Total Price: {dd.price * dd.quantity}</h6>
      
                          {}
                        </div>
                        <div>
                          {" "}
                          <button
                            className=" btn btn-outline-primary"
                            onClick={() => {
                              history.push("/productDetails", {'id': dd._id,'quantity':Counter});
                            }}
                          >
                           
                            View Product
                          </button>
                        </div>
                      </div>
                      <div className=" d-flex align-items-center  ">
                        <button
                          class="btn btn-warning m-2"
                          onClick={() => {
                            history.push("/placeorder",{'id': dd._id,'quantity':Counter});
                          }}
                        >
                          Buy Now
                        </button>
                        <button className="btn btn-dark" onClick={()=>{
                          remove(dd._id)
                        }}>
                          Remove <i class="fa fa-trash text-danger" aria-hidden="true"></i>
                        </button>
                      
                      </div>
                    </div>
            );
            // }+
            
            
          })
        }
       
      </div>
    </div>
   
  );
};

export default CartItem;
