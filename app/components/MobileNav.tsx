"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import {Menu, X} from "lucide-react"

import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Separator} from "@/components/ui/separator"
import LanguageSelector from "@/app/components/LanguageSelector"
import {ThemeToggle} from "@/components/theme-toggle"
import ContactDialog from "@/app/components/ContactDialog"
import {Link} from "@/i18n/navigation"

export type NavLink = { label: string; route: string }

export default function MobileNav({
    links,
    isActive,
}: {
    links: NavLink[]
    isActive: (route: string) => boolean
}) {
    const [open, setOpen] = React.useState(false)

    return (
        <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
            <DialogPrimitive.Trigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Toggle menu">
                    {open ? <X className="size-5"/> : <Menu className="size-5"/>}
                </Button>
            </DialogPrimitive.Trigger>
            <DialogPrimitive.Overlay
                className="fixed inset-0 z-40 bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 lg:hidden"
            />
            <DialogPrimitive.Content
                className={cn(
                    "absolute inset-x-0 top-full z-50 border-b border-border bg-background p-6",
                    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2",
                    "lg:hidden"
                )}
            >
                <DialogPrimitive.Title className="sr-only">Navigation menu</DialogPrimitive.Title>
                <DialogPrimitive.Description className="sr-only">
                    Site navigation links and controls
                </DialogPrimitive.Description>
                <nav className="flex flex-col gap-1">
                    {links.map((link) => (
                        <Link
                            key={link.route}
                            href={link.route}
                            onClick={() => setOpen(false)}
                            aria-current={isActive(link.route) ? "page" : undefined}
                            className={cn(
                                "py-2.5 text-base",
                                isActive(link.route) ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <Separator className="my-6"/>
                <div className="flex items-center justify-between gap-3">
                    <LanguageSelector/>
                    <div className="flex items-center gap-2">
                        <ThemeToggle/>
                        <ContactDialog/>
                    </div>
                </div>
            </DialogPrimitive.Content>
        </DialogPrimitive.Root>
    )
}
