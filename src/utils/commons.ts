import slug from 'github-slugger'
const { slug: slugger } = slug

export function dateSortDesc(a: string, b: string) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export const kebabCase = (text: string, uppercase?: boolean) => {
  return uppercase ? slugger(text).toUpperCase() : slugger(text)
}
