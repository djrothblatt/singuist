import React from 'react';
import ClickOutHandler from 'react-onclickout';
import { Link } from 'react-router';
import * as UpvotesApiUtil from '../../../util/upvotes_api_util';

class Annotation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        const annotation = this.props.annotation;
        this.state.upvotes = annotation ? annotation.upvotes : 0;
        this.state.upvoted = annotation ? !!annotation.upvote : false;

        this.back = this.back.bind(this);
        this.handleClickOut = this.handleClickOut.bind(this);
        this.handleUpvoteClick = this.handleUpvoteClick.bind(this);
        this.tickUpvotes = this.tickUpvotes.bind(this);
    }

    componentDidMount() {
        this.props.fetchAnnotation(this.props.params.annotationId);
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

    back() {
        this.props.router.push(`/tracks/${this.props.params.trackId}/`);
    }

    handleClickOut(e) {
        if (e.target.classList.contains('annotation')) {
            const annoId = e.target.getAttribute('value');
            this.props.fetchAnnotation(annoId);
        } else {
            this.back();
        }
    }

    render() {
        const annotation = this.props.annotation,
              upvotesClassName = annotation && annotation.upvoted ? 'upvoted' : '',
              annoIdString = annotation && annotation.id,
              body = annotation && annotation.body,
              trackId = this.props.params.trackId,
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
            <ClickOutHandler onClickOut={this.handleClickOut}>
              <div className='annotation-detail'>
                <p dangerouslySetInnerHTML={ { __html: body } }/>
                <div className='upvotes'>
                  {upvoteTag}
                  <p>{this.state.upvotes}</p>
                </div>
                <Link
                   to={`/tracks/${trackId}/edit-annotation/${annoIdString}/`}
                   className='edit-button'>Edit</Link>
              </div>
            </ClickOutHandler>

        );
    }
}

export default Annotation;
