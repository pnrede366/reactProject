import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
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
import '../Assets/BsNav.css'

const BsNav = () => {
    return (
      <Router>
        <div>
     
     <Navbar bg="dark" expand="lg" >
  <Container className="navConatiner">
    <Navbar.Brand className="text-light">PrCart</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" >
        <Nav.Link className="text-light" >           
         <Link to="/" className="text-light text-decoration-none"> 
        Home
         </Link>
        </Nav.Link>
        <Nav.Link className="text-light">
        <Link to="/AdminPanel" className="text-light text-decoration-none">
           Admin
           </Link>
        </Nav.Link>
        
        <Nav.Link  className="text-light">
        <Link to="/login"  className="text-light text-decoration-none">
          Login
          </Link>
        </Nav.Link>

        <Nav.Link  >
        <Link  to="/cart"  className="text-light text-decoration-none">
          WishList
          </Link>
        </Nav.Link>

       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
     
     
            
        </div>
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
    )
}

export default BsNav
     
     
     
     
