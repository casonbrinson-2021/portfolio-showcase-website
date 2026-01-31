import Image from "next/image";

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="mb-16 text-center">
                <h1 className="text-heading mb-4">Lorem Ipsum Artis</h1>
                <p className="text-paragraph max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam ac vestibulum erat. Curabitur at purus id libero
                    tincidunt fermentum non sit amet ligula.
                </p>
            </section>

            {/* Featured Artwork Grid */}
            <section className="mb-16">
                <h2 className="text-subheading mb-8 text-center">
                    Featured Works
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="bg-gray-300 h-64 flex items-center justify-center">
                        <span className="text-caption">Image Placeholder</span>
                    </div>
                    <div className="bg-gray-300 h-64 flex items-center justify-center">
                        <span className="text-caption">Image Placeholder</span>
                    </div>
                    <div className="bg-gray-300 h-64 flex items-center justify-center">
                        <span className="text-caption">Image Placeholder</span>
                    </div>
                    <div className="bg-gray-300 h-64 flex items-center justify-center">
                        <span className="text-caption">Image Placeholder</span>
                    </div>
                    <div className="bg-gray-300 h-64 flex items-center justify-center">
                        <span className="text-caption">Image Placeholder</span>
                    </div>
                    <div className="bg-gray-300 h-64 flex items-center justify-center">
                        <span className="text-caption">Image Placeholder</span>
                    </div>
                </div>
            </section>

            {/* About / Text Section */}
            <section className="mb-16 max-w-4xl mx-auto">
                <h2 className="text-subheading mb-4">About the Artist</h2>
                <p className="text-paragraph mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus vitae justo vitae magna viverra tincidunt. Mauris
                    ullamcorper, augue sit amet congue porta, libero purus
                    sagittis erat, id tempus elit nulla sed nisl.
                </p>
                <p className="text-paragraph">
                    Sed lacinia, nunc non varius efficitur, neque arcu pulvinar
                    erat, vel mattis justo sapien in risus. Curabitur elementum
                    convallis magna, vel efficitur justo efficitur nec.
                </p>
            </section>

            {/* Contact / Call to Action */}
            <section className="text-center mb-16">
                <h2 className="text-subheading mb-4">Get in Touch</h2>
                <p className="text-paragraph mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris efficitur lectus sed turpis volutpat, nec ultrices
                    justo fermentum.
                </p>
                <button className="px-6 py-3 bg-foreground text-background hover:opacity-80 transition-opacity">
                    Contact Megan
                </button>
            </section>
        </>
    );
}
