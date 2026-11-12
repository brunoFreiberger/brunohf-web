// Blog posts and projects live in the repo's content/ folder and are read from GitHub's main branch at runtime.
export const CONTENT_BASE = "https://raw.githubusercontent.com/brunoFreiberger/brunohf-web/main/content";

export type Project = { order: number; title: string; folder: string; image: string; description: string };

/**
 * A blog post in a topic's index.json. `file` is the Markdown file name without ".md".
 * `soon: true` lists a planned post as "Coming soon" without a link; remove it once the file is written.
 */
export type Article = {
    order?: number;
    title: string;
    file: string;
    description?: string;
    date?: string;
    min?: number;
    soon?: boolean
};

export type Topic = { order: number; title: string; folder: string; articles?: Article[] };

/**
 * Whether the projects index lists any project. Used on the server to hide the Projects
 * menu link and home section while there are none. Re-checked at most every 5 minutes.
 * If GitHub can't be reached, it answers true so the link isn't hidden by mistake.
 */
export async function hasProjects(locale: string): Promise<boolean> {
    try {
        const res = await fetch(`${CONTENT_BASE}/projects/index/${locale}/index.json`, {
            next: {revalidate: 300},
            signal: AbortSignal.timeout(3000),
        });
        if (!res.ok) return true;
        const data = await res.json();
        return (data.projects?.length ?? 0) > 0;
    } catch {
        return true;
    }
}

/** "Nov 2, 2026 · 6 min read", leaving out whatever the index doesn't provide. */
export function articleMeta(article: Article, locale: string, minRead: string): string | undefined {
    const parts: string[] = [];
    if (article.date) {
        const date = new Date(article.date);
        parts.push(Number.isNaN(date.getTime())
            ? article.date
            : date.toLocaleDateString(locale, {year: "numeric", month: "short", day: "numeric", timeZone: "UTC"}));
    }
    if (article.min) parts.push(`${article.min} ${minRead}`);
    return parts.length ? parts.join(" · ") : undefined;
}
