import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as pasteActions from '../actions/pasteActions';

import { Well, Button, FormGroup, FormControl } from 'react-bootstrap';
import Highlight from 'react-highlight';

import PasteEntry from '../components/PasteEntry';

class ViewPasteContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.loadPasteById(this.props.pasteId);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    console.log(this.props);

    if(!this.props.paste.paste) {
      return (
        <h1>Loading...</h1>
      )
    }

    let paste = this.props.paste.paste;
    let language = "bash";

    if(paste.language) {
      language = paste.language;
    }

    return (
      <div className="container-fluid">
        <PasteEntry paste={paste} lines_to_show={0}/>
      </div>
    );
  }
}

ViewPasteContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

ViewPasteContainer.propTypes = {
  loadPasteById: PropTypes.func.isRequired,
  pasteId: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPasteById: (pasteId) => {
      dispatch(pasteActions.loadPasteById(pasteId));
    }
  };
};

function mapStateToProps(state) {
  return {
    paste: state.pastes.pastes,
    isAuthenticated: true
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPasteContainer);
