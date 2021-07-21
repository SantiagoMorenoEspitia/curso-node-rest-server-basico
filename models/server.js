const express = require('express')
const cors = require('cors')
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuriosPath= '/api/usuarios'
        //Midlewares funciones para agregarle funcionalidades al sitio web
        this.middlewares()
        //Rutas de mi aplicacion
        this.routes()
    }
    middlewares(){
        //CORS
        this.app.use(cors())
        //Lectura y parseo del body
        this.app.use(express.json())
        //Directorio publico
        this.app.use(express.static('public'))//use palabra clave middlewares
    }
    routes() {
        this.app.use(this.usuriosPath,require('../routes/usuarios'))
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servirdor corriendo en el puerto',this.port)
        });
    }


}
module.exports = Server