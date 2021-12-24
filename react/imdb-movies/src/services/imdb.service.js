
const URL = `https://imdb-api.com/en/API`
const API_KEY = `k_veco7d16`;

export function fetchMoviesByTitle(query) {
    var request = `${URL}/SearchMovie/${API_KEY}/${query}`;
    return fetch(request)
}

export function fetchMoviesInTheatres() {
    return fetch(`${URL}/InTheaters/${API_KEY}`);
}