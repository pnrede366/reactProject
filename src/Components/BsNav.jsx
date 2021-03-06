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





const BsNav = () => {
  
    return (
      <Router>
        <div>
     
     <Navbar bg="light" expand="lg" className="p-3">
  <Container className="navConatiner">
    <Navbar.Brand className="text-dark">PrCart</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto d-flex justify-content-around w-100 " >
        <Nav.Link className="text-dark" >           
         <Link to="/" className="text-dark text-decoration-none"> 
        Home
         </Link>
        </Nav.Link>
        <Nav.Link className="text-dark">
        <Link to="/AdminPanel" className="text-dark text-decoration-none">
           Admin
           </Link>
        </Nav.Link>
        
        <Nav.Link  className="text-dark">
        <Link to="/login"  className="text-dark text-decoration-none">
          Login
          </Link>
        </Nav.Link>

        <Nav.Link  >
        <Link  to="/cart"  className="text-dark text-decoration-none">
          WishList <i class="fa fa-cart-plus text-dark" aria-hidden="true"></i>
          </Link>
        </Nav.Link>

       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


<div>
  
</div>
     
     
            
        </div>
        </Router>
    )
}

export default BsNav
     
     
     
     
