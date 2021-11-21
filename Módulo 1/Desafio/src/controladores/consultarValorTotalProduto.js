const fs = require('fs');

const consultarValorTotalProduto = (req, res) =>{
    const { produto } = req.params;
    
    fs.readFile('../../pedidos.json', function(err, data){
        if (err){
            return res.status(400).json(err);
        } 
        else {
            parseJson = JSON.parse(data);
            const totalProdutos = parseJson.filter(pedido => pedido.produto == produto);

            if(!totalProdutos || totalProdutos.length == 0){
                return res.status(400).json("Produto não encontrado!");
            }
            
            let valorTotal = 0;
            for(let i = 0; i < totalProdutos.length; i++){
                valorTotal += totalProdutos[i].valor;
            }

            return res.status(200).json(`O valor total dos pedidos desse produto foi R$ ${valorTotal}.`);
        }
    }); 
}

module.exports = {
    consultarValorTotalProduto
}