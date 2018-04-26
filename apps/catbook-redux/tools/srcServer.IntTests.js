let assert = require("assert");
let CatManager = require("./CatManager");
let HobbyManager = require("./HobbyManager");
// Test Class
describe("CatManager", function() {
  // D:\Git\Ggg\Ggg.Redux\app-catbook-redux\ggg-db\cats.json
  it.skip("deleteCat", function() {
    CatManager.deleteCat(1);
  });
  it("createCat", function() {
    let catToCreate = {
      name: "Cat-1",
      breed: "Breed-1",
      weight: 3,
      temperament: "Temperament-1",
      hobby_ids: [1, 2, 3, 3]
    };
    let createdCat = CatManager.createCat(catToCreate);
    console.log("createdCat:");
    console.log(createdCat.id);
    console.log(createdCat);
  });
  it.skip("updateCat", function() {
    let catToUpdate = {
      id: 1,
      name: "Cat-1",
      breed: "Breed-1",
      weight: 3,
      temperament: "Temperament-1",
      hobby_ids: [1, 2, 3, 3]
    };
    let updatedCat = CatManager.updateCat(catToUpdate);
    console.log("updatedCat:");
    console.log(updatedCat);
  });
  it.skip("generateCats", function() {
    let items = HobbyManager.getAllHobbies();
    console.log(items);
  });
  it.skip("generateCats", function() {
    let cats = CatManager.generateCats(0);
    console.log(cats);
  });
  it.skip("getAllCats", function() {
    let cats = CatManager.getAllCats();
    console.log(cats);
  });
});
