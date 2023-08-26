const config = {
  server: {
    port: process.env.G_SERVER_PORT,
  },
  db: {
    db_host: process.env.G_DB_HOST,
    db_port: process.env.G_DB_PORT,
    db_name: process.env.G_DB_NAME,
    db_user: process.env.G_DB_USER,
  },
};
export default config;
