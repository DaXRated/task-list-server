
const express = require('express');
const app = express();
const port = 8000;

//const lvRouter = require('./list-view-router');

let tasks = require('./tasks.json');
const router = require('./list-view-router');
const eRouter = require('./list-edit-router');

app.use(express.json());
app.use('/tasks', router);
app.use('/tasks', eRouter);
//app.use('/tasks/:status', router);

// router.get("/", (req, res) => {
//   res.status(200).send(tasks);
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
