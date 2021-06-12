import React from 'react';
import Video from './Video';




const VideoList = (props) => {

    const showList = props.videos.map(
        video => <Video video={video} onVideoSelect={props.onVideoSelect} key={video.id.videoId} />
    );
    return (
        <div>{showList}</div>
    );
};


export default VideoList;