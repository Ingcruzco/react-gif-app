import React from 'react';
import ReactDOM from 'react-dom';
import GifExpertAPP from './components/GifExpertApp';
import '../src/index.css'
const initialCategories=[];
function App(){
    return(
        <GifExpertAPP initialState={initialCategories} />
    );
}

ReactDOM.render(<App />, document.getElementById('root'));