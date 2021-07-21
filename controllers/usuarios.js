const {response, request} = require('express')
const usuariosGet = (req = request, res = response) => {
    const {q,nobre,apikey} = req.query
    res.json({
        ok:true,
        msg:'get Api - controlador',
        q,nobre
    })
}
const usuariosPost = (req, res = response) => {
    const {nombre, edad} = req.body;

    res.json({
        ok:true,
        msg:'post Api - controlador',
        nombre,edad
    })
}
const usuariosPut = (req, res = response) => {
    const {id} = req.params
    res.json({
        ok:true,
        msg:'put Api - controlador',
        id
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        ok:true,
        msg:'delete Api - controlador'
    })
}
const usuariosPatch = (req, res = response) => {
    res.json({
        ok:true,
        msg:'patch Api - controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPatch,
    usuariosPut,
    usuariosPost
}