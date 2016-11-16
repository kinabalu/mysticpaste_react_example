import React, { PropTypes } from 'react';
import Header from '../components/Header';

class HeaderContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Header />
    );
  }
}


HeaderContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

export default HeaderContainer;
