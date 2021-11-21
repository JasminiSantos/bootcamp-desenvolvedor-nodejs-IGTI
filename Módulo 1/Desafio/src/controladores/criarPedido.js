const fs = require('fs');
const db = require('../../pedidos.json');

const criarPedido = (req,res) =>{
    const { cliente, produto, valor } = req.body;

    if(!cliente || !produto || !valor){
        return res.status(400).json("Há campos não preenchidos!")
    }

    fs.readFile('../../pedidos.json', function(err, data){
        if (err){
            console.log(err);
        } 
        else {
            parseJson = JSON.parse(data);
            const pedidoCliente = {
                id: db.nextId,
                cliente: cliente,
                produto: produto,
                valor: valor,
                entregue: false,
                timestamp: new Date()
            };
            
            parseJson.push(pedidoCliente);
            db.nextId++;
            fs.writeFile('../../pedidos.json', JSON.stringify(parseJson), function(err){
                if(err){
                    return res.status(400).json(err);
                }
                else{
                    return res.status(201).json(pedidoCliente);
                }
            });
        }
    });
}


module.exports = {
    criarPedido
};