import React from 'react';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

import HeaderContainer from '../containers/HeaderContainer';

const AboutPage = () => {
  return (
    <div className="container">
      <HeaderContainer />

      <ListGroup>
        <ListGroupItem>
          <h4>Version</h4>
          <small>2.0.0</small>
        </ListGroupItem>
      </ListGroup>

    </div>
  );
};

export default AboutPage;
