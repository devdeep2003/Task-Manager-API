import { readTasks, writeTasks } from "../utils/file.utils.js";

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  const data = await readTasks();

  const newTask = {
    id: data.length > 0 ? Math.max(...data.map((task) => task.id)) + 1 : 1,
    title: title,
    description: description,
    user: req.session.user.username,
  };

  data.push(newTask);
  await writeTasks(data);

  res.status(201).json(newTask);
};

export const getTasks = async (req, res) => {
  const tasks = await readTasks();

  res.status(200).json({
    tasks: tasks,
  });
};

export const updateTasks = async (req, res) => {
  const { id } = req.params;
  const parseID = parseInt(id);
  const updateUser = req.body;

  const data = await readTasks();
  const taskIndex = data.findIndex((task) => task.id === parseID);

  if (taskIndex !== -1) {
    data[taskIndex] = { ...data[taskIndex], ...updateUser };
    await writeTasks(data);
    res.status(200).json({
      message: "Task updated Successfully",
      data: data[taskIndex],
    });
  } else {
    res.status(404).json({
      message: "Task not found",
      taskId: id,
    });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  const parsedID = parseInt(id);

  const data = await readTasks();
  const taskIndex = data.findIndex((task) => task.id === parsedID);
  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  data.splice(taskIndex, 1);
  await writeTasks(data);
  res.status(200).json({
    message: "Task deleted successfully",
    taskId: id,
  });
};
