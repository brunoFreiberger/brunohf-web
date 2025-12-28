"use client"

import {useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";
import ReactMarkdown from "react-markdown";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {useTranslations} from "use-intl";

async function fetchArticles(topic: string, slug: string, language: string): Promise<string> {
    const res = await fetch(`https://raw.githubusercontent.com/brunoFreiberger/brunohf-web/main/articles/${topic}/${language}/${slug}.md`);
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
        <div className="w-3/4 lg:w-2/3 mx-auto mt-10">
            <Button onClick={() => router.back()}>{t('back')}</Button>
            <Card className="mt-10">
                <CardContent>
                    <article className="prose dark:prose-invert max-w-none">
                        <ReactMarkdown>{article}</ReactMarkdown>
                    </article>
                </CardContent>
            </Card>
        </div>
    )
}