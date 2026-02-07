import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

//TODO:
// 1. Get about page text blurb from Megan
// 2. Get contact page blurb from Megan
// 3. Edit and Add all gallery images and make sure captions are correct

export const metadata = {
    title: "Megan — Artist",
    description: "Large-scale canvas artwork by Megan",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400..700;1,400..700&display=swap"
                />
            </head>
            <body className="antialiased min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
