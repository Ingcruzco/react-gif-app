import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddCategory({setCategory}){
    
    const [inputValue,setInputValue]=useState('');
    const handleChange=(e)=>{
        setInputValue(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        inputValue===''?setCategory(category=>[...category]):setCategory(category=>[inputValue,...category])
        setInputValue('');
    }
    return(
        <form onSubmit={handleSubmit}>
            <input  value = {inputValue} type='text' placeholder='Digite aquí la categoria' onChange={handleChange}></input>
        </form>
    )
}

AddCategory.propTypes={
    setCategory:PropTypes.func.isRequired,
}


export default AddCategory;