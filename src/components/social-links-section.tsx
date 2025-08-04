import Image from 'next/image';

export default function SocialLinksSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="max-w-md mx-auto text-center">
          {/* Social/Contact Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-sm sm:max-w-none mx-auto">
            <a
              href="https://github.com/MynkSinghal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm bg-[#f2f2f2] hover:bg-[#ebebeb] px-5 py-3 rounded-md transition-colors group w-full justify-center"
            >
              <Image
                src="/logos/github2.svg"
                alt="GitHub"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mynkkkk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm bg-[#f2f2f2] hover:bg-[#ebebeb] px-5 py-3 rounded-md transition-colors group w-full justify-center"
            >
              <Image
                src="/logos/linkedin.svg"
                alt="LinkedIn"
                width={20}
                height={20}
                className="text-[#0077b5]"
              />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:singhal2004mayank@gmail.com"
              className="flex items-center gap-2 text-sm bg-[#f2f2f2] hover:bg-[#ebebeb] px-5 py-3 rounded-md transition-colors group w-full justify-center"
            >
              <Image
                src="/logos/gmail.svg"
                alt="Email"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span>Email</span>
            </a>
            <a
              href="tel:+918448039908"
              className="flex items-center gap-2 text-sm bg-[#f2f2f2] hover:bg-[#ebebeb] px-5 py-3 rounded-md transition-colors group w-full justify-center"
            >
              <Image
                src="/logos/call.svg"
                alt="Call"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span>Call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
