"use client"

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {useTranslations} from "use-intl";
import {EntryLink, EntryList, EntrySoon, Loading, PageHeader} from "@/app/components/Page";
import {articleMeta, CONTENT_BASE, type Topic} from "@/lib/content";

export default function BlogPage() {
    const [topics, setTopics] = useState<Topic[]>();
    const [tab, setTab] = useState<string>();
    const params = useParams<{ locale: string; }>();
    const t = useTranslations('Blog');

    useEffect(() => {
        async function loadContent() {
            const res = await fetch(`${CONTENT_BASE}/articles/index/${params.locale}/index.json`);
            const data = await res.json();
            const list: Topic[] = data.topics ?? [];
            setTopics([...list].sort((a, b) => a.order - b.order));
        }
        loadContent();
    }, [params.locale])

    return (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
            <PageHeader title="Blog"/>
            {topics === undefined ? (
                <Loading label={t('loading')}/>
            ) : (
                // Opens on the first topic; no topic name is hardcoded.
                <Tabs value={tab ?? topics[0]?.folder} onValueChange={setTab} orientation="vertical"
                      className="flex-col items-start gap-8 lg:flex-row lg:gap-16">
                    {/* Topics wrap on phones and stack in a sidebar on desktop. */}
                    <TabsList className="w-full shrink-0 flex-wrap justify-start lg:w-52 lg:flex-col lg:items-stretch">
                        {topics.map((topic) => (
                            <TabsTrigger key={topic.folder} value={topic.folder} className="lg:justify-between">
                                {topic.title}
                                <span className="text-xs opacity-70">({topic.articles?.length ?? 0})</span>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <div className="w-full min-w-0 flex-1">
                        {topics.map((topic) => (
                            <TabsContent key={topic.folder} value={topic.folder}>
                                {topic.articles && topic.articles.length > 0 ? (
                                    <EntryList>
                                        {/* Published posts first, then the planned ones. */}
                                        {[...topic.articles].sort((a, b) => Number(!!a.soon) - Number(!!b.soon)).map((article) =>
                                            article.soon ? (
                                                <EntrySoon
                                                    key={article.file}
                                                    title={article.title}
                                                    description={article.description}
                                                    label={t('coming_soon')}
                                                />
                                            ) : (
                                                <EntryLink
                                                    key={article.file}
                                                    href={`/blog/${topic.folder}/${article.file}`}
                                                    title={article.title}
                                                    description={article.description}
                                                    meta={articleMeta(article, params.locale, t('min_read'))}
                                                />
                                            )
                                        )}
                                    </EntryList>
                                ) : (
                                    <p className="text-sm text-muted-foreground">{t('no_articles')}</p>
                                )}
                            </TabsContent>
                        ))}
                    </div>
                </Tabs>
            )}
        </div>
    );
}
