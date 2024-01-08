const { todo } = require('./db');
const { createTodo, updateTodo } = require('./types');

express = require('express');
cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/todo', async function(req,res) {
    const createPayload = req.body;
    const parsedInput = createTodo.safeParse(createPayload);
    if(!parsedInput.success){
        res.status(411).json({
            msg: "You have sent invalid input"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })

    res.status(201).json({
        msg: "To do sucessfully added"
    });

});

app.get("/todos", async function(req,res) {
    const todoList = await todo.find();
    res.json({
        todoList
    });
})

app.put("/completed", async function(req,res){
    const parsedInput =  updateTodo.safeParse(req.body);
    if(!parsedInput.sucess){
        res.status(411).json({
            msg: "You have sent invalid input",
        })
        return;
    }
    const todoItem = todo.update({
        _id: req.body.id,
    },
    {
        completed: true,
    })

    res.json({
        msg: "Todo has been updated!",
    });
})

app.listen(3000);