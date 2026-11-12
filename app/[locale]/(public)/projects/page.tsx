"use client"

import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {useTranslations} from "use-intl";
import {EntryLink, EntryList, Loading, PageHeader} from "@/app/components/Page";
import {CONTENT_BASE, type Project} from "@/lib/content";

export default function PortfolioPage() {
    const [projects, setProjects] = useState<Project[]>();
    const params = useParams<{ locale: string; }>();
    const tNav = useTranslations('Navbar');
    const tHome = useTranslations('HomePage');
    const tBlog = useTranslations('Blog');

    useEffect(() => {
        async function loadContent() {
            const res = await fetch(`${CONTENT_BASE}/projects/index/${params.locale}/index.json`);
            const data = await res.json();
            const list: Project[] = data.projects ?? [];
            setProjects([...list].sort((a, b) => a.order - b.order));
        }

        loadContent();
    }, [params.locale])

    return (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
            <PageHeader title={tNav('projects')}/>
            {projects === undefined ? (
                <Loading label={tBlog('loading')}/>
            ) : projects.length === 0 ? (
                <p className="text-sm text-muted-foreground">{tHome('general.no_projects_found')}</p>
            ) : (
                <EntryList className="max-w-4xl">
                    {projects.map((project) => (
                        <EntryLink
                            key={project.folder}
                            href={`/projects/${project.folder}`}
                            title={project.title}
                            description={project.description}
                        />
                    ))}
                </EntryList>
            )}
        </div>
    );
}
