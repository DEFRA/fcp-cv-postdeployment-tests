import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url) // get the resolved path to the file
const __dirname = path.dirname(__filename) // get the name of the directory

const dataDir = '../data/' + process.env.ENVIRONMENT + '/'

export function getSbi() {
  const sbis = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, dataDir + 'sbi.json'), 'utf8')
  )
  return sbis[Math.floor(Math.random() * sbis.length)]
}
