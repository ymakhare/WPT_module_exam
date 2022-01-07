const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
const { addmsg, showmsg } = require("./user");
app.use(cors());

// http://localhost:5000/show
app.get("/show", async (req, res) => {
  const list = await showmsg();
  res.json(list);
});

// http://localhost:5000/add
app.post("/add", async (req, res) => {
  const data = req.body;
  await addmsg(data);
  res.json({ message: "mesage sent..." });
});

app.listen(5000, () => console.log("server strted..."));
