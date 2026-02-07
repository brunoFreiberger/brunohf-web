"use client"

import {NavigationMenu, NavigationMenuLink, NavigationMenuList} from "@/components/ui/navigation-menu";
import {useTranslations} from "use-intl";
import {useRouter} from "next/navigation";
import LanguageSelector from "@/app/components/LanguageSelector";
import {ThemeToggle} from "@/components/theme-toggle";
import ContactDialog from "@/app/components/ContactDialog";

export default function Navigation() {
    const router = useRouter();
    const redirect = (route: string) => {
        router.push(route);
    }
    const t = useTranslations('Navbar');
    return (
        <div
            className="flex lg:flex-row flex-col w-full p-4 lg:justify-between justify-center border-b-1 border-[#2F2F2F]">
            <div
                className="flex justify-center items-center lg:justify-start lg:items-center w-full lg:w-1/4 font-mono"><a className="hover:text-[#08e1ec] cursor-pointer" onClick={() => redirect('/')}>&lt;brunohf.dev /&gt;</a></div>
            <div className="w-full justify-center items-center flex lg:gap-4 gap-0 lg:flex-row flex-col">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuLink onClick={() => redirect('/')} className="font-bold text-md font-mono">{t('home')}</NavigationMenuLink>
                        <NavigationMenuLink onClick={() => redirect('/about-me')} className="font-bold text-md font-mono">{t('about_me')}</NavigationMenuLink>
                        <NavigationMenuLink onClick={() => redirect('/projects')}
                                            className="font-bold text-md font-mono">{t('projects')}</NavigationMenuLink>
                        <NavigationMenuLink onClick={() => redirect('/blog')} className="font-bold text-md font-mono">{t('blog')}</NavigationMenuLink>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex justify-center lg:flex-row lg:gap-4 gap-0 w-full lg:w-1/4 lg:justify-end">
                <LanguageSelector/>
                <ThemeToggle/>
                <ContactDialog/>
            </div>
        </div>
    )
}