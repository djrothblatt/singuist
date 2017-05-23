import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class TrackNav extends React.Component {
    render() {
        const maybeAddSong = (this.props.currentUser) ? (<Link className="add-song" to="/new-track/">Add A Song</Link>) : (<p className="add-song"/>);
        return (
            <nav className="track-nav">
              <Link to="/" className="index-link">Top Songs</Link>

              <section className='portfolio'>
                <a className='portfolio-link'
                   href='https://www.github.com/djrothblatt'>
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
                <a className='portfolio-link'
                   href='https://www.linkedin.com/in/daniel-rothblatt'>
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </section>
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
