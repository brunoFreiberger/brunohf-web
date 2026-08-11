"use client"

import {NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList} from "@/components/ui/navigation-menu";
import {useTranslations} from "use-intl";
import {usePathname, useRouter} from "next/navigation";
import LanguageSelector from "@/app/components/LanguageSelector";
import {ThemeToggle} from "@/components/theme-toggle";
import ContactDialog from "@/app/components/ContactDialog";
import MobileNav, {type NavLink} from "@/app/components/MobileNav";

export default function Navigation() {
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations('Navbar');

    const links: NavLink[] = [
        {label: t('home'), route: '/'},
        {label: t('about_me'), route: '/about-me'},
        {label: t('projects'), route: '/projects'},
        {label: t('blog'), route: '/blog'},
    ];

    const segments = pathname.split('/');
    const currentPath = '/' + segments.slice(2).join('/');
    const isActive = (route: string) => route === '/' ? currentPath === '/' : currentPath.startsWith(route);

    const redirect = (route: string) => {
        router.push(route);
    }

    return (
        <header className="relative w-full border-b border-border">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <a
                    className="cursor-pointer text-base font-semibold tracking-tight"
                    onClick={() => redirect('/')}
                >
                    <span className="text-muted-foreground">&lt;</span>
                    brunohf.dev
                    <span className="text-muted-foreground">/&gt;</span>
                </a>

                <nav className="hidden lg:block">
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList className="gap-1">
                            {links.map((link) => (
                                <NavigationMenuItem key={link.route}>
                                    <NavigationMenuLink
                                        active={isActive(link.route)}
                                        onClick={() => redirect(link.route)}
                                        className="cursor-pointer font-medium"
                                    >
                                        {link.label}
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

                <MobileNav links={links} isActive={isActive} onNavigate={redirect}/>
            </div>
        </header>
    )
}
