"use client"

import {useTranslations} from "use-intl";
import {Link} from "@/i18n/navigation";
import {Button} from "@/components/ui/button";

export default function NotFound() {
    const t = useTranslations('NotFound');
    return (
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <h1 className="text-6xl font-semibold tracking-tight">404</h1>
            <p className="mt-3 text-lg text-muted-foreground">{t('title')}</p>
            <Button asChild className="mt-8">
                <Link href="/">{t('home')}</Link>
            </Button>
        </div>
    );
}
