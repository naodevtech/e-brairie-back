import dotenv from 'dotenv';
dotenv.config();

const config = {
  app_port: process.env.APP_PORT,
  db_name: process.env.DB_NAME,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD
};

export default config;
