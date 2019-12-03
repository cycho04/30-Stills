import React from 'react';

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
        const { description, urls } = this.props.image;

        return(
                <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                    <a href={this.props.image.links.download} target='_blank' alt={this.props.image.alt_description}>
                        <img ref={this.imgRef} alt={description} src={urls.regular}/> 
                    </a>  
                </div> 
        )
    }
}

export default ImageCard;