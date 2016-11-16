import React, { PropTypes } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

// rows: 20
const CodeArea = ({handleChange}) => {

  return (
    <FormGroup controlId="code">
      <FormControl onChange={handleChange} bsSize="large" rows="20" componentClass="textarea" placeholder="Code here..." />
    </FormGroup>
  );
};

CodeArea.propTypes = {
  //
};


export default CodeArea;
