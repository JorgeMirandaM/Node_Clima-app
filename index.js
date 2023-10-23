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

                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSel.nombre);
                console.log('Lat: ', lugarSel.lat);
                console.log('Lng: ',lugarSel.lng);
            break;

            case 2:
                console.log('Selecciono historial');
            break;

        }


        if (opt!==0) await inquirerPausa();

    } while (opt !==0);
}


main();