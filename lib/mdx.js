import { bundleMDX } from 'mdx-bundler'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'
import { visit } from 'unist-util-visit'
import getAllFilesRecursively from './utils/files'

export function getFiles(type) {
    const prefixPaths = path.join(root, 'data', type)
    const files = getAllFilesRecursively(prefixPaths)
    // Only want to return blog/path and ignore root, replace is needed to work on Windows
    return files.map((file) => file.slice(prefixPaths.length + 1).replace(/\\/g, '/'))
}