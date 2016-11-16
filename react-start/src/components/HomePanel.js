import React from 'react';

import { Jumbotron } from 'react-bootstrap';

const HomePanel = ({name, description}) => {
  return (
    <Jumbotron>
      <h1>Hello {name}</h1>
      <p>{description}</p>
      <p>We need Rakia more than ever</p>
    </Jumbotron>
  );
};

HomePanel.propTypes = {
};

export default HomePanel;
