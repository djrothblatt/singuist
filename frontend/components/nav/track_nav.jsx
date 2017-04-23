import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
//import NewTrackForm from '../tracks/new_form';

class TrackNav extends React.Component {
    render() {
	const maybeAddSong = (this.props.currentUser) ? (<Link to="/new-track/">Add A Song</Link>) : (<div />);
	return (
	    <nav className="track-nav">
	      <Link to="/">Top Songs</Link>
	      {maybeAddSong}
	    </nav>
	);
    }
}

const mapStateToProps = ({session}) => ({currentUser: session.currentUser});
const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackNav);
