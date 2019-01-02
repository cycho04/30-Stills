import React from 'react';
import SearchBar from './SearchBar';

const style = {
    fixTopMargin : {
        marginTop: '50px'
    }
}

const App = () => {
    return (
        <div className='ui container' style={style.fixTopMargin}>
            <SearchBar />
        </div>
    )
}

export default App;