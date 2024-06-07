/**
 * order controller
 */
"use strict";
import { factories } from "@strapi/strapi";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export default factories.createCoreController(
  "api::order.order",
  ({ strapi }) => ({
    async create(ctx) {
      const { products, userName, shippingAddress, email } = ctx.request.body;
      try {
        const lineItems = await Promise.all(
          products.map(async (product) => {
            const item = await strapi
              .service("api::item.item")
              .findOne(product.id);

            return {
              price_data: {
                currency: "usd",
                product_data: {
                  name: item.name || "test",
                },
                unit_amount: Math.round(item.price * 100),
              },
              quantity: product.count, // count must come from req.body (products)
            };
          })
        );

        const session = await stripe?.checkout.sessions.create({
          shipping_address_collection: { allowed_countries: ["US", "CA"] },
          payment_method_types: ["card"],
          customer_email: email,
          mode: "payment",
          success_url: `${process.env.CLIENT_URL}?success=true`, //TODO these will need to change for prod
          cancel_url: `${process.env.CLIENT_URL}?success=false`,
          line_items: lineItems,
        });

        await strapi.service("api::order.order").create({
          data: {
            userName,
            email,
            products,
            shippingAddress,
            stripeId: session.id,
          },
        });

        return { stripeSession: session };
      } catch (error) {
        ctx.response.status = 500;
        return { error };
      }
    },
  })
);
