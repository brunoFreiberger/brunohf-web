import type {Metadata, Viewport} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "../globals.css";
import {ThemeProvider} from "@/components/theme-provider"
import {NavigationMenu, NavigationMenuLink, NavigationMenuList} from "@/components/ui/navigation-menu";
import {ThemeToggle} from "@/components/theme-toggle";
import ContactDialog from "@/app/components/ContactDialog";
import {NextIntlClientProvider} from "next-intl";
import LanguageSelector from "@/app/components/LanguageSelector";
import Navigation from "@/app/components/Navigation";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Bruno Henrique Freiberger — Full-Stack Engineer",
    description: "Full-Stack Engineer specializing in Java (Spring Boot) and JavaScript (React, Angular, Node.js), building scalable, customer-centric software.",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default async function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    const redirect = () => {}
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <NextIntlClientProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <Navigation/>
                {children}
            </ThemeProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
