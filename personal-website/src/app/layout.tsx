import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const monserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Bryan's Space",
    description: "Bryan Matthew's personal website",
    icons: {
        icon: "https://media-public.canva.com/BeB3I/MAE-O3BeB3I/1/t.png",
    },
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
