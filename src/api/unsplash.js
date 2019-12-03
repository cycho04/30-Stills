import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 61a6e23b9bf4dd341cbeaad319c8db9dd72b34b2477be1d0cc4ab349e72c67d9'
    },
});