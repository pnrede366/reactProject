import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

const CartItem = (pops) => {
    const  userLoginId=localStorage.getItem("userLogin")
      const [Data, setData] = useState([])
        const [newData, setNewData] = useState([])
        const [product, setproduct] = useState([])
      const history = useHistory()
      let productStyle = {
        border: "none",
        boxShadow: "0px 0px 5px 5px rgb(234, 251, 255)",
        width: "20vw",
      };
    useEffect(() => {
        axios.get(`http://localhost:3000/cart`).then((response)=>{
          setData(response.data)
        })
        axios.get(`http://localhost:3000/product`).then((response)=>{
          setproduct(response.data)
        })
          
        
     }, [])



    if(!userLoginId){
            history.push('/login')
    }

    // Data.map((dd,i)=>{
    //   if (userLoginId==dd.userId) {
    //       setNewData(()=>{
    //         return dd
    //       })
    //   }


    // })
    console.log (Data);
    // setNewData(
    // )

    console.log(newData);
    return (
        <div>
                 <div>
        <h3 className="text-center">
          Your Products
        </h3>
      </div>

      <div className="d-flex flex-wrap justify-content-around">
          
        {product.map((dd, j) => {
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
                
                >
                  BUY
                </button>
                </div>
                
                         </div>
          </div>
        
          )
        

        })}
      </div>
        </div>
    )
}

export default CartItem
