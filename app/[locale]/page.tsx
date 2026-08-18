"use client"
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {useParams, useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {useTranslations} from "use-intl";

const techStack: { src: string; alt: string }[] = [
    {src: "/images/java-logo.svg", alt: "Java"},
    {src: "/images/spring-logo.svg", alt: "Spring Boot"},
    {src: "/images/node-logo.svg", alt: "Node.js"},
    {src: "/images/datadog-logo.svg", alt: "Datadog"},
    {src: "/images/angular-logo.svg", alt: "Angular"},
    {src: "/images/react-logo.svg", alt: "React"},
    {src: "/images/docker-logo.svg", alt: "Docker"},
    {src: "/images/javascript-logo.svg", alt: "JavaScript"},
];

type Project = { order: number; title: string; folder: string; image: string; description: string };

type Article = { order: number; title: string; file: string; description: string; date?: string; min?: number };
type Topic = { order: number; title: string; folder: string; articles?: Article[] };
type LatestPost = Article & { topicFolder: string };

export default function Home() {
    const router = useRouter();
    const params = useParams<{ locale: string }>();
    const t = useTranslations('HomePage');

    const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
    const [latestPosts, setLatestPosts] = useState<LatestPost[]>([]);

    useEffect(() => {
        async function loadProjects() {
            const res = await fetch(`https://raw.githubusercontent.com/brunoFreiberger/brunohf-web/main/content/projects/index/${params.locale}/index.json`);
            const data = await res.json();
            const projects: Project[] = data.projects ?? [];
            setFeaturedProjects([...projects].sort((a, b) => a.order - b.order).slice(0, 3));
        }
        loadProjects();
    }, [params.locale]);

    useEffect(() => {
        async function loadPosts() {
            const res = await fetch(`https://raw.githubusercontent.com/brunoFreiberger/brunohf-web/main/content/articles/index/${params.locale}/index.json`);
            const data = await res.json();
            const topics: Topic[] = data.topics ?? [];
            const posts: LatestPost[] = topics.flatMap((topic) =>
                (topic.articles ?? []).map((article) => ({...article, topicFolder: topic.folder}))
            );
            const latest = [...posts].sort((a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime());
            setLatestPosts(latest.slice(0, 3));
        }
        loadPosts();
    }, [params.locale]);

    const strengths = [
        {icon: "/images/strengths/dev-code.svg", title: t('profile.exp_card.title'), description: t('profile.exp_card.description')},
        {icon: "/images/strengths/customer-centric.svg", title: t('profile.cc_card.title'), description: t('profile.cc_card.description')},
        {icon: "/images/strengths/problem-solver.svg", title: t('profile.ps_card.title'), description: t('profile.ps_card.description')},
    ];

    return (
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-6 sm:px-6 lg:grid-cols-[320px_1fr] lg:gap-10 lg:px-8 lg:py-10">
            <Card className="w-full">
                <CardContent>
                    <aside className="flex flex-col items-center gap-10">
                        <div className="flex w-full flex-col items-center gap-3 text-center">
                            <Avatar className="h-24 w-24">
                                <AvatarImage src="/images/1762654788361.png" alt="Bruno Henrique Freiberger"/>
                                <AvatarFallback>BHF</AvatarFallback>
                            </Avatar>
                            <div>
                                <h2 className="font-semibold">Bruno Henrique Freiberger</h2>
                                <p className="text-sm text-muted-foreground">{t('profile.subtitle')}</p>
                            </div>
                        </div>

                        <div className="flex w-full flex-col items-center gap-3">
                            <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{t('general.social_media')}</h3>
                            <div className="flex flex-col items-center gap-3">
                                <a
                                    href="https://www.linkedin.com/in/bruno-henrique-freiberger-777090109/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                                >
                                    <Image src="/images/social-media/linkedin-logo.svg" alt="LinkedIn" width={20} height={20}/>
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com/brunofreiberger"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                                >
                                    <Image src="/images/social-media/github-logo.svg" alt="GitHub" width={20} height={20}/>
                                    GitHub
                                </a>
                            </div>
                        </div>

                        <div className="flex w-full flex-col items-center gap-3">
                            <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{t('general.tech_stack')}</h3>
                            <div className="grid grid-cols-4 gap-4">
                                {techStack.map((tech) => (
                                    <Image key={tech.alt} src={tech.src} alt={tech.alt} width={36} height={36}/>
                                ))}
                            </div>
                        </div>
                    </aside>
                </CardContent>
            </Card>

            <div className="flex w-full flex-col gap-8">
                <Card className="w-full">
                    <CardContent>
                        <main className="flex flex-col gap-16">
                            <section>
                                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                                    Full-Stack <span className="text-brand">Engineer</span>
                                </h1>
                                <p className="mt-3 text-muted-foreground">
                                    Java, Spring Boot, JavaScript, React, Next.js, Node, Golang, Angular
                                </p>
                                <p className="mt-6 max-w-2xl leading-relaxed">{t('profile.description')}</p>
                                <div className="mt-8 flex flex-wrap gap-4">
                                    <Button className="bg-brand text-brand-foreground hover:bg-brand/90">
                                        {t('general.download_cv')}
                                    </Button>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{t('general.core_strengths')}</h2>
                                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                                    {strengths.map((strength) => (
                                        <div key={strength.title} className="flex flex-col items-center gap-4 rounded-lg border border-border p-4">
                                            <Image src={strength.icon} alt="" width={40} height={40} className="shrink-0"/>
                                            <div className="w-full text-left">
                                                <h3 className="font-semibold">{strength.title}</h3>
                                                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{strength.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </main>
                    </CardContent>
                </Card>

                <Card className="w-full">
                    <CardContent>
                        <section>
                            <div className="flex items-baseline justify-between">
                                <h2 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{t('general.projects')}</h2>
                                <Button onClick={() => router.push('/projects')} variant="link" className="h-auto p-0 text-sm">{t('general.view_more')}</Button>
                            </div>
                            <div className="mt-6 flex flex-col gap-4">
                                {featuredProjects.length > 0 ? (
                                    featuredProjects.map((project) => (
                                        <Link
                                            key={project.folder}
                                            href={`/projects/${project.folder}`}
                                            className="flex gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-accent"
                                        >
                                            <Image src="/images/strengths/problem-solver.svg" alt="" width={48} height={48} className="shrink-0"/>
                                            <div>
                                                <h3 className="font-semibold">{project.title}</h3>
                                                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="text-sm text-muted-foreground">{t('general.no_projects_found')}</p>
                                )}
                            </div>
                        </section>
                    </CardContent>
                </Card>

                <Card className="w-full">
                    <CardContent>
                        <section>
                            <div className="flex items-baseline justify-between">
                                <h2 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{t('general.blog_posts')}</h2>
                                <Button onClick={() => router.push('/blog')} variant="link" className="h-auto p-0 text-sm">{t('general.view_more')}</Button>
                            </div>
                            <div className="mt-6 flex flex-col gap-4">
                                {latestPosts.length > 0 ? (
                                    latestPosts.map((post) => (
                                        <Link
                                            key={`${post.topicFolder}/${post.file}`}
                                            href={`/blog/${post.topicFolder}/${post.file}`}
                                            className="flex flex-col gap-2 rounded-lg border border-border p-4 transition-colors hover:bg-accent"
                                        >
                                            <h3 className="font-semibold">{post.title}</h3>
                                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="text-sm text-muted-foreground">{t('general.no_posts_found')}</p>
                                )}
                            </div>
                        </section>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
