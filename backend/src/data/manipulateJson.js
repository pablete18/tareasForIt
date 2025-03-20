import {readFileSync, writeFileSync} from 'fs'
import path from "path"
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

export const leerJson = (json)=>
    JSON.parse(readFileSync(path.join(__dirname, json), "utf-8"));

export const escribirJson = (array)=>
    writeFileSync(
        path.join(__dirname,"tasks.json"),
        JSON.stringify(array, null, 3),
        "utf-8"
      );

