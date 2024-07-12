const express = require ('express');
import express from "express";
import { peopleRouter } from "./routes/tempUsersRoutes.js";

const app = express()
const port = 3000

// permite nosso js entender json
app.use(express.json());

// dando acesso as nossas rotas
app.use(peopleRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
