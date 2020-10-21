import React from 'react';
import '../css/ImageList.css';
import ImageCard from './ImageCard.js';

const ImageList = (props) => {

    const arrayImg = props.images.map((image) => {
        return <ImageCard image={image} key={image.id}/>
    });

    return <div className="image-list">{arrayImg}</div>;
}
export default ImageList;