import express from "express";
const app = express();
const port = process.env.PORT || 3000;

const transports = [{id: 0, name: 'Фрунзенская'}, {id: 1, name: 'Костомароваская'}]

app.get("/transports", (req: any, res: any) => {
  res.send(transports);
});

app.get("/transports/:idCar", (req: any, res: any) => {
  let request = transports.find(item => item.id === +req.params.idCar);

  res.send(request);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
