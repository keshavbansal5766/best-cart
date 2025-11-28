import Order from "../models/Order.js";
import Product from "../models/Product.js";

// Place order COD: /api/order/cod
const placeOrderCod = async (req, res) => {
  try {
    const { userId, items, address } = req.body;

    if ((!address, items.length === 0))
      return res.json({ success: false, message: "Invalid Data" });

    // Calculate Amount using items
    let amount = await items.reduce(async (acc, item) => {
      const product = await Product.findById(item.product);
      return (await acc) + product.offerPrice * item.quantity;
    }, 0);

    // Add tax charge
    amount += Math.floor(amount * 0.02);

    await Order.create({
      userId,
      items,
      amount,
      address,
      paymentType: "COD",
    });

    return res.json({ success: true, message: "Order Placed Successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
