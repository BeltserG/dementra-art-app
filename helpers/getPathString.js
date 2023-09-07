export function getPathString(pathList = [], fileName){
    const path = require("path");
    const filePath = path.join(process.cwd(), ...pathList, fileName);
    return filePath;
}