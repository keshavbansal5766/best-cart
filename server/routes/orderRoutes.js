import express from "express";
import authUser from "../middlewares/authUser.js";
import {
  allOrders,
  getUserOrders,
  placeOrderCod,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/cod", authUser, placeOrderCod);
orderRouter.get("/user", authUser, getUserOrders);
orderRouter.post("/seller", authUser, allOrders);

export default orderRouter;
