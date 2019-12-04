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
            <div className='title-wrapper'> 
                <h2 className='main'>30 STILLS</h2>
                <div>
                    <form onSubmit={this.onFormSubmit} className='search-box'>
                        <input  className='search-txt' placeholder='Search Images' type='text' value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />    
                        <a className="search-btn">
                            <i className='search icon search-icon'></i>
                        </a> 
                    </form>    
                </div>
            </div>
        )
    };
};

export default SearchBar;