import express from "express";
const app = express();
const port = process.env.PORT || 3000;

const transports = [{id: 0, name: 'Фрунзенская'}, {id: 1, name: 'Костомароваская'}]

app.get("/transports", (req: any, res: any) => {
  if(req.query.title) {
    let searchString = req.query.title.toString();

    res.send(transports.filter(transport => transport.name.indexOf(searchString) > -1));
  }

  res.send(transports);
});

app.get("/transports/:id", (req: any, res: any) => {
  let transport = transports.find(item => item.id === +req.params.id);

  if(transport) {
    res.send(transport);
  } else {
    res.send(404);
  }

  res.send(transport);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
