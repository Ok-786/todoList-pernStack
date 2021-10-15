const pool = require("../config");

module.exports.createTodo = async (req, res) => {
    try {
        const { description } = req.body;
        await pool.query(
            "INSERT INTO todo (description) VALUES($1)",
            [description]
        );
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
}

module.exports.getTodos = async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
}

module.exports.getTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query(
            "Select * FROM todo WHERE todo_id=$1",
            [id]
        );
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
}

module.exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *",
            [description, id]
        );
        const updatedTodo = await pool.query(
            "SELECT * FROM todo"
        )

        res.json(updatedTodo.rows);
    } catch (err) {
        console.error(err.message);
    }
}

module.exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteedTodo = await pool.query(
            "DELETE FROM todo WHERE todo_id = $1",
            [id]
        );
        res.json("Todo was deleted!");
    } catch (err) {

    }
}
