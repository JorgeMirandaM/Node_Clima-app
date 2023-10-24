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

    async climaLugar(lat,lon){

        try {

            const instance= axios.create({
                baseURL:`https://api.openweathermap.org/data/2.5/weather?`,
                params:{
                    'lat':lat,
                    'lon':lon,
                    'units':'metric',
                    'lang':'es',
                    'appid':process.env.OPENWEATHER_KEY
                }
            })

            const resp=await instance.get();
            const {weather,main}= resp.data;
            
            
            return {
                desc:weather[0].description,
                min:main.temp_min,
                max:main.temp_max,
                temp:main.temp
            }
            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports=Busquedas;