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
        <div className="w-full lg:mx-auto h-full justify-center items-center flex flex-col p-10">
            <div>Blog</div>
            <div className="flex flex-row w-full lg:w-2/3 gap-4">
                <Tabs defaultValue="development" className="w-full items-center py-4">
                    <TabsList className="w-full overflow-x-auto">
                        {topics.map((item, index: number) => {
                            return <TabsTrigger key={index} value={item.folder}>{item.title}</TabsTrigger>
                        })}
                    </TabsList>
                    {
                        topics.map((topic, index: number) => {
                            return (
                                <TabsContent className="w-full" key={index} value={topic.folder}>
                                    {
                                        topic.articles && topic.articles.length > 0 ?
                                            (topic.articles.map((article: Article, index: number) => {
                                                return (
                                                    <Link key={index} href={`blog/${topic.folder}/${article.file}`}>
                                                        <div className=" py-4 w-full flex flex-col gap-4 font-mono">
                                                            <span
                                                                className="text-xl font-bold text-heading md:text-2xl lg:Text-3xl">{article.title}</span>
                                                            <span
                                                                className="text-neutral-400">{article.description}</span>
                                                            <span className="text-xs">{article.date} - {article.min} min. read</span>
                                                            <Separator/>
                                                        </div>
                                                    </Link>
                                                )
                                            })) :
                                            <div>No articles found</div>
                                    }
                                </TabsContent>
                            )
                        })
                    }
                </Tabs>
            </div>
        </div>
    );
}