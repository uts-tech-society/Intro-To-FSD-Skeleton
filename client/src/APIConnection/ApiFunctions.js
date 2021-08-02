
    const baseurl = "http://localhost:3001/api/fortunes";

// read fortunes (GET)
export async function getFortunes() {
    const url = baseurl + "/all";
    let results = await fetch(url).then(res => res.json())
    return results;
}

// get one random fortune
export async function getRandomFortune() {
    
}

// create fortune (POST)
export async function createFortune() {

}

//update fortune (PUT)
export async function updateFortune() {
    const requestOptions = {
        method: "POST",
        body: JSON.stringify({"fortuneName": fortuneText}),
        headers: {
            'Content-Type': 'application/json'
          },
    }
    const url = baseurl + "/";
    await fetch(url, requestOptions).then(data => console.log(data));
}

// delete fortune (DELETE)
export async function deleteFortune() {

}