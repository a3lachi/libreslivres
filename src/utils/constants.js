
export const Backend =  'http://127.0.0.1:8000'


export const Local = window.location.hostname === 'localhost' ? `http://${window.location.host}` : `https://${window.location.host}` 