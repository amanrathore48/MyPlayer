import React, {useState} from 'react';
import './styles.css';
import yt from '../api/yt';
import Search from './Search';
import Header from './Header';
import List from './List';
import Detail from './Details';


function App() {
    const [play, setPlay] = useState({
        videos: [],
        selectedVideo: null
    });

    const OnTermSubmit = async (term) => {
        const response = await yt.get('/search', {
            params: {
                q: term
            }
        });
        setPlay({ 
            videos: response.data.items,
            selectedVideo: null
        });
        console.log(response.data.items);
        
    };
    const onVideoSelect = (video) => {
        setPlay({ 
            videos: [...play.videos],
            selectedVideo: video });
    };
    return (
        <div className="main-container">
            <Header />
            <div id="main">
                <Search onFormSubmit={OnTermSubmit} />
                <Detail video={play.selectedVideo} />
                <List videos={play.videos} onVideoSelect={onVideoSelect} />
            </div>            
        </div>
    );

}


export default App;
