/**
 * Parse YAML-like frontmatter from a raw markdown string.
 * Handles simple key: value pairs between --- delimiters.
 *
 * @param {string} raw - Raw file contents
 * @returns {{ data: Record<string, string>, content: string }}
 */
export function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { data: {}, content: raw };
  }

  const [, frontmatter, content] = match;
  const data = {};

  for (const line of frontmatter.split('\n')) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;
    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();
    if (key) data[key] = value;
  }

  return { data, content };
}

/**
 * Load all blog posts for a given language using import.meta.glob.
 * Posts are sorted by date descending (requires a `date` frontmatter field).
 *
 * @param {'en' | 'pt'} lang
 * @returns {Promise<Array<{ slug: string, data: Record<string, string>, content: string }>>}
 */
export async function loadBlogPosts(lang) {
  const modules = {
    en: import.meta.glob('/content/blog/en/*.md', { query: '?raw', import: 'default' }),
    pt: import.meta.glob('/content/blog/pt/*.md', { query: '?raw', import: 'default' }),
  };

  const files = modules[lang] ?? {};

  const posts = await Promise.all(
    Object.entries(files).map(async ([path, load]) => {
      const raw = await load();
      const { data, content } = parseFrontmatter(raw);
      const slug = path.split('/').pop().replace(/\.md$/, '');
      return { slug, data, content };
    })
  );

  return posts.sort((a, b) => {
    const dateA = a.data.date ? new Date(a.data.date) : new Date(0);
    const dateB = b.data.date ? new Date(b.data.date) : new Date(0);
    return dateB - dateA;
  });
}
