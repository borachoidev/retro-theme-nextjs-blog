import fs from 'fs'
import path from 'path'

const getAllFiles = (dir: string) => {
  let results: string[] = []
  let list = fs.readdirSync(dir)
  list.forEach(file => {
    file = dir + '/' + file

    let stat = fs.statSync(file)
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(file))
    } else {
      results.push(file)
    }
  })
  return results
}

const getFiles = (type: string) => {
  const prefixPaths = path.join(process.cwd(), 'contents', type)
  const files = getAllFiles(prefixPaths)

  return files.map(file =>
    file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
  )
}

export { getAllFiles, getFiles }
