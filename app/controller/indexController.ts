import type { Context } from "koa";
import logger from "../logger";

class IndexController {
  async index(ctx: Context) {
    logger.info("msg", "msg");
    ctx.body = "hello world";
  }
}

export default new IndexController();
