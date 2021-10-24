const {marcas} = require('../../db.json');

const retornarListaMaisModelosX =  (req, res) =>{
    const {x} = req.params;
    console.log(x)
    let modelos = [];
    for(let i = 0; i < marcas.length; i++){
        modelos.push({
            marca: marcas[i].brand,
            qtdModelos: marcas[i].models.length
        });
    }

    modelos.sort((a, b)=>{
        return b.qtdModelos - a.qtdModelos;
    })
    let retorno = []
    for(let i = 0; i < x; i++){
        retorno.push(`${modelos[i].marca} - ${modelos[i].qtdModelos}`);
    }
    
    return res.status(200).json(retorno);
}


module.exports = {
    retornarListaMaisModelosX
}