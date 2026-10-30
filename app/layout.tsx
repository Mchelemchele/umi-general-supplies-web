import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
variable: "--font-geist-sans",
subsets: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
subsets: ["latin"],
});

export const metadata: Metadata = {
metadataBase: new URL("https://umi-general-supplies-web.vercel.app"),
title: {
default: "UMI GENERAL SUPPLIES | Building Materials Supplier in Kenya",
template: "%s | UMI GENERAL SUPPLIES",
},
description:
"UMI GENERAL SUPPLIES supplies quality building stones, ballast, reinforcement steel, building sand, cement and other construction materials in Mombasa, Kilifi, Malindi and across Kenya.",
keywords: [
"UMI GENERAL SUPPLIES",
"building materials supplier Kenya",
"construction materials Mombasa",
"building stones Kilifi",
"ballast supplier Kenya",
"cement supplier Malindi",
"reinforcement steel Kenya",
"building sand supplier",
],
openGraph: {
title: "UMI GENERAL SUPPLIES | Building Materials Supplier",
description:
"Your reliable source for construction materials in Mombasa, Kilifi, Malindi and across Kenya.",
url: "https://umi-general-supplies-web.vercel.app",
siteName: "UMI GENERAL SUPPLIES",
locale: "en_KE",
type: "website",
images: ["/images/umi-logo.png"],
},
robots: {
index: true,
follow: true,
},
};

export default function RootLayout({ children }: LayoutProps<"/">) {
return (
<html
lang="en"
className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
> <body className="min-h-full flex flex-col">{children}</body> </html>
);
}
