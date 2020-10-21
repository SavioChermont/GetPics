import React from 'react';

const ImageList = (props) => {

    const arrayImg = props.images.map(({description, id, urls}) => {
        return <img src={urls.regular} alt={description} key={id} />
    });

    return (  
        <div> {arrayImg} </div>
    );
}
 
export default ImageList;