export default function ContactSection() {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Jam with Me</h2>
          <p className="text-muted-foreground mb-10">Send a meme, pitch a collab.</p>

          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Jane Smith"
                className="w-full px-4 py-3 bg-[#f2f2f2] border-none rounded-md focus:ring-1 focus:ring-accent"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="jane@framer.com"
                className="w-full px-4 py-3 bg-[#f2f2f2] border-none rounded-md focus:ring-1 focus:ring-accent"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={5}
                className="w-full px-4 py-3 bg-[#f2f2f2] border-none rounded-md resize-none focus:ring-1 focus:ring-accent"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-black/90 transition-colors"
              >
                Contact Farza
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
