import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { NavigationSidebar } from "@/components/navigation/NavigationSidebar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { MobileToggle } from "@/components/navigation/MobileToggle";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord Clone",
  description: "Discord clone with Next.js and shadcn/ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        font.className,
        "bg-white dark:bg-[#313338]"
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="discord-theme"
        >
          <div className="h-full">
            <div className="fixed top-0 left-0 z-30 md:hidden p-4">
              <MobileToggle />
            </div>
            <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
              <NavigationSidebar />
            </div>
            <main className="md:pl-[72px] h-full">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
