"use client"

import {useTranslations} from "use-intl";
import {Link, usePathname} from "@/i18n/navigation";
import LanguageSelector from "@/app/components/LanguageSelector";
import {ThemeToggle} from "@/components/theme-toggle";
import ContactDialog from "@/app/components/ContactDialog";
import MobileNav, {type NavLink} from "@/app/components/MobileNav";
import {cn} from "@/lib/utils";

export default function Navigation({showProjects}: { showProjects: boolean }) {
    // Pathname without the locale prefix, e.g. "/projects/foo".
    const pathname = usePathname();
    const t = useTranslations('Navbar');

    const links: NavLink[] = [
        {label: t('home'), route: '/'},
        {label: t('about_me'), route: '/about-me'},
        ...(showProjects ? [{label: t('projects'), route: '/projects'}] : []),
        {label: t('blog'), route: '/blog'},
    ];

    const isActive = (route: string) => route === '/' ? pathname === '/' : pathname.startsWith(route);

    return (
        // Solid background on purpose: backdrop-blur would trap the mobile menu's fixed overlay inside the header.
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
                <Link href="/" className="font-semibold tracking-tight">brunohf.dev</Link>

                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-1">
                        {links.map((link) => (
                            <li key={link.route}>
                                <Link
                                    href={link.route}
                                    aria-current={isActive(link.route) ? "page" : undefined}
                                    className={cn(
                                        "block px-3 py-1.5 text-sm transition-colors",
                                        isActive(link.route) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden items-center gap-3 lg:flex">
                    <LanguageSelector/>
                    <ThemeToggle/>
                    <ContactDialog/>
                </div>

                <MobileNav links={links} isActive={isActive}/>
            </div>
        </header>
    )
}
