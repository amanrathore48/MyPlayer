import './Item.css';
import './styles.css';
import React from 'react';




const VideoItem = ({ video, onVideoSelect }) => {
 
  
    return (
        <div className="list-container">
        <div className="video-item" onClick={ () => onVideoSelect(video)}>
            <img className="list-image" src={video.snippet.thumbnails.medium.url} alt="" />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>            
        </div>
        </div>
    );
};

export default VideoItem;