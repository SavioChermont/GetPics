import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ZZFsERqQXg6s9qllUFaakWbnx-n7st3jQ0JSK_9U440'
    }
})