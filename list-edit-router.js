const express = require("express");
const router = express.Router();

let tasks = require("./tasks.json");

router.get("/", (req, res) => {
  res.status(200).send(tasks);
});

router.post("/", (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.status(200).send({ mensaje: "Task added successfully" });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  tasks = tasks.filter((task) => task.id != id);
  res.status(200).send(tasks);
});

router.put("/:id", (req, res) => {
  const task = req.body;
  const idTask = task.id;
  const posicion = tasks.findIndex((task) => task.id === idTask);
  if (posicion !== -1) {
    task[posicion] = task;
    res.status(200).send({
      mensaje: "Tarea actualizada",
    });
  } else {
    res.status(404).send({
      mensaje: "Tarea no encontrada",
    });
  }
});

// router.get('/:status', (req, res) => {
//      let fin = [];
//         const cTasks = tasks.filter((tasks) => tasks.status === true);
//          if(cTasks.filter((tasks)=>tasks.status === true)){
//            fin.push(cTasks);
//           } else {
//           res.status(404).send('nuay');
//      }
//      res.status(200).send(fin);
//     }
// );

module.exports = router;
