"use client"
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Link} from "@/i18n/navigation";
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {useTranslations} from "use-intl";
import {ArrowUpRight, CodeXml, Handshake, Puzzle} from "lucide-react";
import {EntryLink, EntryList, SectionLabel} from "@/app/components/Page";
import {type Article, articleMeta, CONTENT_BASE, type Project, type Topic} from "@/lib/content";
import {cn} from "@/lib/utils";

const techStack = ["Java", "Spring Boot", "Node.js", "Datadog", "Angular", "React", "Docker", "JavaScript"];

const socialLinks = [
    {label: "LinkedIn", href: "https://www.linkedin.com/in/bruno-henrique-freiberger-777090109/"},
    {label: "GitHub", href: "https://github.com/brunofreiberger"},
];

type LatestPost = Article & { topicFolder: string };

/** The home page. `showProjects` is false while there are no projects, which hides the projects section. */
export default function Home({showProjects}: { showProjects: boolean }) {
    const params = useParams<{ locale: string }>();
    const t = useTranslations('HomePage');
    const tBlog = useTranslations('Blog');

    const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
    const [latestPosts, setLatestPosts] = useState<LatestPost[]>([]);

    useEffect(() => {
        if (!showProjects) return;
        async function loadProjects() {
            const res = await fetch(`${CONTENT_BASE}/projects/index/${params.locale}/index.json`);
            const data = await res.json();
            const projects: Project[] = data.projects ?? [];
            setFeaturedProjects([...projects].sort((a, b) => a.order - b.order).slice(0, 3));
        }
        loadProjects();
    }, [params.locale, showProjects]);

    useEffect(() => {
        async function loadPosts() {
            const res = await fetch(`${CONTENT_BASE}/articles/index/${params.locale}/index.json`);
            const data = await res.json();
            const topics: Topic[] = data.topics ?? [];
            const posts: LatestPost[] = topics.flatMap((topic) =>
                (topic.articles ?? []).filter((article) => !article.soon).map((article) => ({...article, topicFolder: topic.folder}))
            );
            const latest = [...posts].sort((a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime());
            setLatestPosts(latest.slice(0, 3));
        }
        loadPosts();
    }, [params.locale]);

    const strengths = [
        {icon: CodeXml, title: t('profile.exp_card.title'), description: t('profile.exp_card.description')},
        {icon: Handshake, title: t('profile.cc_card.title'), description: t('profile.cc_card.description')},
        {icon: Puzzle, title: t('profile.ps_card.title'), description: t('profile.ps_card.description')},
    ];

    return (
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-16 gap-y-14 px-4 py-10 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8 lg:py-16">
            {/* Source order is the phone order (intro first); on desktop the profile sits in the left column. */}
            <section className="lg:col-start-2 lg:row-start-1">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Full-Stack Engineer</h1>
                <p className="mt-3 text-sm text-muted-foreground">
                    Java · Spring Boot · JavaScript · React · Next.js · Node · Angular
                </p>
                <p className="mt-6 max-w-2xl leading-relaxed">{t('profile.description')}</p>
                <Button asChild className="mt-8">
                    <a href="/cv.pdf" download="Bruno-Henrique-Freiberger-CV.pdf">
                        {t('general.download_cv')}
                    </a>
                </Button>

                <section className="mt-14">
                    <SectionLabel>{t('general.core_strengths')}</SectionLabel>
                    <ul className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
                        {strengths.map((strength) => (
                            <li key={strength.title}>
                                <h3 className="flex gap-2 font-semibold">
                                    <strength.icon aria-hidden className="mt-1 size-4 shrink-0 text-muted-foreground"/>
                                    {strength.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{strength.description}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </section>

            <aside className={cn("lg:sticky lg:top-24 lg:col-start-1 lg:row-start-1 lg:self-start", showProjects ? "lg:row-span-3" : "lg:row-span-2")}>
                <Avatar className="size-24 rounded-[4px]">
                    <AvatarImage src="/images/profile.webp" alt="Bruno Henrique Freiberger"/>
                    <AvatarFallback className="rounded-[4px]">BHF</AvatarFallback>
                </Avatar>
                <h2 className="mt-4 font-semibold">Bruno Henrique Freiberger</h2>
                <p className="mt-1 text-sm text-muted-foreground">{t('profile.subtitle')}</p>

                <section className="mt-8">
                    <SectionLabel as="h3">{t('general.social_media')}</SectionLabel>
                    <ul className="mt-1">
                        {socialLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 py-1.5 text-sm underline-offset-4 hover:underline"
                                >
                                    {link.label}
                                    <ArrowUpRight aria-hidden className="size-3.5 text-muted-foreground"/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mt-8">
                    <SectionLabel as="h3">{t('general.tech_stack')}</SectionLabel>
                    <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                        {techStack.map((tech) => <li key={tech}>{tech}</li>)}
                    </ul>
                </section>
            </aside>

            {showProjects && (
                <section className="lg:col-start-2 lg:row-start-2">
                    <div className="flex items-baseline justify-between gap-4">
                        <SectionLabel>{t('general.projects')}</SectionLabel>
                        <Link href="/projects" className="-my-2 py-2 text-sm text-muted-foreground hover:text-foreground">
                            {t('general.view_more')}
                        </Link>
                    </div>
                    {featuredProjects.length > 0 ? (
                        <EntryList className="mt-4">
                            {featuredProjects.map((project) => (
                                <EntryLink
                                    key={project.folder}
                                    href={`/projects/${project.folder}`}
                                    title={project.title}
                                    description={project.description}
                                />
                            ))}
                        </EntryList>
                    ) : (
                        <p className="mt-4 text-sm text-muted-foreground">{t('general.no_projects_found')}</p>
                    )}
                </section>
            )}

            <section className={cn("lg:col-start-2", showProjects ? "lg:row-start-3" : "lg:row-start-2")}>
                <div className="flex items-baseline justify-between gap-4">
                    <SectionLabel>{t('general.blog_posts')}</SectionLabel>
                    <Link href="/blog" className="-my-2 py-2 text-sm text-muted-foreground hover:text-foreground">
                        {t('general.view_more')}
                    </Link>
                </div>
                {latestPosts.length > 0 ? (
                    <EntryList className="mt-4">
                        {latestPosts.map((post) => (
                            <EntryLink
                                key={`${post.topicFolder}/${post.file}`}
                                href={`/blog/${post.topicFolder}/${post.file}`}
                                title={post.title}
                                description={post.description}
                                meta={articleMeta(post, params.locale, tBlog('min_read'))}
                            />
                        ))}
                    </EntryList>
                ) : (
                    <p className="mt-4 text-sm text-muted-foreground">{t('general.no_posts_found')}</p>
                )}
            </section>
        </div>
    );
}
