import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link as={Link} to="/ManagePackage">Manage Package</Nav.Link>
        <Nav.Link as={Link} to="/AddPackage">Add New Package</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;