import { getLogger, configure } from "log4js";

configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  // 打印级别,会把日志打印到目录下的cheese.log文件中
  categories: { default: { appenders: ["cheese"], level: "info" } },
});

const logger = getLogger();

export default logger;
