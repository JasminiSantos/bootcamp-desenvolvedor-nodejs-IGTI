const fs = require('fs');

const listarMaisVendidos = (req, res) => {

    fs.readFile('../../pedidos.json', function(err, data){
        if (err){
            return res.status(400).json(err);
        } 
        else {
            parseJson = JSON.parse(data);
            const lista = [];

            parseJson.filter(pedido => pedido.entregue).forEach(pedido => {
                const index = lista.findIndex(it => it.produto === pedido.produto);
                if(index == -1){
                    lista.push({
                        produto: pedido.produto,
                        quantidade: 1
                    })
                }else{
                    lista[index].quantidade++;
                }
            });
            lista.sort((a,b)=> b.quantidade - a.quantidade);
            
            return res.status(200).json(lista);
        }
    }); 
};

module.exports = {
    listarMaisVendidos
}