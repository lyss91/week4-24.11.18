// 11월 19일(화) node.js dayjs 설치 이후 작업
import hi, { say, smile } from "./util.js";
import dayjs from "dayjs";

say();
smile();
hi();
const now = dayjs();
console.log(now.format("YYYY-MM-DD HH:mm:ss"));
