const express = require('express');
const { exec } = require('child_process');
const app = express();
__path = process.cwd()
const bodyParser = require("body-parser");
// Função para gerar um número aleatório entre min e max
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para gerar 4 números aleatórios entre 1 e 100
function gerarNumerosAleatorios() {
    let numerosAleatorios = "";
    for (let i = 0; i < 2; i++) {
        numerosAleatorios += numeroAleatorio(1, 100);
    }
    return numerosAleatorios;
}

// Chamar a função e imprimir os números gerados em uma única linha, sem espaços entre eles
//console.log("4 números aleatórios:", gerarNumerosAleatorios());

const PORT = process.env.PORT || 18013;
let code = require('./VenomSpam');
require('events').EventEmitter.defaultMaxListeners = 500;
app.use('/code', code);
app.use('/VenomSpam',async (req, res, next) => {
res.sendFile(__path + '/VenomSpam.html')
})
app.use('/BanVenom',async (req, res, next) => {
res.sendFile(__path + '/BanVenom.html')
})
app.use('/BotsVenom',async (req, res, next) => {
res.sendFile(__path + '/BotsVenom.html')
})
app.use('/EmaisVenom',async (req, res, next) => {
res.sendFile(__path + '/EmaisVenom.html')
})
app.use('/DadosVenom',async (req, res, next) => {
res.sendFile(__path + '/DadosVenom.html')
})
app.use('/FontesVenom',async (req, res, next) => {
res.sendFile(__path + '/FontesVenom.html')
})
app.use('/',async (req, res, next) => {
res.sendFile(__path + '/HomeVenom.html')
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => {
    console.log(`YoutTube: @Venom Mods\nTelegram: VenomDsn\nGitHub: @Venom-Ytb\nInstsgram: venom_mods_ofc\n\nServidor online na porta http://localhost:` + PORT)
    exec(`xdg-open http://localhost:${PORT}`);
})

module.exports = app
