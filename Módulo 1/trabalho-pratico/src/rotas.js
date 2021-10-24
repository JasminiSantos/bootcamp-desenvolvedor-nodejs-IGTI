const express = require('express');
const rotas = express();
const { retornarMaisModelos } = require('./controladores/maisModelos');
const { retornarMenosModelos } = require('./controladores/menosModelos');
const { retornarListaMaisModelosX } = require('./controladores/listaMaisModelosX');
const { retornarListaMenosModelosX } = require('./controladores/listaMenosModelosX');
const { retornarListaModelos } = require('./controladores/listaModelos');

rotas.get('/marcas/listaMenosModelos/:x', retornarListaMenosModelosX)
rotas.get('/marcas/maisModelos', retornarMaisModelos)
rotas.get('/marcas/menosModelos', retornarMenosModelos)
rotas.get('/marcas/listaMaisModelos/:x', retornarListaMaisModelosX)
rotas.get('/marcas/listaMenosModelos/:x', retornarListaMenosModelosX)
rotas.post('/marcas/listaModelos', retornarListaModelos)
module.exports = rotas;