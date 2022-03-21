import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import slug from 'github-slugger'

import { ContentType } from 'src/type/index'
import { dateSortDesc } from './commons'
import { dateFormat } from './date'

const root = process.cwd()
const { slug: kebabCase } = slug
/**
 *
 * @param dir:string - dir or file name
 * @returns string[] - file names array with root path
 */
export const getAllFiles = (dir: string): string[] => {
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

/**
 *
 * @param type :'blog'| '_about' - contents type
 * @returns string[] - file names array without root path
 */

export const getFiles = (type: ContentType) => {
  const prefixPaths = path.join(root, 'contents', type)

  const files = getAllFiles(prefixPaths)

  return files.map(file =>
    file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
  )
}
/**
 *
 * @param type :'blog'| '_about' - contents type
 * @returns string[] - tags array
 */
export async function getAllTags(type: ContentType) {
  const files = await getFiles(type)

  let tags: string[] = []
  const tagie = {}
  files.forEach(file => {
    const source = fs.readFileSync(
      path.join(root, 'contents', type, file),
      'utf8'
    )
    const { data } = matter(source)
    if (data.tags && data.draft !== true) {
      data.tags.forEach((tag: string) => {
        const formattedTag = kebabCase(tag)
        if (!tags.includes(formattedTag)) {
          tags.push(formattedTag)
        }
      })
    }
  })

  return tags
}

export async function getPostFrontmatters(type: ContentType) {
  const files = getFiles(type)

  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), 'contents', type, filename),
      'utf-8'
    )
    const { data } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter: { ...data, date: dateFormat(data.date) },
    }
  })

  return posts.sort((a, b) =>
    dateSortDesc(a.frontmatter.date, b.frontmatter.date)
  )
}
