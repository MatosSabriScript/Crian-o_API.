import express from 'express';
import { userRouter } from './routes/tempUsersRoutes.js'

const app = express();
const port = 7070;

app.use(express.json());
app.use(userRouter);

app.listen(port, () => { });
 