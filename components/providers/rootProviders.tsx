"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import React, { useEffect } from "react";
import { ThemeProvider } from "../theme-provider";

const RootProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider appearance={{}}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        storageKey="ken-theme"
      >
        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
};

export default RootProviders;
