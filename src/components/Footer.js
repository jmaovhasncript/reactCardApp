import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";
const Footer =(props)=>{
    return(
        <div className="Header">
            <Nav>
                <NavItem>
                    <Link to="/Privacy">Terms and Privacy Notice</Link>
                </NavItem>
                <NavItem>
                    <Link to="/feedback">Terms and Privacy Notice</Link>
                </NavItem>
                <NavItem>
                <Link to="/Help">Help</Link>
                </NavItem>
                </Nav>
        </div>
    );
}

export default Footer;