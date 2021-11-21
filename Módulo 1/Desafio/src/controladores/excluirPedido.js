const fs = require('fs');


const excluirPedido = (req, res) => {
    const { id } = req.params;

    fs.readFile('../../pedidos.json', function(err, data){
        if (err){
            return res.status(400).json(err);
        } 
        else {
            parseJson = JSON.parse(data);
            const pedidoExcluido = parseJson.find(pedido => pedido.id == id);

            if(!pedidoExcluido){
                return res.status(400).json("Não há pedido com o id informado.");
            }

            parseJson = parseJson.filter(pedido => pedido.id != id)    
            fs.writeFile('../../pedidos.json', JSON.stringify(parseJson), function(err){
                if(err){
                    return res.status(400).json(err);
                }
                else{
                    return res.status(201).json(pedidoExcluido);
                }
            });
        }
    }); 
}

module.exports = {
    excluirPedido
}