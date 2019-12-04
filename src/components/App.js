import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Header from './Header';

const style = {
    mainShape : {
        backgroundImage: 'linear-gradient(#F3F3F3, white)',
    }
}

class App extends React.Component {

    state = { images: [], noImage: false, landingPage: true};

    onSearchSubmit = async (term) => {
        await unsplash.get(`/search/photos?per_page=30`, {
            params: { query: term }
        })
        .then(res =>{
            if (res.data.total === 0){
                this.handleNoImage();
            }
            else{
                this.setState({ images: res.data.results, noImage: false, landingPage: false});
            }
        })
    }

    handleNoImage = () => {
        this.setState({ noImage: true });
    }

    render(){
        return (
            <div style={style.mainShape}>
                <div className='ui container'>
                    <Header />
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    <ImageList images={this.state.images} noImage={this.state.noImage} landingPage={this.state.landingPage}/>
                </div>
            </div>
        )
    }
}

export default App;