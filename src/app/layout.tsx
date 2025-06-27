import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ConvexClientProvider } from "@/providers/ConvexClientProvider";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import ClientOnly from "@/components/ClientOnly"; // 👈 import this


export const metadata: Metadata = {
  title: "NoteForge AI",
  description: "AI pdf note taking app",
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <ClientOnly>
            <ConvexClientProvider>{children}</ConvexClientProvider>
            <Toaster />
          </ClientOnly>
        </body>
      </html>
    </ClerkProvider>
  );
}
