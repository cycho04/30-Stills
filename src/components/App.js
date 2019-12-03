import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Header from './Header';

const style = {
    fixTopMargin : {
        marginTop: '20px'
    }
}

class App extends React.Component {

    state = { images: [], noImage: false };

    onSearchSubmit = async (term) => {
        await unsplash.get(`/search/photos?per_page=30`, {
            params: { query: term }
        })
        .then(res =>{
            if (res.data.total === 0){
                this.handleNoImage();
            }
            else{
                this.setState({ images: res.data.results, noImage: false });
            }
        })
    }

    handleNoImage = () => {
        this.setState({ noImage: true });
    }

    render(){
        return (
            <div className='ui container' style={style.fixTopMargin}>
                <Header />
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} noImage={this.state.noImage}/>
            </div>
        )
    }
}

export default App;