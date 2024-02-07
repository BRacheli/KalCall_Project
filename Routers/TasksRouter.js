import express from "express";

import TasksController from "../Controllers/TasksController";

const TasksRouter= express.Router();

TasksRouter.get("/",TasksController.getList)
TasksRouter.get("tasks/:id",TasksController.getById)

export default TasksRouter;

