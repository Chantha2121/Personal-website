'use client'

import { FormProvider as NextThemeProvider } from "react-hook-form";
export function ThemeProvider({children, ...props}){
    return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}