import React, { PropTypes } from 'react';
import { Well, Button } from 'react-bootstrap';

import LanguageSelect from './LanguageSelect';

const ActionBar = ({handleChange, createPaste, code, language}) => {

  return (
    <Well>
      <Button bsStyle="primary" disabled={!code} onClick={createPaste}>Create Paste</Button>

      <div className="pull-right">
        <LanguageSelect handleChange={handleChange} language={language} />
      </div>
    </Well>
  );
};

ActionBar.propTypes = {
  //
};


export default ActionBar;
