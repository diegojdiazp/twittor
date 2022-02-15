const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE='dynamic-v1'
const INMUTABLE_CACHE='inmutable-v1';

 const APP_SHELL = [
    //  '/',
     'index.html',
     'css/style.css',
     'img/favicon.ico',
     'img/avatars/hulk.jpg',
     'img/avatars/ironman.jpg',
     'img/avatars/spiderman.jpg',
     'img/avatars/thor.jpg',
     'img/avatars/wolverine.jpg',
     'js/app.js',
     'js/sw-utils.js'

 ];

self.addEventListener('activate', e => {

    const respuesta = caches.keys().then( keys => {

        keys.forEach( key => {

            if (  key !== STATIC_CACHE && key.includes('static') ) {
                return caches.delete(key);
            }

        });

    });

    e.waitUntil( respuesta );


});
