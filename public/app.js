if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then((reg) => console.log('register sw', reg))
    .catch((err) => console.log('error sw', err))
}
