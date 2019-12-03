import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(){
        super();
        this.state={ term: ''};
    }

    //arrow function used instead of binding in constructor. else "this.state.term" is undefined
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <> 
                <h1 className='main'>30 STILLS</h1>
                <div className='ui secondary segment'>
                    <form onSubmit={this.onFormSubmit} className='ui form'>
                        <div className='field'>
                            <input  className='main' placeholder='Search Images' type='text' value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />    
                        </div>     
                    </form>
                </div>
            </>
        )
    };
};

export default SearchBar;