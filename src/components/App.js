import React from 'react';
import Unsplash from '../api/unsplash.js';
import SearchBar from './SearchBar.js';


class App extends React.Component {

    state = { images: [] }
    
    onSearchSubmit = async (term) => {
        const result = await Unsplash.get('/search/photos', {
            params: { query: term}
        })
        this.setState({images: result.data.results})
    }

    render(){
        return ( 
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found  {this.state.images.length}
            </div> );
    }
    
}
 
export default App;