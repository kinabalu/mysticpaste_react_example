import React, { PropTypes } from 'react';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';

const Header = ({transitionToNewPastePage, transitionToHistoryPage, transitionToAboutPage}) => {
		return (
      <Navbar inverse fixedTop fluid>
				<Navbar.Header>
					<Navbar.Toggle />
				</Navbar.Header>
        <Navbar.Collapse>
        <Nav>
					<NavItem onClick={transitionToNewPastePage}><i className="fa fa-plus" aria-hidden="true"></i> New Paste</NavItem>
          <NavItem onClick={transitionToHistoryPage}><i className="fa fa-history" aria-hidden="true"></i> History</NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
	);
};

Header.propTypes = {
  transitionToAboutPage: PropTypes.func.isRequired,
  transitionToNewPastePage: PropTypes.func.isRequired,
  transitionToHistoryPage: PropTypes.func.isRequired
};

export default Header;
