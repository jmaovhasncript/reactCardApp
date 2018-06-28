import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
const Footer =(props)=>{
    return(
        <div className="Header">
            <Nav>
                <NavItem>
                    <NavLink href="#">Terms and Privacy Notice</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Send us feedback</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Help</NavLink>
                </NavItem>
                </Nav>
        </div>
    );
}

export default Footer;