"use client"

import {useParams, useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {useTranslations} from "use-intl";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import ReactMarkdown from "react-markdown";

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
        <div className="w-3/4 lg:w-2/3 mx-auto mt-10">
            <Button onClick={() => router.back()}>{t('back')}</Button>
            <Card className="mt-10">
                <CardContent>
                    <article className="prose dark:prose-invert max-w-none">
                        <ReactMarkdown>{project}</ReactMarkdown>
                    </article>
                </CardContent>
            </Card>
        </div>
    )
}