// app/lib/utils/markdown.js
import fs from 'fs';
import path from 'path';
import { promises as fsPromises } from 'fs';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import yaml from 'js-yaml';

// Function to fetch markdown content from file path or URL
export async function fetchMarkdownContent(source) {
  if (source.startsWith('http')) {
    try {
      const response = await fetch(source);
      if (!response.ok) {
        throw new Error(`Failed to fetch markdown: ${response.statusText}`);
      }
      return await response.text();
    } catch (error) {
      console.error('Error fetching markdown:', error);
      return 'Error loading content';
    }
  } else {
    try {
      // For local file paths
      const filePath = path.join(process.cwd(), 'public', source);
      const content = await fsPromises.readFile(filePath, 'utf8');
      return content;
    } catch (error) {
      console.error('Error reading markdown file:', error);
      return 'Error loading content';
    }
  }
}

// Function to extract headings from markdown for table of contents
export function extractHeadings(markdownContent) {
  if (!markdownContent) return [];
  
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const matches = [...markdownContent.matchAll(headingRegex)];
  
  return matches.map(match => {
    const level = match[1].length;
    const text = match[2].trim();
    const slug = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    
    return { level, text, slug };
  });
}

// Function to ensure all headings have unique ids for anchor links
export function addIdsToHeadings(markdownContent) {
  if (!markdownContent) return '';
  
  const headings = extractHeadings(markdownContent);
  let content = markdownContent;
  
  // Create a map to track used slugs
  const slugs = new Map();
  
  headings.forEach(({ text, slug }) => {
    // Handle duplicate slugs by adding a counter
    let uniqueSlug = slug;
    if (slugs.has(slug)) {
      let count = slugs.get(slug) + 1;
      slugs.set(slug, count);
      uniqueSlug = `${slug}-${count}`;
    } else {
      slugs.set(slug, 1);
    }
    
    // Replace the heading with an id-augmented version
    const regex = new RegExp(`^(#+ )${text}$`, 'm');
    content = content.replace(regex, `$1${text} {#${uniqueSlug}}`);
  });
  
  return content;
}

export function getMarkdownMetadata(content) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkFrontmatter, ['yaml'])
    .use(remarkGfm);

  const tree = processor.parse(content);
  let metadata = {};

  if (tree.children.length > 0 && tree.children[0].type === 'yaml') {
    try {
      metadata = yaml.load(tree.children[0].value) || {};
    } catch (e) {
      console.error('Error parsing frontmatter:', e);
    }
  }

  return metadata;
}

export function removeMarkdownFrontmatter(content) {
  const lines = content.split('\n');
  if (lines[0] === '---') {
    const endIndex = lines.findIndex((line, index) => index > 0 && line === '---');
    if (endIndex !== -1) {
      return lines.slice(endIndex + 1).join('\n').trim();
    }
  }
  return content;
}