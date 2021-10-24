const {marcas} = require('../../db.json');

const retornarMaisModelos =  (req, res) =>{

    let maior = 0;
    let modelos = [];

    for(let i = 0; i < marcas.length; i++){
        if(marcas[i].models.length > maior){
            maior = marcas[i].models.length;
        }
    }

    for(let i = 0; i < marcas.length; i++){
        if(marcas[i].models.length == maior){
            modelos.push(marcas[i].brand);
        }
    }
    return res.status(200).json(modelos);
}


module.exports = {
    retornarMaisModelos
}