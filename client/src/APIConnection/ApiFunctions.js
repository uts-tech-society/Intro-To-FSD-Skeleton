//connect to the api


//CRUD methods - create, read, update, delete

//dummy data 
let exampleFortunes = [
    "u will pet a cat soon :)",
    "be conscious of time :O",
    "be prepared for a delicious snack!!!"
  ]

// read fortunes (GET)
export function getFortunes() {
    console.log("get fortunes")
    return exampleFortunes;
}

// get one random fortune
export function getRandomFortune() {
    console.log("get one random fortune")
}

// create fortune (POST)
export function createFortune(fortuneText) {
    exampleFortunes.push(fortuneText);
    console.log(`create fortune with text: ${fortuneText}`)
    console.log(exampleFortunes)
}

//update fortune (PATCH)
export function updateFortune(fortuneId, newText) {
    console.log(`update fortune: ${fortuneId} with ${newText}`)
}

// delete fortune (DELETE)
export function deleteFortune(fortuneId) {
    console.log(`delete fortune ${fortuneId}`)
}



