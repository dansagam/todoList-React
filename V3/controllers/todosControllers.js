const Todo = require('../models/Todo');


exports.getTodos = async (req, res, next) => {
    try {
        const todos = await Todo.find();
        return res.status(200).json({
            success: true,
            count: todos.length,
            data: todos

        });
    } catch (error) {
        console.log('get error')
    }
}
exports.addTodo = async (req, res, next) => {
    try {
        const { text } = req.body
        const todo = await Todo.create(req.body)

        return res.status(201).json({
            success: true,
            data: todo
        }) 
    } catch (err) {      
        console.log(`add err ${err}`)
    }
}
exports.deleteTodo = async (req, res, next) => {
    try {
        const todo = await Todo.findByIdAndRemove(req.params.id)
        return res.status(200).json({
            success: true,
            data: {}

        })
    } catch (err) {
        console.log('delete error')
    }
}

exports.updateTodo = async (req, res, next) => {
    try {
        
        console.log('update todo')
    } catch (err) {
        
        console.log('update error')
    }
}