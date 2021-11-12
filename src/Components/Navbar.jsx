import React, { useEffect } from "react";
import "../Assets/Navbar.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import AdminPanel from "./Admin/AdminPanel";
import axios from "axios";
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

const Navbar = () => {
  return (
    <Router>
      <nav className="d-flex justify-content-between w-100">
        <div>
          <li>
            <Link to="/"> Home</Link>
          </li>
        </div>
        <div className="d-flex w-25 justify-content-around">
          <li>
            <a href="">PrCart</a>
          </li>
          <li>
            <Link to="/AdminPanel"> Admin</Link>
          </li>
        </div>
        <div className="d-flex w-25 justify-content-around">
          <li>
            <Link to="/login" >Login</Link>
          </li>
         
        </div>
        <div className="d-flex w-25 justify-content-around">
          <li>
            <Link to="/cart" >WishList</Link>
          </li>
         
        </div>
      </nav>
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

      </Switch>
    </Router>
  );
};

export default Navbar;
