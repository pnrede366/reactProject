import React, { useEffect, useState } from 'react'
import axios from "axios";
import '../Assets/Product.css'

const Products = (props) => {

      const [Data, setData] = useState([])
      const [Cart, setCart] = useState([])
      const  userLoginId=localStorage.getItem("userLogin")

    useEffect(() => {
        axios.get("http://localhost:3000/product")
          .then((response) => setData(response.data));
          
          console.log(Data);
        }, [])


        const addToCart = (id) =>{

                setCart((old)=>{
                  return [...old,id]
                })
                // console.log(Cart);

                
              }
              
              useEffect(() => {
          axios.patch(`http://localhost:3000/user/${userLoginId}`,{
            cart:Cart
        })
        .then(() => alert('Added to vcart')); 
          
        }, [Cart])


    return (
        <div className="d-flex justify-content-around mt-2"> 

      
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
         }}>Add To Cart</button>

     </div>
    </div>
      )

})
}
</div>
    )
}

export default Products
