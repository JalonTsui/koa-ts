import type { Context, Next } from "koa";
import { accessLogger } from "../logger";

function accessLoggerMW(ctx: Context, next: Next) {
  const info = `path: ${ctx.path} | method: ${ctx.method} | ua: ${ctx.headers["user-agent"]}`;
  accessLogger.info(info);
  return next();
}

export { accessLoggerMW };
