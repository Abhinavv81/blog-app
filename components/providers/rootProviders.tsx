"use client";
import React from "react";
import { ThemeProvider } from "../theme-provider";
const RootProviders = ({ children }: { children: React.ReactNode }) => {
  return (
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        storageKey="ken-theme"
      >
        {children}
      </ThemeProvider>
   
  );
};

export default RootProviders;
