import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import CartItem from "./CartItem";
import { useHistory } from "react-router";
const Home = () => {
  const [getData, setgetData] = useState([]);
  const [Cart, setCart] = useState([]);
  const [user, setuser] = useState([])
  const history = useHistory();
  const userLoginId = localStorage.getItem("userLogin");
  let cartId = 1;
  let newCol = {
    color: "red",
  };
let num;
  let productStyle = {
    border: "none",
    boxShadow: "0px 0px 5px 5px rgb(234, 251, 255)",
    width: "20vw",
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/cart")
      .then((Response) => setuser(Response.data));
    }, []);
    
    
    useEffect(() => {
      axios
        .get("http://localhost:3000/product")
        .then((Response) => setgetData(Response.data));
      
  }, [getData])
  
  const addToCart = (id) => {
    if (!userLoginId) {
      history.push("/login");
    }
    console.log(id);

    // if(userLoginId==Data.userId&&){
      
    // }
    
    user.map((dd,i)=>{
      console.log(dd);
      if(userLoginId==dd.userId&&dd.cart!=id){

        axios.post('http://localhost:3000/cart',{
          userId:userLoginId,
          cart:id
        }).then(()=>{
          alert('added to cart')
          console.log("added userLoginId==dd.userId&&dd.cart!=id");
        })
      }
      else if (userLoginId!=dd.userId) {

        if (userLoginId==dd.userId) {
          let pp=1;
          pp=1;
          console.log(pp);
          
        }

    axios.post('http://localhost:3000/cart',{
      userId:userLoginId,
      cart:id
    }).then(()=>{
      alert('added to cart')
      console.log("added to cart userLoginId!=dd.userId");
    })}
      else if (userLoginId==dd.userId&&dd.cart==id) {
       alert('already in cart') 
      }
      
  
    })
    
    
  };
  return (
    <div>
      <div>
        <h3 className="text-center" style={newCol}>
          Your Products
        </h3>
      </div>

      <div className="d-flex flex-wrap justify-content-around">
        {getData.map((dd, j) => {
          return (
            <div key={j} className="products">
              <div className="m-2 p-2" style={productStyle}>
                <div className="">
                  <img
                    style={{ width: "100%" }}
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.s6j0uFV2fDG661aVu1BvIAHaFS%26pid%3DApi&f=1"
                    alt=""
                  />
                </div>
                <div>
                  {" "}
                  <h2>{dd.name}</h2>{" "}
                </div>
                <div>
                  {" "}
                  <h6>{dd.descr}</h6>
                </div>
                <div>
                  <h3>{dd.price}</h3>
                </div>
                <button
                  style={{
                    border: "1px solid white",
                    backgroundColor: "blue",
                    color: "white",
                    width: "100%",
                  }}
                  onClick={() => {
                    addToCart(dd.id);
                  }}
                >
                  ADD TO CART{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
