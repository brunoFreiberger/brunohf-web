"use client"

import {NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList} from "@/components/ui/navigation-menu";
import {useTranslations} from "use-intl";
import {Link, usePathname} from "@/i18n/navigation";
import LanguageSelector from "@/app/components/LanguageSelector";
import {ThemeToggle} from "@/components/theme-toggle";
import ContactDialog from "@/app/components/ContactDialog";
import MobileNav, {type NavLink} from "@/app/components/MobileNav";

export default function Navigation() {
    // Pathname without the locale prefix, e.g. "/projects/foo".
    const pathname = usePathname();
    const t = useTranslations('Navbar');

    const links: NavLink[] = [
        {label: t('home'), route: '/'},
        {label: t('about_me'), route: '/about-me'},
        {label: t('projects'), route: '/projects'},
        {label: t('blog'), route: '/blog'},
    ];

    const isActive = (route: string) => route === '/' ? pathname === '/' : pathname.startsWith(route);

    return (
        // Solid background on purpose: backdrop-blur would trap the mobile menu's fixed overlay inside the header.
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-base font-semibold tracking-tight">
                    <span className="text-muted-foreground">&lt;</span>
                    brunohf.dev
                    <span className="text-muted-foreground">/&gt;</span>
                </Link>

                <nav className="hidden lg:block">
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList className="gap-1">
                            {links.map((link) => (
                                <NavigationMenuItem key={link.route}>
                                    <NavigationMenuLink asChild active={isActive(link.route)} className="font-medium">
                                        <Link href={link.route}>{link.label}</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
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
