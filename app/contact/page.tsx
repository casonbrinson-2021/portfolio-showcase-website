"use client";

export default function ContactPage() {
    return (
        <section className="w-full max-w-[1920px] mx-auto py-16 px-12 xl:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                {/* Intro Text */}
                <div className="flex flex-col gap-6">
                    <h1 className="text-heading">Get in Touch</h1>

                    <p className="text-paragraph">
                        If you’re interested in a commission, have a question
                        about an artwork, or just want to say hello, feel free
                        to reach out. Megan is always happy to connect and talk
                        through ideas.
                    </p>

                    <p className="text-paragraph">
                        Use the form to send a message and you’ll hear back as
                        soon as possible.
                    </p>
                </div>

                {/* Contact Form */}
                <form
                    className="w-full max-w-[560px] flex flex-col gap-8"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="flex flex-col gap-2">
                        <label className="text-caption">Name</label>
                        <input
                            type="text"
                            required
                            className="w-full text-paragraph border border-foreground/20 bg-transparent px-4 py-3 rounded-md focus:outline-none focus:border-foreground transition-colors"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-caption">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full text-paragraph border border-foreground/20 bg-transparent px-4 py-3 rounded-md focus:outline-none focus:border-foreground transition-colors"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-caption">Message</label>
                        <textarea
                            rows={6}
                            required
                            className="w-full text-paragraph border border-foreground/20 bg-transparent px-4 py-3 rounded-md resize-none focus:outline-none focus:border-foreground transition-colors"
                        />
                    </div>

                    <button
                        type="submit"
                        className="self-start px-8 py-3 bg-foreground text-background rounded-md hover:opacity-80 transition-opacity"
                    >
                        <span className="text-caption text-background">
                            Send Message
                        </span>
                    </button>
                </form>
            </div>
        </section>
    );
}
