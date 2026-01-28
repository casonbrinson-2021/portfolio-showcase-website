import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
            <body className="bg-white text-foreground antialiased min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
