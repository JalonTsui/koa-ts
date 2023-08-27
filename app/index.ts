// 读取根目录下的.env文件，并把变量添加到process.env中
import dotenv from "dotenv";
dotenv.config();
import Koa from "koa";
import router from "./router";
import type { Server } from "http";
import { accessLoggerMW } from "./middleware/accessware";

const app = new Koa();

app.use(accessLoggerMW);

app.use(router.routes());

const run = (port: any): Server => {
  return app.listen(port);
};

export default run;
