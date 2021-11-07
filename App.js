const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const toDos = [
  {
    id: 1,
    taskName: "Sleep",
    isCompleted: false,
  },
  {
    id: 2,
    taskName: "Code",
    isCompleted: false,
  },
  {
    id: 3,
    taskName: "Eat",
    isCompleted: true,
  },
];

app.get("/toDos", (req, res) => {
  res.status(200);
  res.json(toDos);
});
app.get("/toDos/:taskName", (req, res) => {
  const { taskName } = req.params;
  const found = toDos.find((elem) => {
    return elem.taskName === taskName;
  });

  if (found) {
    res.status(200);
    res.json(found);
  } else {
    res.status(404);
    res.json("not found 404");
  }
});
app.get("/toDo/:id", (req, res) => {
  const { id } = req.params;
  const found = toDos.find((elem) => {
    return elem.id == id;
  });
  if (found) {
    res.status(200);
    res.json(found);
  } else {
    res.status(404);
    res.json("not found 404");
  }
});

app.post("/toDos/create", (req,res) => {
  const {id,taskName,isCompleted}= req.body
  toDos.push({id,taskName,isCompleted})
  res.status(201);
  res.json(toDos);
})

app.put("/updata/:id", (req, res) => {
  const { id, taskName, isCompleted } = req.body;
  toDos.push(toDos);
  res.json("updataed");
});

 app.delete('/toDos/del/:id', (req, res) => {
  const { id } = req.params;
  toDos.splice(id-1,1)
  res.json(toDos)
});

app.listen(port, () => {
  console.log(`ser port ${port}`);
});
