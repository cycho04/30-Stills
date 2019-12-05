import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(){
        super();
        this.state={ term: ''};
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    handleChange = (e) => {
        this.setState({term: e.target.value});
    }

    render(){
        const {term} = this.state;

        return (
            <div className='title-wrapper'> 
                <h2 className='main'>30 STILLS</h2>
                <div>
                    <form onSubmit={this.onFormSubmit} className='search-box'>
                        <input className='search-txt' placeholder='Search Images' type='text' value={term} onChange={this.handleChange} />    
                        <button className="search-btn">
                            <i className='search icon search-icon'></i>
                        </button> 
                    </form>    
                </div>
            </div>
        )
    };
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func,
}

export default SearchBar;