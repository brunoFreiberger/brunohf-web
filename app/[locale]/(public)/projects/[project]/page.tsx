import MarkdownDocument from "@/app/components/MarkdownDocument";
import {CONTENT_BASE} from "@/lib/content";

export default async function ProjectPage({params}: { params: Promise<{ locale: string; project: string }> }) {
    const {locale, project} = await params;
    const url = `${CONTENT_BASE}/projects/${project}/${locale}/content.md`;
    return <MarkdownDocument key={url} url={url} backHref="/projects"/>;
}
