import React from 'react';
import { Link } from 'react-router';
import * as UpvotesApiUtil from '../../../util/upvotes_api_util';

class Annotation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        const annotation = this.props.annotation;
        this.state.upvotes = annotation ? annotation.upvotes : 0;
        this.state.upvoted = annotation ? !!annotation.upvote : false;

        this.handleUpvoteClick = this.handleUpvoteClick.bind(this);
        this.tickUpvotes = this.tickUpvotes.bind(this);
    }

    handleUpvoteClick(e) {
        let annotation = this.props.annotation;
        if (this.state.upvoted) {
            this.tickUpvotes(-1);
            UpvotesApiUtil.destroyUpvote(annotation.upvote.id)
                .then(() => this.props.fetchAnnotation(annotation.id));
        } else {
            this.tickUpvotes(1);
            UpvotesApiUtil.createUpvote(this.props.annotation, this.props.currentUser)
                .then(() => this.props.fetchAnnotation(this.props.annotation.id));
        };
    }

    tickUpvotes(step) {
        this.setState({
            upvotes: this.state.upvotes + step,
            upvoted: step > 0
        });
    }

    render() {
        const annotation = this.props.annotation,
              upvotesClassName = annotation.upvoted ? 'upvoted' : '',
              upvoteTag = this.props.currentUser ? (
            <button className={`upvote ${upvotesClassName}`} onClick={this.handleUpvoteClick}>
              <i className="fa fa-thumbs-up" aria-hidden="true"></i>
            </button>
        ) : (
            <p className="upvote">
              <i className="fa fa-thumbs-up" aria-hidden="true"></i>
            </p>
        );

        return (
            <div className='annotation-detail'>
              <p dangerouslySetInnerHTML={ { __html: annotation.body} }/>
              <div className=''>
                {upvoteTag}
                <p>{this.state.upvotes}</p>
                <Link
                   to={`/tracks/${this.props.params.trackId}/edit-annotation/${this.props.annotation.id}/`}
                   className='edit-button'>Edit</Link>
              </div>
            </div>
        );
    }
}

export default Annotation;
