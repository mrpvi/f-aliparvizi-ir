import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

const articlesDirectory = path.join(process.cwd(), "articles");

export interface ArticleData {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  content: string;
}

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
}

export async function getArticleBySlug(
  slug: string
): Promise<ArticleData | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(gfm).use(html).process(content);

    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      image: data.image || "",
      content: processedContent.toString(),
    };
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}

export function getAllArticles(): ArticleMeta[] {
  try {
    if (!fs.existsSync(articlesDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(articlesDirectory);
    const articles = fileNames
      .filter((name) => name.endsWith(".md"))
      .map((name) => {
        const slug = name.replace(/\.md$/, "");
        const fullPath = path.join(articlesDirectory, name);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        return {
          slug,
          title: data.title || "",
          description: data.description || "",
          date: data.date || "",
          image: data.image || "",
        };
      })
      .sort((a, b) => (a.date > b.date ? -1 : 1));

    return articles;
  } catch (error) {
    console.error("Error reading articles:", error);
    return [];
  }
}
