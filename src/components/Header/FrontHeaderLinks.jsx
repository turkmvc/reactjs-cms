import React, { Component } from 'react';
import { NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import data from '../../data';

class FrontHeaderLinks extends Component {
    render() {
        return ( 
                <Nav>
                    {data.menu.map(item => 
                    <NavItem key={item.title} eventKey={item.title} href={ '/#' + item.path}>
                        <i className={"fa " + item.icon}></i> {item.title}
                    </NavItem>)}


                </Nav>  
        );
    }
}

export default FrontHeaderLinks;
