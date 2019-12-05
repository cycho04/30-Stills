import React from 'react';
import PropTypes from 'prop-types';

import './ImageList.css'
import ImageCard from '../ImageCard/ImageCard';
import diamond from '../../images/diamond.png';


const ImageList = (props) => {
    const {images, landingPage, noImage} = props;

    const results = images.map(props => {
        const {links, alt_description, description, urls, id} = props

        return <ImageCard key={id} links={links} alt_description={alt_description} description={description} urls={urls}/>;
    });

    return (
        <div className={`${landingPage ? '' : 'image-list'}`}>
            {landingPage ? <img className='main-image' src={diamond} alt='simple polygon diamond'/> : ''}
            {noImage ? 'No results found.' : results}
        </div>
    )
}

ImageList.propTypes = {
    images: PropTypes.array,
    landingPage: PropTypes.bool.isRequired,
    noImage: PropTypes.bool,
}

export default ImageList;