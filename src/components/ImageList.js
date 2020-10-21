import React from 'react';
import '../css/ImageList.css';

const ImageList = (props) => {

    const arrayImg = props.images.map(({description, id, urls}) => {
        return <img src={urls.regular} alt={description} key={id} />
    });

    return <div className="image-list">{arrayImg}</div>;
}
export default ImageList;