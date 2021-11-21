const fs = require('fs');

const listarPedidos = (req, res) => {
    fs.readFile('../../pedidos.json', function(err, data){
        if (err){
            return res.status(400).json(err);
        } 
        else {
            parseJson = JSON.parse(data);
            return res.status(200).json(parseJson);
        }
    }); 
}

module.exports = {
    listarPedidos
}