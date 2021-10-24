const {marcas} = require('../../db.json');

const retornarListaModelos =  (req, res) =>{
    const {marca} = req.body;
    console.log(marca)
    marcaEncontrada = marcas.find((marcaCarro)=> (marcaCarro.brand).toLowerCase() == marca.toLowerCase());
    
    if(!marcaEncontrada){
        return res.status(401).json("Marca não encontrada!")
    }
    return res.status(200).json(marcaEncontrada.models);
}


module.exports = {
    retornarListaModelos
}