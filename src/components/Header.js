import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';


const Header =(props)=>{
    return(
        <div className="Header">
            <Nav>
                <NavItem>
                    <Link active="active" to="/home">Home</Link>
                </NavItem>
                <NavItem>
                <Link active="active" to="/TvSHows">Tv SHows</Link>
                </NavItem>
                <NavItem>
                <Link active="active" to="/Movies">Movies</Link>
                </NavItem>
                </Nav>
        </div>
    );
}

export default Header;