import React, { PropTypes } from 'react';

import pasteApi from '../api/mockPasteApi';

import CodeArea from '../components/CodeArea';
import ActionBar from '../components/ActionBar';

class NewPasteContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.createPaste = this.createPaste.bind(this);
    this.state = {
      code: '',
      language: 'python'
    };
  }

  createPaste() {
    pasteApi.savePaste({
      code: this.state.code,
      language: this.state.language
    }).then(paste => {
      this.context.router.push('/view/' + paste.id);
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <CodeArea handleChange={this.handleChange} />

        <ActionBar
          handleChange={this.handleChange}
          createPaste={this.createPaste}
          language={this.state.language}
          code={this.state.code} />

      </div>
    );
  }
}

NewPasteContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

NewPasteContainer.propTypes = {
  // paste
};

export default NewPasteContainer;
