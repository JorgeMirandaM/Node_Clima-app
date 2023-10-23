const { leerInput, inquirerMenu, inquirerPausa } = require("./helpers/inquirer")



const main = async()=>{
    let opt='';


    do{

        opt=await inquirerMenu();

        switch(opt){
            case 1:
                console.log('Selecciono buscar ciudad');
            break;

            case 2:
                console.log('Selecciono historial');
            break;

        }


        if (opt!==0) await inquirerPausa();

    } while (opt !==0);
}


main();