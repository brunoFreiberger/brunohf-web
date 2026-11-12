import MarkdownDocument from "@/app/components/MarkdownDocument";
import {CONTENT_BASE} from "@/lib/content";

export default async function ArticlePage({params}: { params: Promise<{ locale: string; topic: string; slug: string }> }) {
    const {locale, topic, slug} = await params;
    const url = `${CONTENT_BASE}/articles/${topic}/${locale}/${slug}.md`;
    return <MarkdownDocument key={url} url={url} backHref="/blog"/>;
}
