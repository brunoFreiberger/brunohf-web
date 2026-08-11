"use client"

import {useEffect, useState} from "react";
import {useParams} from "next/navigation";

export type Project = {
    title: string, description: string, link: string, image: string
}

export default function PortfolioPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const params = useParams<{ locale: string; }>();

    useEffect(() => {
        async function loadContent() {
            const res = await fetch(`https://raw.githubusercontent.com/brunoFreiberger/brunohf-web/main/content/projects/index/${params.locale}/index.json`);
            const data = await res.json();
            setProjects(data.projects);
        }

        loadContent();
    }, [params.locale])

    return (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
            <h1 className="text-3xl font-semibold tracking-tight">Portfolio</h1>
            <div className="mt-8 flex flex-col gap-4">
                {
                    projects?.map((project, index: number) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-lg border border-border p-4 transition-colors hover:bg-accent"
                        >
                            <h2 className="font-semibold">{project.title}</h2>
                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                        </a>
                    ))
                }
            </div>
        </div>
    );
}
