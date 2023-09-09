import { getPathString } from '../strings/getPathString';
async function getStaticPropsFromJSON(url, dataName=""){
    const data = getLocalDataFromJSON(url, dataName);
    return {
        props:{
            [dataName]: data
        }
    }
}

function getLocalDataFromJSON(url, dataName=""){
    const fs = require('fs');
    let data;
    try{
        data = JSON.parse(fs.readFileSync(url, 'utf8'));
    }catch{
        data = [];
    }
    return data;
}

export {getStaticPropsFromJSON}