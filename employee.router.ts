const DefaultEmployeeController = require('./default.controller');
import checkCachedRouteData from "./middleware";

let express = require("express");

let employeeRouter = express.Router();

employeeRouter.get('/get-all-employees', checkCachedRouteData, DefaultEmployeeController.getAllEmployeeData);

export default employeeRouter;