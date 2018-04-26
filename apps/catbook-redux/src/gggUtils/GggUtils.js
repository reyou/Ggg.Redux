//=============================================================================
// D:\Git\Ggg\Ggg.NodeJs\app\Ggg\GggCencor.js
//=============================================================================
// https://www.npmjs.com/package/circular-json
const CircularJSON = require("circular-json");
export default class GggUtils {
  static serialize(obj) {
    let text = CircularJSON.stringify(obj);
    return text;
  }
}
//=============================================================================
