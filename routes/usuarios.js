const {Router} = require('express');
const { usuariosGet,
    usuariosDelete,
    usuariosPatch,
    usuariosPut,
    usuariosPost
     } = require('../controllers/usuarios');
const router = Router();

router.get('/',usuariosGet);
router.delete('/',usuariosDelete);
router.patch('/',usuariosPatch);
router.put('/:id',usuariosPut);
router.post('/',usuariosPost);

module.exports = router;