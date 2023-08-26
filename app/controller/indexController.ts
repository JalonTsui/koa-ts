import type { Context } from "koa";

class IndexController {
  async index(ctx: Context) {
    ctx.body = "hello world";
  }
}

export default new IndexController();
