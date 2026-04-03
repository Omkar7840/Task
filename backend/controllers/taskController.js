const Task = require('../models/Task');


const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};


const createTask = async (req, res) => {
  try {
    const { title, description, category, dueDate } = req.body;

    if (!title || title.trim() === '') {
      return res.status(400).json({ error: 'Task title cannot be empty.' });
    }

    const newTask = new Task({ title, description, category, dueDate });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};


const updateTask = async (req, res) => {
  try {
    const { title, description, completed, category, dueDate } = req.body;
    const task = await Task.findById(req.params.id);

    if (!task) return res.status(404).json({ error: 'Task not found' });

    if (completed === true && task.completed === true) {
      return res.status(400).json({ error: 'Task is already marked as completed.' });
    }

    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (completed !== undefined) task.completed = completed;
    if (category !== undefined) task.category = category;
    if (dueDate !== undefined) task.dueDate = dueDate;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
};


const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};