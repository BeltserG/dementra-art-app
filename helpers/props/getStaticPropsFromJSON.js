import { getPathString } from '../strings/getPathString';

function getLocalDataFromJSON(url){
    const fs = require('fs');
    let data;
    try{
        data = JSON.parse(fs.readFileSync(url, 'utf8'));
    }catch{
        data = [];
    }
    return data;
}

function getStaticPropsFromJSON(dataNames=[]){
    const staticProps = {};

    if(dataNames.length === 0){
        return staticProps;
    }

    dataNames.map(dataName => {
        const path = getPathString(["data"], `${dataName}.json`);
        const data = getLocalDataFromJSON(path);
        staticProps[dataName] = data;
    })

    return staticProps;
}

export {getStaticPropsFromJSON}