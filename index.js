require('dotenv').config();

const { leerInput, inquirerMenu, inquirerPausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async()=>{
    let opt='';

    const busquedas= new Busquedas();


    do{

        opt=await inquirerMenu();

        switch(opt){
            case 1:
                //Mostrar mensaje
                const termino= await leerInput('Ciudad: ');

                //Busca los lugares
                const lugares=await busquedas.ciudad(termino);

                //Seleccionar el lugar
                const id= await listarLugares(lugares);
                const lugarSel= lugares.find(l =>l.id===id);

                //Clima
                const clima=await busquedas.climaLugar(lugarSel.lat,lugarSel.lng);

                //Mostrar resultados
                console.clear();
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSel.nombre.green);
                console.log('Lat: ', lugarSel.lat);
                console.log('Lng: ',lugarSel.lng);
                console.log('Temperatura: ',clima.temp);
                console.log('Mínima: ',clima.min);
                console.log('Máxima: ',clima.max);
                console.log('Como está el clima: ',clima.desc.green);

            break;

            case 2:
                console.log('Selecciono historial');
            break;

        }


        if (opt!==0) await inquirerPausa();

    } while (opt !==0);
}


main();