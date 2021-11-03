import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AdminPanel from './Components/Admin/AdminPanel';
import {BrowserRouter as Router , Switch,Link,Route,Redirect,useHistory} from 'react-router-dom';
import AdminDashboard from './Components/Admin/AdminDashboard';
import { UserContext } from './Components/ContextData';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      
    </div>



    </Router>
  );
}

export default App;
