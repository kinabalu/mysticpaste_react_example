import React, { PropTypes } from 'react';
import moment from 'moment';
import './PasteEntry.scss';

import Highlight from 'react-highlight';

const PasteEntry = ({paste}) => {

  let natural_created = moment(paste.created_at).fromNow();

  return (
    <div key={paste.id} className="pasteEntry">
      <Highlight className={paste.language}>
        {paste.code}
      </Highlight>
    </div>
  );
};

PasteEntry.propTypes = {
};


export default PasteEntry;
