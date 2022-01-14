import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getProducts } from '../Action/CatAction';

const Products = (props) => {
    console.log(props.location.state.cat);
    const [Cart, setCart] = useState([])
    const product = useSelector(state => state.getProductsReducer)
    const dispatch = useDispatch()
    dispatch(getProducts())
    console.log(product);
 return(
     <div>
         {
                product.map((dd,i)=>{
    
                    return (
                      //     <div className="pMain mb-5 w-25" key={i}>
                      
                      // <div className="card pCard p-1"  style={{backgroundColor:'#fff'}}>
                      //    <div className="card-header">
                      //    <img className="pImg" src={dd.path}  style={{height:'12rem'}}/>
                      //    </div>
                      //     <div className="pTitle m-1">{dd.name}</div>    
                      //      <div className="pPrice m-1" >Price: ₹ <span className="text-danger">{dd.price}</span> </div>
                      //     <div className=" btn-group buttonGroup w-100 mt-2" >
                      //     <button className=" btn btn-outline-danger " onClick={()=>{
                        //                                 history.push("/productDetails", {'id': dd.id,'quantity':dd.quantity});
                        //                               }}>Buy Now <i class="fa fa-shopping-bag" aria-hidden="true"></i></button>
                        //    <button className=" btn btn-outline-primary " onClick={()=>{
                          //              addToCart(dd.id)
                          //          }}>Add To WishList <i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
                          
                          //         </div>
                          //      </div>
                          //   </div> 
                            
                          <div>
                        <div  className="card text-center p-1 bg-light" id="cardId">
                          
                          <div className="py-2">
                            <img src={dd.path} 
                            alt="" style={{width:"10vw",height:"20vh"}} />
                        </div>
                        <div className="uppercase">
                            {dd.name}
                        </div>
                        <div className="descr mx-auto my-1">
                            {dd.descr}
                        </div>
                        <div className="d-flex mx-auto">
                            <h2 className="productPrice">{dd.price}</h2> <h2>₹</h2>
                        </div>
                        
                        <div>
                            
                           
                        </div>
                      
                
                        
                        
                        <div className="d-flex  align-items-center ">
                            <button className="btn btn-dark rounded-pill mx-2 my-2" onClick={()=>{
                              setCart(dd._id)
                              
                            }}>
                                <span>wishlist </span>
                                <i className="fa fa-heart  text-danger " aria-hidden="true"></i>
                            </button>
                            
                            <button className="btn-danger btn rounded-pill mx-3"  onClick={()=>{
                           
                            }}>Buy Now </button>
                        </div>
                        
                      </div>
                      </div>
                )
                
                
                   
                  })

}
        
     </div>
 )
}
 
export default Products
