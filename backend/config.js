const config = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  database_password: process.env.DATABASE_PASSWORD,
  allowedDomains:
    process.env.NODE_ENV === "production"
      ? [process.env.REMOTE_CLIENT_APP, process.env.REMOTE_BACKEND_API]
      : [process.env.LOCAL_CLIENT_APP, process.env.LOCAL_BACKEND_API],
};

 export default config;