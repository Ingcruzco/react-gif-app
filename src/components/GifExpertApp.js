import React, { Fragment,  useState } from 'react';
import AddCategory from './AddCategoty'
import GifGrid from './GifGrid';
function GifExpertAPP({initialState}){
    const [categories,setCategories]=useState(initialState);
    return(
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={ setCategories } />
            <hr/>
            
            <ol>
                {
                    categories.map(element=>{
                        return(
                            <GifGrid 
                                key={element} 
                                category={element}
                            />
                        )
                    })
                }
            </ol>
        </Fragment>
    );

}

export default GifExpertAPP;