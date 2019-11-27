const express = require('express');
const router = express.Router();

const { usersController } = require('../controllers/index');
const { catchErrors } = require('../middleware/error-handler')


// router.get('/', catchErrors(usersController.index));

// router.post('/', catchErrors(usersController.store));

// router.get('/:id', catchErrors(usersController.show));

// router.delete('/:id', catchErrors(usersController.delete));

// router.put('/:id', catchErrors(usersController.update));

module.exports = router;