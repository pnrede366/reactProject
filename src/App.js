import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AdminPanel from './Components/Admin/AdminPanel';
import {BrowserRouter as Router , Switch,Link,Route,Redirect,useHistory} from 'react-router-dom';
import AdminDashboard from './Components/Admin/AdminDashboard';
import { UserContext } from './Components/ContextData';
import ProductDetails from './Components/ProductDetails';
import BsNav from './Components/BsNav';
function App() {
  return (
    <Router>
      <BsNav/>      
    </Router>
  );
}

export default App;
