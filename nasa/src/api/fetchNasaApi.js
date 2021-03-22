export { fetchMarsPicture };
export { fetchAstroPicture };

function fetchMarsPicture(date) {
    const _apiKey = 'tzKyM2A1CLcJ6GnERt8x1ADIafIG9BO2eKoti7sw';
    const _apiBaseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=';
    return fetch(`${_apiBaseUrl}${_apiKey}&earth_date=${date}`)
        .then(res => res.json())
        .then((result) => {
            return result
        })
}

function fetchAstroPicture(date) {
    const _apiKey = 'tzKyM2A1CLcJ6GnERt8x1ADIafIG9BO2eKoti7sw';
    const _apiBaseApodUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
    return fetch(`${_apiBaseApodUrl}${_apiKey}&date=${date}&hd=true`)
        .then(res => res.json())
        .then((result) => {
            return result
        })
}

