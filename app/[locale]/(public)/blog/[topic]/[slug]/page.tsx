"use client"

import {useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";
import ReactMarkdown from "react-markdown";
import {useTranslations} from "use-intl";
import {ArrowLeft} from "lucide-react";

async function fetchArticles(topic: string, slug: string, language: string): Promise<string> {
    const res = await fetch(`https://raw.githubusercontent.com/brunoFreiberger/brunohf-web/main/content/articles/${topic}/${language}/${slug}.md`);
    return await res.text();
}

export default function ArticlePage() {
    const params = useParams<{ locale: string; topic: string; slug: string }>();
    const [article, setArticle] = useState<string>();
    const router = useRouter();
    const t = useTranslations('Blog');
    useEffect(() => {
        async function loadArticle() {
            fetchArticles(params.topic, params.slug, params.locale).then(data => {
                setArticle(data);
            });
        }
        loadArticle();
    }, [params.locale]);
    return (
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
            <button
                onClick={() => router.back()}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
                <ArrowLeft className="size-4"/>
                {t('back')}
            </button>
            <article className="prose dark:prose-invert mt-10 max-w-none">
                <ReactMarkdown>{article}</ReactMarkdown>
            </article>
        </div>
    )
}
