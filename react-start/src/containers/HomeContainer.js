import React from 'react';
// import App from '../components/App';
import HomePanel from '../components/HomePanel';

class HomeContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.name = "Bulgarian People";
    this.description = "Sorry about Donald Trump";
  }

  render() {
    return (
      <div className="container-fluid">
        <HomePanel name={this.name} description={this.description}/>
      </div>
    );
  }
}

HomeContainer.propTypes = {
};

export default HomeContainer;
