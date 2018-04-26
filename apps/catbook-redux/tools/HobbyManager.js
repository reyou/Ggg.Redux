let fs = require("fs");
let path = require("path");
let filePath = path.join(__dirname, "../ggg-db/hobbies.json");

class HobbyManager {
  static getAllHobbies() {
    try {
      let textData = fs.readFileSync(filePath, "utf8");
      if (textData && textData.length > 0) {
        let cats = JSON.parse(textData);
        return cats;
      }
      return null;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = HobbyManager;
