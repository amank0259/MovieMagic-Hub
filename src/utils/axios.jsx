import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODE5Nzg0NGRjZGNjOGQwOGU3YTNhNWEzMTY5MDRmYyIsInN1YiI6IjY0Y2YxZGIwZmEyN2Y0MDExYzg0ZjZmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-q0UhT4yABvMN1bYQ7oNpZZXJGdgWFAeaMEIM8Bfzqs'
    }
})

export default instance;