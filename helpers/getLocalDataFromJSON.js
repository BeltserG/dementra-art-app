

export function getLocalDataFromJSON(url){
    const fs = require('fs');
    const data = {
        response: ""
    }
    try{
        data["response"] = JSON.parse(fs.readFileSync(url, 'utf8'));
    }catch{
        data["response"] = false
    }
    return data;
}

// function getLocalDataFromJSON(url){
//     const fs = require('fs');
//     try{
//         const data = JSON.parse(fs.readFileSync(url, 'utf8'));
//         return data
//     }catch(e){
//         return e;
//     }
// }
// console.log(getLocalDataFromJSON("../data/social-networks.json"))