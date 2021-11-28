import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import Footer from './components/Footer';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes> 
        <Route path='/' exact element={<Home />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/sign-up' element={<SignUp />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
