import { getLogger, configure } from "log4js";

configure({
  // 配置打印log的文件
  appenders: {
    cheese: { type: "file", filename: "log/cheese.log" },
    access: { type: "file", filename: "log/access.log" },
  },

  // 打印级别,会把日志打印到目录下的cheese.log文件中
  categories: {
    default: { appenders: ["cheese"], level: "info" },
    access: {
      appenders: ["access"],
      level: "info",
    },
  },
});

const logger = getLogger();

export const accessLogger = getLogger("access");

export default logger;
