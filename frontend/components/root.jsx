import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import TracksIndexContainer from './tracks/tracks_index_container';

const Root = ({ store }) => (
    <Provider store={store}>
      <Router history={hashHistory}>
	<Route path="/" component={App}>
	  <IndexRoute component={TracksIndexContainer}/>
	</Route>
      </Router>
    </Provider>  
);

export default Root;
