import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
const Header =(props)=>{
    return(
        <div className="Header">
            <Nav>
                <NavItem>
                    <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Tv SHows</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Movies</NavLink>
                </NavItem>
                </Nav>
        </div>
    );
}

export default Header;