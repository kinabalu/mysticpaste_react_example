import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import NewPastePage from './pages/NewPastePage';
import ViewPastePage from './pages/ViewPastePage';
import NotFoundPage from './pages/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={NewPastePage}/>
    <Route path="new" component={NewPastePage} />
    <Route path="view/:id" component={ViewPastePage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
