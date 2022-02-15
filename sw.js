const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE='dynamic-v1'
const INMUTABLE_CACHE='inmutable-v1';



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
