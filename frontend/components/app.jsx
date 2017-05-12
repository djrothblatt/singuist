import React from 'react';
import NavContainer from './nav/nav_container';
import TrackNav from './nav/track_nav';

const App = ({children}) => (
    <div>
      <NavContainer />
      <TrackNav />
      {children}
    </div>
);

export default App;
