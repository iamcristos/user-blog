import models from '../sequelize/models';

class Todos {
  static async createTodo(req, res) {
    try {
     const todo = { title: req.body.title };
      const newTodo = await models.Todo.create(todo);
      console.log(newTodo);
      if (!newTodo) throw new Error('cannot create todo');
      return res.status(201).send({
        status: 201,
        todo: newTodo,
      });
    } catch (error) {
      return res.status(400).send({
        status: 400,
        err: error.message,
      });
    }
  }

}

export default Todos;
