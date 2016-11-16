import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = () => {
		return (
      <Navbar inverse fixedTop fluid>
				<Navbar.Header>
					<Navbar.Toggle />
				</Navbar.Header>
        <Navbar.Collapse>
        <Nav>
					<NavItem><i className="fa fa-plus" aria-hidden="true" /> New Paste</NavItem>
          <NavItem><i className="fa fa-history" aria-hidden="true" /> History</NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
	);
};

export default Header;
