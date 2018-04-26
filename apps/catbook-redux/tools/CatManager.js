let fs = require("fs");
let path = require("path");
let filePath = path.join(__dirname, "../ggg-db/cats.json");

class CatManager {
  static deleteCat(catId) {
    let allCats = CatManager.getAllCats();
    let catsToSave = [];
    for (let i = 0; i < allCats.length; i++) {
      let tempCat = allCats[i];
      if (tempCat.id == catId) {
        // skip this because this will be deleted
      } else {
        catsToSave.push(tempCat);
      }
    }
    CatManager.deleteAllCats();
    CatManager.saveAllCats(catsToSave);
  }
  static createCat(cat) {
    let allCats = CatManager.getAllCats();
    let lastCat = allCats[allCats.length - 1];
    let newId = lastCat.id + 1;
    cat.id = newId;
    allCats.push(cat);
    CatManager.saveAllCats(allCats);
    return cat;
  }
  static updateCat(cat) {
    let allCats = CatManager.getAllCats();
    for (let i = 0; i < allCats.length; i++) {
      let tempCat = allCats[i];
      if (tempCat.id === cat.id) {
        tempCat.name = cat.name;
        tempCat.breed = cat.breed;
        tempCat.weight = cat.weight;
        tempCat.temperament = cat.temperament;
        tempCat.hobby_ids = cat.hobby_ids;
        break;
      }
    }
    CatManager.deleteAllCats();
    CatManager.saveAllCats(allCats);
    return cat;
  }
  static saveAllCats(allCats) {
    let catsString = JSON.stringify(allCats, null, 4);
    fs.writeFileSync(filePath, catsString);
  }
  static deleteAllCats() {
    let catsString = "";
    fs.writeFileSync(filePath, catsString);
  }
  static generateCats(count) {
    let currentCats = CatManager.getAllCats();
    let catId = 1;
    if (!currentCats) {
      currentCats = [];
    } else {
      catId = currentCats[currentCats.length - 1].id;
      catId++;
    }

    for (let i = 0; i < count; i++) {
      let date = new Date();
      let newCat = {
        id: catId,
        name: "Cat-" + catId,
        breed: "Breed-" + catId,
        weight: catId + 2,
        temperament: "Temperament-" + catId,
        hobby_ids: [1, 2]
      };
      currentCats.push(newCat);
      catId++;
    }
    let catsString = JSON.stringify(currentCats, null, 4);
    fs.writeFileSync(filePath, catsString);
    return currentCats;
  }
  static getAllCats() {
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

module.exports = CatManager;
