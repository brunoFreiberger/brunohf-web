"use client"

import {useParams, useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {useTranslations} from "use-intl";
import ReactMarkdown from "react-markdown";
import {ArrowLeft} from "lucide-react";

async function fetchProjects(project: string, language: string): Promise<string> {
    const res = await fetch(`https://raw.githubusercontent.com/brunoFreiberger/brunohf-web/main/content/projects/${project}/${language}/content.md`);
    return await res.text();
}

export default function ProjectPage() {
    const params = useParams<{ locale: string; project: string; }>();
    const [project, setProject] = useState<string>();
    const router = useRouter();
    const t = useTranslations('Blog');
    useEffect(() => {
        async function loadArticle() {
            fetchProjects(params.project, params.locale).then(data => {
                setProject(data);
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
                <ReactMarkdown>{project}</ReactMarkdown>
            </article>
        </div>
    )
}
