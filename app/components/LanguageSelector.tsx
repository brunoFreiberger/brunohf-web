"use client"

import {Fragment} from "react";
import {useLocale} from "next-intl";
import {Link, usePathname} from "@/i18n/navigation";
import {routing} from "@/i18n/routing";
import {cn} from "@/lib/utils";

const names: Record<string, string> = {en: "English", pt: "Português"};

/** "EN / PT" switch that keeps the current page. Plain links, so they work without JavaScript too. */
export default function LanguageSelector() {
    const locale = useLocale();
    const pathname = usePathname();

    return (
        <div role="group" aria-label="Language" className="flex items-center text-sm">
            {routing.locales.map((l, i) => (
                <Fragment key={l}>
                    {i > 0 && <span aria-hidden className="text-muted-foreground">/</span>}
                    <Link
                        href={pathname}
                        locale={l}
                        lang={l}
                        aria-label={names[l]}
                        aria-current={l === locale ? "true" : undefined}
                        className={cn(
                            "px-1.5 py-2 uppercase",
                            l === locale ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        {l}
                    </Link>
                </Fragment>
            ))}
        </div>
    );
}
