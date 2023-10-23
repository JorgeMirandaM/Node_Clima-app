const axios= require('axios');

class Busquedas{

    historial=['Zacatecas','Zapopan','Guadalupe'];

    constructor(){

    }
    

    async ciudad(lugar=''){
        try {
            
            const instance= axios.create({
                baseURL:`https://us1.locationiq.com/v1/search?`,
                params:{
                    'limit':5,
                    'accept-language':'es',
                    'key':process.env.LOCATIONIQ_KEY,
                    'q':lugar,
                    'format':'json'
                }
            })

            const resp = await instance.get();

            return resp.data.map(lugar => ({
                id:lugar.place_id,
                nombre:lugar.display_name,
                lng:lugar.lon,
                lat:lugar.lat
            }))

        } catch (error) {
            return [];
        }
    }
}

module.exports=Busquedas;