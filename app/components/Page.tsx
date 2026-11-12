import * as React from "react";
import {ArrowRight} from "lucide-react";
import {cn} from "@/lib/utils";
import {Link} from "@/i18n/navigation";

/** Page title shown at the top of each section page. */
export function PageHeader({title}: { title: string }) {
    return (
        <header className="mb-10 lg:mb-12">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        </header>
    );
}

/** Small muted heading for a section, e.g. "Featured Projects". */
export function SectionLabel({as: Tag = "h2", className, children}: {
    as?: "h2" | "h3" | "p";
    className?: string;
    children: React.ReactNode
}) {
    return <Tag className={cn("text-sm font-medium text-muted-foreground", className)}>{children}</Tag>;
}

/** A list of EntryLink rows separated by thin lines. */
export function EntryList({className, children}: { className?: string; children: React.ReactNode }) {
    return <ul className={cn("divide-y divide-border border-y border-border", className)}>{children}</ul>;
}

/** One linked row in an EntryList: title, optional description and meta line, and an arrow. */
export function EntryLink({href, title, description, meta}: {
    href: string;
    title: string;
    description?: string;
    meta?: string;
}) {
    return (
        <li>
            <Link href={href} className="group flex items-start gap-4 py-4">
                <span className="min-w-0 flex-1">
                    <span className="block font-semibold underline-offset-4 group-hover:underline">{title}</span>
                    {description && <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{description}</span>}
                    {meta && <span className="mt-2 block text-xs text-muted-foreground">{meta}</span>}
                </span>
                <ArrowRight
                    aria-hidden
                    className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
                />
            </Link>
        </li>
    );
}

/** A row in an EntryList for something not published yet. Not a link. */
export function EntrySoon({title, description, label}: { title: string; description?: string; label: string }) {
    return (
        <li className="flex items-start gap-4 py-4">
            <span className="min-w-0 flex-1">
                <span className="block font-semibold text-muted-foreground">{title}</span>
                {description && <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{description}</span>}
            </span>
            <span className="mt-0.5 shrink-0 text-xs text-muted-foreground">{label}</span>
        </li>
    );
}

/** Muted line shown while content is fetched. */
export function Loading({label}: { label: string }) {
    return <p role="status" className="text-sm text-muted-foreground">{label}…</p>;
}
