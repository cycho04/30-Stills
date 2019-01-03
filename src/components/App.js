import React from 'react';
import SearchBar from './SearchBar';

const style = {
    fixTopMargin : {
        marginTop: '50px'
    }
}

class App extends React.Component {

    onSearchSubmit(term){
        console.log(term);
    }

    render(){
        return (
            <div className='ui container' style={style.fixTopMargin}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    }
}

export default App;