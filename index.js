import express from "express"

import TasksRouter from "./Routers/TasksRouter"

const app=express()
const port=3000

app.get("/",(req,res)=>{
    res.send('Hello to you :)')
})

app.use('/tasks',TasksRouter)

app.listen(port,()=>{
    console.log(`Example app listening on http://localhost:${port}/tasks`)
})
