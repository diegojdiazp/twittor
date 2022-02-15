function actualizaCacheDinamico(dynamicCache,req,resp){

    if(resp.ok){

        caches.open(dynamicCache).then(cache =>{
            cache.put(reque,res.clo());
            return res.clone();
        });
    }else{
        return res;
    }

}