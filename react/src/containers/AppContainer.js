import React, { PropTypes } from 'react';
import App from '../components/App';

class AppContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    // props.checkStoredCredentials();
  }

  render() {
    return (
        <App>
          {this.props.children}
        </App>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.node,
};

export default AppContainer;
