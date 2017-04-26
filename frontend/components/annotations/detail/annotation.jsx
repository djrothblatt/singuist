import React from 'react';

class Annotation extends React.Component {
    constructor(props) {
	super(props);
	this.renderHeader = this.renderHeader.bind(this);
    }

    componentDidMount() {
	this.props.fetchAnnotation(this.props.params.annotationId);
    }

    renderHeader() {
	return;
    }
    
    render() {
	return (
	    <section className="annotation-detail">
	      {this.renderHeader()}
	      <p
		 className="body"
		 dangerouslySetInnerHTML={ { __html: this.props.annotation.body} }/>
	    </section>
	);
    }
}

export default Annotation;
