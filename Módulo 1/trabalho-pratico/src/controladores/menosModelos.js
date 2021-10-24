const {marcas} = require('../../db.json');
const retornarMenosModelos = (req, res) =>{

    let menor = marcas[0].models.length;
    let modelos = [];

    for(let i = 0; i < marcas.length; i++){
        if(marcas[i].models.length < menor){
            menor = marcas[i].models.length;
        }
    }

    for(let i = 0; i < marcas.length; i++){
        if(marcas[i].models.length == menor){
            modelos.push(marcas[i].brand);
        }
    }
    return res.status(200).json(modelos);
}

module.exports = {
    retornarMenosModelos
}