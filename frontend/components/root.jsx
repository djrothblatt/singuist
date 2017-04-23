import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import TracksIndexContainer from './tracks/index/tracks_index_container';
import TrackDetailContainer from './tracks/detail/track_detail_container';
import NewTrackForm from './tracks/new_form';

const Root = ({ store }) => (
    <Provider store={store}>
      <Router history={hashHistory}>
	<Route path="/" component={App}>
	  <IndexRoute component={TracksIndexContainer}/>
	  <Route path="/tracks/:trackId/" component={TrackDetailContainer}/>
	  <Route path="/new-track/" component={NewTrackForm}/>
	</Route>
      </Router>
    </Provider>  
);

export default Root;
