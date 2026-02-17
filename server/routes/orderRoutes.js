import express from "express";
import authUser from "../middlewares/authUser.js";
import {
  allOrders,
  getUserOrders,
  placeOrderCod,
  placeOrderStripe,
} from "../controllers/orderController.js";
import authSeller from "../middlewares/authSeller.js";

const orderRouter = express.Router();

orderRouter.post("/cod", authUser, placeOrderCod);
orderRouter.get("/user", authUser, getUserOrders);
orderRouter.get("/seller", authSeller, allOrders);
orderRouter.post("/stripe", authUser, placeOrderStripe);
export default orderRouter;
