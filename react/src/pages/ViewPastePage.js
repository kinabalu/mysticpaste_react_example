import React from 'react';

import HeaderContainer from '../containers/HeaderContainer';
import ViewPasteContainer from '../containers/ViewPasteContainer';

const ViewPastePage = (props) => {

  return (
    <div>
      <HeaderContainer />

      <ViewPasteContainer pasteId={props.params.id} />
    </div>
  );
};

export default ViewPastePage;
