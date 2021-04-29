const   express     = require('express'),
        router      = express.Router(),
        controllers = require('../controllers/todosControllers');



router
    .route('/')
    .get(controllers.getTodos)
    .post(controllers.addTodo)

router
    .route('/:id')
    .delete(controllers.deleteTodo)
    .put(controllers.updateTodo)



module.exports = router