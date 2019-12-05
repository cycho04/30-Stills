import React from 'react';
import PropTypes from 'prop-types';


class ImageCard extends React.Component {

    constructor(props){
        super(props);
        this.state = { spans: 0 };
        this.imgRef = React.createRef();
    }

    componentDidMount(){
        this.imgRef.current.addEventListener('load', this.setSpan)
    }

    setSpan = () => {
        const height = this.imgRef.current.clientHeight;
        const spans = Math.ceil(height/10);

        this.setState({ spans: spans})
    }

    render(){
        const { description, urls: {regular}, links: {download}, alt_description } = this.props

        return(
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <a href={download} target='_blank' alt={alt_description} rel="noopener noreferrer">
                    <img ref={this.imgRef} alt={description} src={regular}/> 
                </a>  
            </div> 
        );
    }
}

ImageCard.propTypes={
    description: PropTypes.string,
    regular: PropTypes.string,
    download: PropTypes.string,
    alt_description: PropTypes.string,
}

export default ImageCard;