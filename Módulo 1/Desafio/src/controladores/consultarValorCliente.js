const fs = require('fs');

const consultarValorCliente = (req, res) =>{
    const { cliente } = req.params;
    
    fs.readFile('../../pedidos.json', function(err, data){
        if (err){
            return res.status(400).json(err);
        } 
        else {
            parseJson = JSON.parse(data);
            const totalPedidosCliente = parseJson.filter(pedido => pedido.cliente == cliente);

            if(!totalPedidosCliente || totalPedidosCliente.length == 0){
                return res.status(400).json("Cliente não encontrado!");
            }
            
            let valorTotal = 0;
            for(let i = 0; i < totalPedidosCliente.length; i++){
                valorTotal += totalPedidosCliente[i].valor;
            }

            return res.status(200).json(`O valor total dos pedidos do cliente foi R$ ${valorTotal}.`);
        }
    }); 
}

module.exports = {
    consultarValorCliente
}