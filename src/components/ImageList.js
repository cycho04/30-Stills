import React from 'react';
import './ImageList.css'
import ImageCard from './ImageCard';
import diamond from '../images/diamond.png';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
    });

    return (
        <div className={`${props.landingPage ? '' : 'image-list'}`}>
            {props.landingPage ? <img className='main-image' src={diamond}/> : ''}
            {props.noImage ? 'No results found.' : images}
        </div>
    )
}

export default ImageList;