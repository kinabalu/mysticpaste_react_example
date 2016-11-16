import React, { PropTypes } from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = ({transitionToNewPastePage, transitionToHistoryPage}) => {
		return (
      <Navbar inverse fixedTop fluid>
				<Navbar.Header>
					<Navbar.Toggle />
				</Navbar.Header>
        <Navbar.Collapse>
        <Nav>
					<NavItem onClick={transitionToNewPastePage}><i className="fa fa-plus" aria-hidden="true" /> New Paste</NavItem>
          <NavItem onClick={transitionToHistoryPage}><i className="fa fa-history" aria-hidden="true" /> History</NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
	);
};

Header.propTypes = {
  transitionToNewPastePage: PropTypes.func.isRequired,
  transitionToHistoryPage: PropTypes.func.isRequired
};

export default Header;
