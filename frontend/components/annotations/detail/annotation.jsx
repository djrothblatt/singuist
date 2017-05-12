import React from 'react';
import * as UpvotesApiUtil from '../../../util/upvotes_api_util';

class Annotation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        const annotation = this.props.annotation;
        this.state.upvotes = annotation ? annotation.upvotes : 0;
        this.state.upvoted = annotation ? !!annotation.upvote : false;

        this.handleUpvoteClick = this.handleUpvoteClick.bind(this);
    }

    handleUpvoteClick(e) {
        if (this.state.upvoted) {
            this.tickUpvotes(-1);
            UpvotesApiUtil.destroyUpvote(this.props.annotation.upvote.id);
        } else {
            this.tickUpvotes(1);
            UpvotesApiUtil.createUpvote(this.props.annotation, this.props.currentUser);
        };
    }

    tickUpvotes(step) {
        this.setState({
            upvotes: this.state.upvotes + step,
            upvoted: step > 0
        });
    }

    render() {
        const annotation = this.props.annotation;
        const upvotesClassName = annotation.upvoted ? 'upvoted' : '';
        return (
            <div>
              <p dangerouslySetInnerHTML={ { __html: this.props.annotation.body} }/>
              <button onClick={this.handleUpvoteClick}>
                <i className="fa fa-thumbs-up" aria-hidden="true"></i>{this.state.upvotes}
              </button>
            </div>
        );
    }
}

export default Annotation;
