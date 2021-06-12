import React from 'react';
import './styles.css';


const VideoDetail = ({ video }) => {
    if (!video)
        return <div></div>

const videoSrc = 'https://www.youtube.com/embed/'+video.id.videoId;

    return (
        <div className="frame-container">
            <div className="frame">
                <iframe className="selected-video" allowFullScreen title={video.snippet.title} src={videoSrc}></iframe>
            </div>
            <div className="active-content">
                <h4 className="active-song-name">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    );

};

export default VideoDetail;