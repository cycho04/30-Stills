import React from 'react';

class SearchBar extends React.Component {
    constructor(){
        super();
        this.state={ term: 'default text'};
    }

    //arrow function used instead of binding in constructor. else "this.state.term" is undefined
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        <input type='text' value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />    
                    </div>     
                </form>
            </div>
        )
    };
};

export default SearchBar;