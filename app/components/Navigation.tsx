"use client"

import {NavigationMenu, NavigationMenuLink, NavigationMenuList} from "@/components/ui/navigation-menu";
import {useTranslations} from "use-intl";

export default function Navigation() {
    const t = useTranslations('Navbar');
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuLink className="font-bold text-md font-mono">{t('about_me')}</NavigationMenuLink>
                <NavigationMenuLink
                    className="font-bold text-md font-mono">{t('portfolio')}</NavigationMenuLink>
                <NavigationMenuLink className="font-bold text-md font-mono">{t('blog')}</NavigationMenuLink>
            </NavigationMenuList>
        </NavigationMenu>
    )
}