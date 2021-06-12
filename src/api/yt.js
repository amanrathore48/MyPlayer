import axios from 'axios';
const KEY = 'AIzaSyAu8MpVtntT4fqV2Uo0cUYciIAr4n3l1YE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: KEY,
    }
})