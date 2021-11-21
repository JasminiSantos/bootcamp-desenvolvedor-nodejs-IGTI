const fs = require('fs');

const consultarPedido = (req, res) => {
    const { id } = req.params;

    fs.readFile('../../pedidos.json', function(err, data){
        if (err){
            return res.status(400).json(err);
        } 
        else {
            parseJson = JSON.parse(data);

            const pedidoEncontrado = parseJson.find(pedido => pedido.id == id);

            if(!pedidoEncontrado){
                return res.status(400).json("Não há pedido com o id informado.");
            }
            
            return res.status(200).json(pedidoEncontrado);
        }
    }); 
}

module.exports = {
    consultarPedido
}