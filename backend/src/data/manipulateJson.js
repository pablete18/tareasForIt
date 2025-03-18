import {readFileSync, writeFileSync} from 'fs'
import path from "path"

export const leerJson = (json)=>
    JSON.parse(readFileSync(path.join(__dirname, json), "utf-8"));

export const escribirJson = (array)=>
    writeFileSync(
        path.join(__dirname),
        JSON.stringify(array, null, 3),
        "utf-8"
      );

