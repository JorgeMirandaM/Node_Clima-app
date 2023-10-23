require('dotenv').config();

const { leerInput, inquirerMenu, inquirerPausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async()=>{
    let opt='';

    const busquedas= new Busquedas();


    do{

        opt=await inquirerMenu();

        switch(opt){
            case 1:
                const lugar= await leerInput();
                await busquedas.ciudad(lugar);
            break;

            case 2:
                console.log('Selecciono historial');
            break;

        }


        if (opt!==0) await inquirerPausa();

    } while (opt !==0);
}


main();