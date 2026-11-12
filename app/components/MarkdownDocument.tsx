"use client"

import {useEffect, useState} from "react";
import {notFound} from "next/navigation";
import ReactMarkdown from "react-markdown";
import {useTranslations} from "use-intl";
import {ArrowLeft} from "lucide-react";
import {Link} from "@/i18n/navigation";
import {Loading} from "@/app/components/Page";

type State = { status: "loading" } | { status: "ready"; text: string } | { status: "missing" } | { status: "error" };

/**
 * Fetches a Markdown file and shows it as an article.
 * A missing file shows the site's 404 page instead of GitHub's "404: Not Found" text.
 * Give it a `key` of the url so it starts fresh when the url changes.
 */
export default function MarkdownDocument({url, backHref}: { url: string; backHref: string }) {
    const [state, setState] = useState<State>({status: "loading"});
    const t = useTranslations('Blog');

    useEffect(() => {
        let cancelled = false;
        fetch(url)
            .then(async (res) => {
                const next: State = res.ok ? {status: "ready", text: await res.text()} : {status: "missing"};
                if (!cancelled) setState(next);
            })
            .catch(() => {
                if (!cancelled) setState({status: "error"});
            });
        return () => {
            cancelled = true;
        };
    }, [url]);

    if (state.status === "missing") notFound();

    return (
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
            {/* A link rather than history.back(), so visitors who arrive from a shared link stay on the site. */}
            <Link href={backHref} className="-my-2 inline-flex items-center gap-1.5 py-2 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft aria-hidden className="size-4"/>
                {t('back')}
            </Link>
            <div className="mt-8">
                {state.status === "loading" && <Loading label={t('loading')}/>}
                {state.status === "error" && <p className="text-sm text-destructive">{t('load_error')}</p>}
                {state.status === "ready" && (
                    <article className="prose max-w-none">
                        <ReactMarkdown>{state.text}</ReactMarkdown>
                    </article>
                )}
            </div>
        </div>
    );
}
