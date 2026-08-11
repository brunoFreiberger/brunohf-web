"use client"

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";

export type Article = {
   title: string, description: string, file: string, min: number, date: string
}

export type Topic = {
    order: number, title: string, folder: string, articles: Article[]
}

export default function BlogPage() {
    const [topics, setTopics] = useState<Topic[]>([]);
    const params = useParams<{ locale: string; }>();

    useEffect(() => {
        async function loadContent() {
            const res = await fetch(`https://raw.githubusercontent.com/brunoFreiberger/brunohf-web/main/content/articles/index/${params.locale}/index.json`);
            const data = await res.json();
            setTopics(data.topics);
        }
        loadContent();
    }, [params.locale])
    return (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
            <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
            <Tabs defaultValue="development" orientation="vertical" className="mt-8 flex-col items-start gap-8 lg:flex-row">
                <TabsList className="h-fit w-full shrink-0 flex-col items-stretch justify-start gap-1 bg-transparent p-0 lg:w-48">
                    {topics.map((item, index: number) => {
                        return <TabsTrigger key={index} value={item.folder} className="w-full justify-start">{item.title}</TabsTrigger>
                    })}
                </TabsList>
                <div className="min-w-0 flex-1">
                    {
                        topics.map((topic, index: number) => {
                            return (
                                <TabsContent className="w-full" key={index} value={topic.folder}>
                                    {
                                        topic.articles && topic.articles.length > 0 ?
                                            (topic.articles.map((article: Article, index: number) => {
                                                return (
                                                    <Link key={index} href={`blog/${topic.folder}/${article.file}`}>
                                                        <div className="flex w-full flex-col gap-2 py-6">
                                                            <span
                                                                className="text-xl font-semibold hover:text-brand md:text-2xl lg:text-3xl">{article.title}</span>
                                                            <span
                                                                className="text-muted-foreground">{article.description}</span>
                                                            <span
                                                                className="text-xs text-muted-foreground">{article.date} - {article.min} min. read</span>
                                                        </div>
                                                        <Separator/>
                                                    </Link>
                                                )
                                            })) :
                                            <div className="py-6 text-sm text-muted-foreground">No articles found</div>
                                    }
                                </TabsContent>
                            )
                        })
                    }
                </div>
            </Tabs>
        </div>
    );
}
