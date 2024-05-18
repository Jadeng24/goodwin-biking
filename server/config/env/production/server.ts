export default ({ env }) => ({
  proxy: true,
  host: env("HOST", "www.goodwinbiking.com/"),
  port: env.int("PORT", 1337),
  url: env("APP_URL"), // Sets the public URL of the application, Do not change
  app: {
    keys: env.array("APP_KEYS"),
  },
});
