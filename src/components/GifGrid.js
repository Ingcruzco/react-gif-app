import React, { Fragment,  useEffect,  useState } from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetxhGifs';
import '../../src/index.css'
function GifGrid({category}){
    
    const {data,loading}=useFetchGifs(category);
    if(loading){
        return(
            <h1 className="animate__animated animate__flash">Loading... </h1>
        );
    }else{
        return(
            <Fragment>
                <h3>{category}</h3> 
                <div className="card-grid">
                            {data.map(img=>{
                                return(
                                    <GifGridItem key={img.id} images={img}/>
                                )
                    })}
                </div>
            </Fragment>

        )
    }
}

export default GifGrid;