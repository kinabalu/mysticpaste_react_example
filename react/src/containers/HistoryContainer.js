import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as pasteActions from '../actions/pasteActions';

import PasteEntry from '../components/PasteEntry';

class HistoryContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onViewPaste = this.onViewPaste.bind(this);
  }

  componentWillMount() {
    this.props.loadAllPastes();
  }

  onViewPaste(pasteId) {
    this.context.router.push('/view/' + pasteId);
  }

  render() {
    if(!this.props.pastes) {
      return (
        <h1>Loading...</h1>
      );
    }
    let pastes = this.props.pastes;

    return (
      <div className="container-fluid">
        {pastes.map(paste =>
          <PasteEntry key={paste.id} paste={paste} lines_to_show={5} onViewPaste={this.onViewPaste} />
        )}
      </div>
    );
  }
}

HistoryContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

HistoryContainer.propTypes = {
  loadAllPastes: PropTypes.func.isRequired,
  pastes: PropTypes.array.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadAllPastes: () => {
      dispatch(pasteActions.loadAllPastes());
    }
  };
};

function mapStateToProps(state) {
  let pastes = [];

  if(state.pastes.pasteList.pastes) {
    pastes = state.pastes.pasteList.pastes;
  }

  return {
    pastes: pastes
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer);
