const dotenv = require('dotenv')
dotenv.config()

const parseArgs = require('minimist');

// const options = {
// 	alias: {
// 		p: "PORT",
// 	},
	
// }

const args = parseArgs(process.argv.slice(2));

console.log("Puerto recibido por CLI: ", process.argv[2])

const modoCluster = process.argv[3] == "CLUSTER" || false

console.log("modoCluster?: ", modoCluster);

const TIEMPO_EXPIRACION = 100000;
const URL_BASE_DE_DATOS = process.env.URL_BASE_DE_DATOS;
const SESION_PASS = process.env.SESION_PASS;
const PORT = args.PORT || 8080;
const URL_BASE_DE_DATOS_CONECTARDB = process.env.URL_BASE_DE_DATOS_CONECTARDB;


module.exports = {
	modoCluster,
	TIEMPO_EXPIRACION,
	URL_BASE_DE_DATOS,
	SESION_PASS,
	PORT,
	URL_BASE_DE_DATOS_CONECTARDB
}

// Comando en CLI para pasar puerto: node server.js  -p 3000