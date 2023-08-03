import express, { Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import employeeRouter from "./employee.router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;


app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/api/employee', employeeRouter);
  
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});