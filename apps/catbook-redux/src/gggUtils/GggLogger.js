//=============================================================================
// D:\Git\Ggg\Ggg.NodeJs\app\GggLoggly\README.MD
// https://www.npmjs.com/package/node-loggly-bulk
// https://fooception.loggly.com/live_tail/
//=============================================================================
const winston = require("winston");
require("winston-loggly-bulk");
winston.clear();
winston.add(winston.transports.Console, {
  formatter: function(options) {
    console.log("GggLogger: ", options.message);
  }
});
winston.add(winston.transports.Loggly, {
  token: "4733362c-93a5-441e-9a05-e4d55d1d8793",
  subdomain: "fooception",
  tags: ["Winston-NodeJS"],
  json: true
});
//=============================================================================
export default class GggLogger {
  static log(message) {
    winston.info(message);
  }
}
//=============================================================================
