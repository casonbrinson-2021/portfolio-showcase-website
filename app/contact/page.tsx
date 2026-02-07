"use client";

import InstagramIcon from "@/components/InstagramIcon";

export default function ContactPage() {
    return (
        <>
            {/* Socials section */}
            {/* <section className="w-full max-w-[1920px] mx-auto py-16 px-12 xl:px-24">
                <div className="w-full flex justify-center items-center">
                    <InstagramIcon className="w-8 h-8 text-foreground hover:opacity-80 transition-opacity cursor-pointer" />
                </div>
            </section> */}

            <section className="w-full max-w-[1920px] mx-auto py-16 px-12 xl:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Intro Text */}
                    <div className="flex flex-col gap-6">
                        <h1 className="text-heading">Get in Touch</h1>

                        <p className="text-paragraph">
                            If you’re interested in a commission, have a
                            question about an artwork, or just want to say
                            hello, feel free to reach out. Megan is always happy
                            to connect and talk through ideas.
                        </p>

                        <p className="text-paragraph">
                            Use the form to send a message and you’ll hear back
                            as soon as possible.
                        </p>
                    </div>

                    {/* Contact Form */}
                    <form
                        className="w-full flex flex-col gap-6"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const name = (
                                e.currentTarget.elements.namedItem(
                                    "name",
                                ) as HTMLInputElement
                            ).value;
                            const message = (
                                e.currentTarget.elements.namedItem(
                                    "message",
                                ) as HTMLTextAreaElement
                            ).value;
                            const mailtoLink = `mailto:megan@example.com?subject=Website Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
                            window.location.href = mailtoLink;
                        }}
                    >
                        <div className="flex flex-col gap-1">
                            <label className="text-caption">Name</label>
                            <input
                                name="name"
                                type="text"
                                required
                                className="w-full text-paragraph border border-foreground/20 px-4 py-3 rounded-md focus:outline-none focus:border-foreground transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-caption">Message</label>
                            <textarea
                                name="message"
                                rows={6}
                                required
                                className="w-full text-paragraph border border-foreground/20 px-4 py-3 rounded-md resize-none focus:outline-none focus:border-foreground transition-colors"
                            />
                        </div>

                        <button
                            type="submit"
                            className="self-start px-8 py-3 bg-foreground rounded-md hover:opacity-80 transition-opacity cursor-pointer"
                        >
                            <span className="text-parapgraph text-background">
                                Send Email
                            </span>
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
