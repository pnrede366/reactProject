import React, { useEffect } from "react";
import "../Assets/Navbar.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import AdminPanel from "./Admin/AdminPanel";
import axios from "axios";
import AdminDashboard from "./Admin/AdminDashboard";
import Home from "./Home";
import Userlogin from "./Userlogin";
import CartItem from "./CartItem";

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
          <li>
                    <Link to="/cart">
                    Cart

                    </Link>
              </li>
        </div>
      </nav>
      <Switch>
        <Route path="/AdminPanel">
          <AdminPanel></AdminPanel>
        </Route>
        <Route exact path="/AdminDashboard" component={AdminDashboard} />
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={CartItem} />
        <Route path="/login" component={Userlogin}></Route>
        
      </Switch>
    </Router>
  );
};

export default Navbar;
