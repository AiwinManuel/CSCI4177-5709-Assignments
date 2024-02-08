import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import './NavbarCSS.css'

class Navbar extends Component{

   render(){
    return(
        <nav className="navbar navbar-expand-lg " style={{backgroundColor:'black'}}>
        <div className="container-fluid ">
        
          <div className="collapse navbar-collapse justify-content-end me-4" id="navbarNav">
          <Link to="/" className="navbar-brand ps-5" style={{ fontSize: "200%", color: "white", textDecoration: "none",marginLeft: '90px' }}>
            Home
          </Link>
            <ul className="navbar-nav" style = {{marginRight: "150px", fontSize: "100%"}} >
              <li className="">
                <Link to="/about" style={{color: "white" }} className="nav-link font-120 white pointer px-4" aria-current="page">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" style={{color: "white" }} className="nav-link font-120 white pointer px-4" >Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" style={{color: "white" }} className="nav-link font-120 white pointer px-4" >FAQ</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" style={{color: "white" }} className="nav-link font-120 white pointer px-4" >Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
   }
   
}

export default Navbar;