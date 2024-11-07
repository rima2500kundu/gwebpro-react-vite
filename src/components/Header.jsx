import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav>
            <div className="container-fluid header_nav d-flex align-center justify-content-between">
                <div className="logo">
                    <Link to="/">logo</Link>
                </div>

                <div className="nav_menu">
                    <ul>
                        <li><Link to="/services" className={(e)=> {return e.isActive ? "nav-active" : ""}}>Services</Link></li>
                        <li><Link to="/about" className={(e)=> {return e.isActive ? "nav-active" : ""}}>About Us</Link></li>
                        <li><Link to="/contact" className={(e)=> {return e.isActive ? "nav-active" : ""}}>Contact</Link></li>
                    </ul>
                </div>

                <div className=''>
                    <ul>
                        <li><Link to="/get-a-quote">Get a Quote</Link></li>
                        <li><Link to="/">Request For Proposal</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header
