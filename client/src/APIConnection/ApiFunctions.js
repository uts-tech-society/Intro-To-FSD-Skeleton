const baseurl = "http://localhost:3001/api/fortunes";

//dummy data 
let exampleFortunes = [
    "u will pet a cat soon :)",
    "be conscious of time :O",
    "be prepared for a delicious snack!!!"
  ]

// read fortunes (GET)
export async function getFortunes() {
    const url = baseurl + "/all";
    let results = await fetch(url).then(res => res.json())
    console.log(results)
    return results;

}

// get one random fortune
export async function getRandomFortune() {
    const url = baseurl + "/random";
    let results = await fetch(url).then(res => res.json())
    console.log(results)
    return results;
}

// create fortune (POST)
export async function createFortune(fortuneText) {
    const requestPayload = {
        method: "POST",
        body: fortuneText
    }
    const url = baseurl + "/";
    await fetch(url, requestPayload).then(data => console.log(data));
}

//update fortune (PATCH)
export function updateFortune(fortuneId, newText) {
    console.log(`update fortune: ${fortuneId} with ${newText}`)
}

// delete fortune (DELETE)
export function deleteFortune(fortuneId) {
    console.log(`delete fortune ${fortuneId}`)
}



