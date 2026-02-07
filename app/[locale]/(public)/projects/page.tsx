"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
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
        <div className="w-full lg:mx-auto h-full justify-center items-center flex flex-col p-10">
            <div>Portfolio</div>
            {projects.map((project, index: number) => {
                return <div key={index} className="flex flex-row w-full lg:w-2/3 gap-4">
                    <Card
                        className="w-full transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] mt-4">
                        <CardHeader className="w-full flex flex-col justify-center items-center gap-4">
                            <CardTitle>{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {project.description}
                        </CardContent>
                    </Card>
                </div>
            })}
        </div>
    );
}