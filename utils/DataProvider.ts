import { parse } from 'csv-parse/sync'
import fs from 'fs'

class DataProvider {
    public readCSV(filePath: string):any {
        return parse(fs.readFileSync(filePath, { encoding: 'utf-8' }), { columns: true, skip_empty_lines: true })
    }
    public readJSON(filePath: string) {
        return JSON.parse(fs.readFileSync(filePath, { encoding: 'utf-8' }))
    }

    public writeToCSV(fileName:string,content:string){
        content = content.endsWith('\n') ? content : `${content}\n`
        fs.appendFileSync('testData/'+fileName+".csv",content,'utf-8')
    }
}

export default DataProvider