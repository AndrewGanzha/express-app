import express from "express";
import bodyParser from "body-parser";
import {randomUUID} from "crypto";

const app = express();
const port = process.env.PORT || 3000;

const transports = [{id: 0, name: 'Фрунзенская'}, {id: 1, name: 'Костомароваская'}]

const parserMiddleware = bodyParser();

app.use(parserMiddleware);

app.get("/transports", (req: any, res: any) => {
  if(req.query.title) {
    let searchString = req.query.title.toString();

    res.send(transports.filter(transport => transport.name.indexOf(searchString) > -1));
  }

  res.send(transports);
});

app.post("/transports", (req: any, res: any) => {
  const newTransport = { id: +(new Date()),  name: req.body.title.toString()};

  transports.push(newTransport);


  res.status(201).send(newTransport);
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

app.delete("/transports/:id", (req: any, res: any) => {
  for (let i = 0; i < transports.length; i++) {
    if (transports[i].id == +req.params.id) {
      transports.splice(i, 1);
      res.send(204)
      return;
    }
  }

  res.send(404);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
