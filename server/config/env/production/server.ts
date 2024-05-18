export default ({ env }) => ({
  proxy: true,
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("APP_URL", "https://www.goodwinbiking.com/api"), // Sets the public URL of the application, Do not change
  //   url: env("PUBLIC_URL" , "https://www.goodwinbiking.com/api"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
