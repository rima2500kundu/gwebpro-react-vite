import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <div className="container-fluid header_nav d-flex align-center justify-content-between">
                <div className="logo">
                    <Link to="/">logo</Link>
                </div>

                <div className="nav_menu">
                    <ul>
                        <li><Link to="/">Services</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </div>

                <div className=''>
                    <ul>
                        <li><Link to="/">Get a Quote</Link></li>
                        <li><Link to="/">Request For Proposal</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
