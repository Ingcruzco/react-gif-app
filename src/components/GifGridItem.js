import React from 'react';



function GifGridItem({images}){
    return(
        <div className="card">
            <h1>{images.title}</h1>
            <img src={images.url} alt='Gif post'/>
        </div>
    );

}

export default GifGridItem;