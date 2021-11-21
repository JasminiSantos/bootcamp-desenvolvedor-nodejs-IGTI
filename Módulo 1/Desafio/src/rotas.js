const express = require('express');
const rotas = express();
const { criarPedido } = require('./controladores/criarPedido');
const { listarPedidos } = require('./controladores/listarPedidos');
const { consultarPedido } = require('./controladores/consultarPedido');
const { atualizarPedido } = require('./controladores/atualizarPedido');
const { excluirPedido } = require('./controladores/excluirPedido');
const { consultarValorCliente } = require('./controladores/consultarValorCliente');
const { consultarValorTotalProduto } = require('./controladores/consultarValorTotalProduto');
const { listarMaisVendidos } = require('./controladores/listarMaisVendidos');

rotas.post('/pedido', criarPedido);
rotas.get('/pedido', listarPedidos);
rotas.get('/pedido/:id', consultarPedido);
rotas.get('/cliente/:cliente', consultarValorCliente);
rotas.put('/pedido/:id', atualizarPedido);
rotas.delete('/pedido/:id', excluirPedido);
rotas.get('/produto/:produto', consultarValorTotalProduto);
rotas.get('/maisVendidos', listarMaisVendidos);

module.exports = rotas;