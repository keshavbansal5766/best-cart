import express from "express";
import authUser from "../middlewares/authUser.js";
import {
  allOrders,
  getUserOrders,
  placeOrderCod,
  placeOrderStripe,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/cod", authUser, placeOrderCod);
orderRouter.get("/user", authUser, getUserOrders);
orderRouter.get("/seller", authUser, allOrders);
orderRouter.post("/stripe", authUser, placeOrderStripe);
export default orderRouter;
