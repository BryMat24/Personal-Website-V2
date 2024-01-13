import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

const monserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Bryan's Space",
    description: "Bryan Matthew's personal website",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={monserrat.className}>{children}</body>
        </html>
    );
}
