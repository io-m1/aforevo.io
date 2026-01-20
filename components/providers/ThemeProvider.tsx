"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// FIXED: explicit import removed. We now extract the types directly from the component.
export function ThemeProvider({ 
  children, 
  ...props 
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
