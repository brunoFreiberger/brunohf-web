import type {Metadata, Viewport} from "next";
import {IBM_Plex_Mono} from "next/font/google";
import {notFound} from "next/navigation";
import "../globals.css";
import {ThemeProvider} from "@/components/theme-provider"
import {hasLocale, NextIntlClientProvider} from "next-intl";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import {Toaster} from "@/components/ui/sonner";
import {routing} from "@/i18n/routing";
import {hasProjects} from "@/lib/content";

// One monospace font for the whole site.
const plexMono = IBM_Plex_Mono({
    variable: "--font-plex-mono",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Bruno Henrique Freiberger — Full-Stack Engineer",
    description: "Full-Stack Engineer specializing in Java (Spring Boot) and JavaScript (React, Angular, Node.js), with hands-on experience in AI product development.",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default async function RootLayout({children, params}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const {locale} = await params;
    // Without this, any unknown first segment (e.g. /robots.txt) renders the homepage.
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    const showProjects = await hasProjects(locale);

    return (
        <html lang={locale} suppressHydrationWarning>
        <body className={`${plexMono.variable} flex min-h-dvh flex-col antialiased`}>
        <NextIntlClientProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <Navigation showProjects={showProjects}/>
                <main className="flex-1">{children}</main>
                <Footer/>
                <Toaster/>
            </ThemeProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
