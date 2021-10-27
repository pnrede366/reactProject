import React,{createContext, useEffect, useState} from 'react'
import axios from 'axios'
import CartItem from './CartItem'
const Home = () => {
    const [getData, setgetData] = useState([])
 const [Cart, setCart] = useState([])
 let cartId=1;
    let newCol = {
        color: "red",
      };
    
      let productStyle = {
        border: "none",
        boxShadow: "0px 0px 5px 5px rgb(234, 251, 255)",
        width: "20vw",
      };
    useEffect(() => {
        axios.get("http://localhost:3000/product").then((Response) => setgetData(Response.data));
    
        
      }, [getData]);
    

      const addToCart =(id)=>{

            Cart.map((dd)=>{
                if (dd==id) {
                  alert('already exits')
                  cartId=+1;
                }
                else{
                  cartId=1;
                }
                
            })

            if(cartId==1){
            setCart((data)=>{
              // console.log(i);
          // console.log(...data==id);      
              
              return  [...data,id]
            })
          }

        // console.log(Cart);
      }
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
                  <button style={{
                border:'1px solid white',
                backgroundColor:'blue',
                color:'white',
                width:'100%'
    
              }} onClick={()=>{
                addToCart(dd.id)
              }}>ADD TO CART </button>
                 
                </div>
              </div>
);
          })}
        </div>
      </div>
    );

    
}

export default Home;
