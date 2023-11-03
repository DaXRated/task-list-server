const express = require("express");
const router = express.Router();

let tasks = require("./tasks.json");

//app.use('/tasks.json', tasks);

router.get("/", (req, res) => {
  res.status(200).send(tasks);
});

router.get('/:status', (req, res) => {
     let fin = [];
        const cTasks = tasks.filter((tasks) => tasks.status === true);
         if(cTasks.filter((tasks)=>tasks.status === true)){
           fin.push(cTasks);
          } else {
          res.status(404).send('nuay');
     }
     res.status(200).send(fin);
    }
);

router.get('/:status/:false', (req, res) => {
  let finf = [];
     const fTasks = tasks.filter((tasks) => tasks.status === false);
      if(fTasks.filter((tasks)=>tasks.status === false)){
        finf.push(fTasks);
       } else {
       res.status(404).send('nuay');
  }
  res.status(200).send(finf);
 }
);



// app.listen(port,()=>{
//     console.log(`Server is running on port ${port}`);
// });

module.exports = router;
