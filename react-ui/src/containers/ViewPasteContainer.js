import React, { PropTypes } from 'react';
import pasteApi from '../api/mockPasteApi';

import PasteEntry from '../components/PasteEntry';

class ViewPasteContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    pasteApi.getPasteById(this.props.pasteId)
      .then(paste => {
        this.setState({
          paste: paste
        });
      });
  }

  render() {
    if(!this.state || !this.state.paste) {
      return (
        <h1>Loading...</h1>
      );
    }

    let paste = this.state.paste;
    let language = "bash";

    if(paste.language) {
      language = paste.language;
    }

    return (
      <div className="container-fluid">
        <PasteEntry paste={paste} />
      </div>
    );
  }
}

ViewPasteContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

ViewPasteContainer.propTypes = {
  //pasteId
  //paste
};

export default ViewPasteContainer;
