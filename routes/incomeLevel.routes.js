import express from "express";
import { authRole } from "../controllers/userController.js";
import {
  addNewLevel,
  deleteLevel,
  getAllLevel,
} from "../controllers/incomeLevel.controller.js";
import authUser from "../middleware/auth.js";
const incomeLevelRoute = express.Router();

incomeLevelRoute.post("/addNewLevel", authRole("admin"), addNewLevel);
// incomeLevelRoute.get("/getAllLevel", authUser, getAllLevel);
incomeLevelRoute.get("/getAllLevel", getAllLevel);
// Define DELETE route
incomeLevelRoute.delete("/delete/:id", authRole("admin"), deleteLevel);

export default incomeLevelRoute;
