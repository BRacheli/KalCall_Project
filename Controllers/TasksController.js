const TasksController={
getList: (req,res)=>{
    res.send([
        {id:1, name:"task 1", status:"TODO"},
        {id:2, name:"task 2", status:"DONE"}
    ])
},
getById:(req,res)=>{
    const id=req.params.id;
    res.send("GET BY ID !")
}
}
export default TasksController;