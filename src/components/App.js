import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.js'


class App extends React.Component {

    state = { images: [] }
    
    onSearchSubmit = async (term) => {
        const result = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID ZZFsERqQXg6s9qllUFaakWbnx-n7st3jQ0JSK_9U440'
            }
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