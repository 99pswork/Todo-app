zod = require('zod');

const createTodoSchema = zod.object({
    title: zod.string().min(3),
    description: zod.string().min(3),
})

const updateTodoSchema = zod.object({
    id: zod.string(),
})

module.exports = {
    createTodo: createTodoSchema,
    updateTodo: updateTodoSchema
}