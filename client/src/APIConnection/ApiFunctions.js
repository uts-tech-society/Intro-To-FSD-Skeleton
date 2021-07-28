const baseurl = "http://localhost:3001/api/fortunes";

// //dummy data 
// let exampleFortunes = [
//     "u will pet a cat soon :)",
//     "be conscious of time :O",
//     "be prepared for a delicious snack!!!"
//   ]

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
        body: JSON.stringify({"fortuneName": fortuneText}),
        headers: {
            'Content-Type': 'application/json'
          },
    }
    const url = baseurl + "/";
    console.log(requestPayload)
    await fetch(url, requestPayload).then(data => console.log(data));
}

//update fortune (PATCH)
export async function updateFortune(fortuneId, newText) {
    const requestPayload = {
        method: "PUT", 
        body: JSON.stringify({ "_id": fortuneId, "fortuneName": newText }),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const url = baseurl + "/";
    await fetch(url, requestPayload).then(data => console.log(data));
}

// delete fortune (DELETE)
export async function deleteFortune(fortuneId) {
    const requestPayload = {
        method: "DELETE"
    }
    const url = baseurl + "/" + fortuneId;
    await fetch(url, requestPayload).then(data => console.log(data));
}



