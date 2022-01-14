import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AdminPanel from './Components/Admin/AdminPanel';
import {BrowserRouter as Router , Switch,Link,Route,Redirect,useHistory} from 'react-router-dom';
import AdminDashboard from './Components/Admin/AdminDashboard';
import { UserContext } from './Components/ContextData';
import ProductDetails from './Components/ProductDetails';
import BsNav from './Components/BsNav';
import LandingPage from './Components/LandingPage';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import NewNavbar from './Components/NewNavbar';
import Category from './Components/Category';
import Aos from 'aos'
import { useEffect, useState } from 'react';
import Loader from './Components/Loader';

function App() {
  const [loading, setloading] = useState(false)

  useEffect(() => {
  
    setloading(true)
    setTimeout(() => {
      setloading(false)

    }, 200);
  }, [])
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <Router>
      {
        loading? <Loader></Loader>:<div style={{backgroundColor:"rgba(22, 104, 255, 0.192)"}} >
  
        <NewNavbar/>
      
          <Footer  />
          </div>
      }
    </Router>
  );
}

export default App;
