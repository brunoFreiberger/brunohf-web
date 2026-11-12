"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// next-themes renders an inline script that sets the theme before first paint. That script only matters in the
// server HTML. When the layout re-mounts in the browser (e.g. switching language), React would create it again and
// warn that client-created scripts never run, so on the client we mark it as a data block instead.
const scriptProps = typeof window === "undefined" ? undefined : ({ type: "application/json" } as const)

export function ThemeProvider({
                                  children,
                                  ...props
                              }: React.ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider scriptProps={scriptProps} {...props}>{children}</NextThemesProvider>
}
