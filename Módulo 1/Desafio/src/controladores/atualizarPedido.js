const fs = require('fs');

const atualizarPedido = (req,res) =>{
    const { cliente, produto, valor, entregue } = req.body;
    const { id } = req.params;

    if(!cliente && !pedido && !valor && entregue){
        return res.status(400).json("Preencha pelo menos um campo!")
    }

    fs.readFile('../../pedidos.json', function(err, data){
        if (err){
            console.log(err);
        } 
        else {
            parseJson = JSON.parse(data);

            let posicaoArray = -1;
            let pedidoEncontrado = "";
            
            for(let i = 0; i < parseJson.length; i++){
                if(parseJson[i].id == id){
                    pedidoEncontrado = parseJson[i];
                    posicaoArray = i;
                }
            }

            if(!pedidoEncontrado){
                return res.status(400).json("Não há pedido com o id informado.");
            }
            
            if(cliente){
                parseJson[posicaoArray].cliente = cliente;
            }
            if(produto){
                parseJson[posicaoArray].produto = produto;
            }
            if(valor){
                parseJson[posicaoArray].valor = valor;
            }
            if(entregue){
                parseJson[posicaoArray].entregue = entregue;
            }
            
            fs.writeFile('../../pedidos.json', JSON.stringify(parseJson), function(err){
                if(err){
                    return res.status(400).json(err);
                }
                else{
                    return res.status(201).json(parseJson[posicaoArray]);
                }
            });
        }
    });
}


module.exports = {
    atualizarPedido
};