import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import AdminPanel from "./Admin/AdminPanel";
import AdminDashboard from "./Admin/AdminDashboard";
import Home from "./Home";
import Userlogin from "./Userlogin";
import Signup from "./Signup";
import UserDashboard from "./UserDashboard";
import UserAccount from "./UserAccount";
import Orders from "./Orders";
import Products from "./Products";
import CartItem from './CartItem'
import ProductDetails from "./ProductDetails";
import Placeorder from "./Placeorder";
import OrderSuccess from "./OrderSuccess";

import { useState } from 'react'

import prcart from "../Assets/images/Prcart.png"
import {useDispatch,useSelector} from "react-redux"
import { searchText } from '../Action/Action';
import { getProducts } from '../Action/CatAction';

const NewNavbar = () => {
  const [state, setstate] = useState({toggle:true})
  const [search, setsearch] = useState("")

  const dispatch = useDispatch()
  

   const Toggle = () => {
        setstate({toggle:!state.toggle})
    }
    return (
        <div >
            <Router>

                      <>
              <div className="navBar d-md-flex align-items-center" >
                   <div className="d-flex  w-md-25 w-xs-100 justify-content-between">
                          <Link to="/" > 
          
                              <img  className='mx-5  '  style={{height:"2rem"}} src={prcart} />
                          </Link>
                   <button onClick={Toggle}>
                     
                    <i class="fa fa-bars" aria-hidden="true"></i>
                    </button>
                   </div>
                   {state.toggle?<div  className="w-100" >
                        <div className='d-flex align-items-md-center justify-content-around flex-column flex-md-row align-items-start justify-content-md-around'> 
                        <div href="#" className='w-75 d-flex  position-relative '>
                            <input type="text" className='form-control' placeholder='search product' onChange={(e)=>{
                              setsearch(e.target.value)
                              dispatch(searchText(e.target.value))
                            }} />
                            <i className="fa fa-search position-absolute text-primary" style={{right:"1rem",top:"1.7rem"}}  aria-hidden="true"></i>
                        </div>
                       <div className='d-flex justify-content-around w-50 flex-column flex-md-row' >
                       <div href="#"><h4>
                       <Link to="/" onClick={()=>{
dispatch(getProducts(""))
                                      }               } className="text-light text-decoration-none">
           Home
           </Link>
                        </h4></div>
                       <div href="#"><h4>
                       <Link to="/AdminPanel" className="text-light text-decoration-none">
           Admin
           </Link>
                        </h4></div>

                       <div href="#"><h4>
                       <Link to="/login"  className="text-light text-decoration-none">
          Login
          </Link>
                           </h4></div>
                        <div href="#" >
                        <Link  to="/cart"  className="text-light text-decoration-none d-flex align-items-center">
                        <h4> Cart
                            </h4> <i class="fa fa-2x fa-cart-plus" aria-hidden="true"></i>
                            </Link>
                            </div>
                       </div>
                        </div>
                    </div>:""}
                    
              </div>
          </>
          <Switch>
        <Route path="/AdminPanel">
          <AdminPanel></AdminPanel>
        </Route>
        <Route exact path="/AdminDashboard" component={AdminDashboard} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Userlogin}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/userDashboard" component={UserDashboard}></Route>
        <Route path="/userAccount" component={UserAccount}></Route>
        <Route path="/orders" component={Orders}></Route>
        <Route path="/product" component={Products}></Route>
        <Route path="/cart" component={CartItem}></Route>
        <Route path="/productDetails" component={ProductDetails}></Route>
        <Route path="/placeorder" component={Placeorder}></Route>
        <Route path="/ordersuccess" component={OrderSuccess}></Route>
        <Route path="/product" component={Products}></Route>

      </Switch>
</Router>
        </div>
    )
}

export default NewNavbar
