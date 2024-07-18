import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { CommonHeader } from "@/widgets";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Apple",
    description: "엔터테인먼트-서비스",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={notoSansKr.className}>
                <CommonHeader />
                {children}
            </body>
        </html>
    );
}
