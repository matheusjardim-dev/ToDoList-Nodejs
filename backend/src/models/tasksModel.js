const connection = require('./connection');

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM todolist.tasks');
    return tasks;
};

const createTask = async (task) => {
    const { title } = task;

    const dateUTC = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO todolist.tasks (title, status, created_at) VALUES (?, ?, ?)';
    const [createdTask] = await connection.execute(query, [title, 'pendente', dateUTC]);

    return {insertId: createdTask.insertId};
}

const deleteTask = async (id) => {
    const query = 'DELETE FROM todolist.tasks WHERE id_tasks = ?';
    const [removedTask] = await connection.execute(query, [id]);

    return {removedTask};
}

const updateTask = async (id, task) => {
    const query = 'UPDATE todolist.tasks SET title = ?, status = ? WHERE id = ?';
    const [updatedTask] = await connection.execute(query, [id]);

    return {updatedTask};
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};