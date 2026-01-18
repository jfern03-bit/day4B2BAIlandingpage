const FinalCTASection = () => {
    return (
        <section id="book-call" className="py-24 text-center relative overflow-hidden">
            {/* Smooth transition - blends from previous section and ends deep */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/95 via-neutral-950/98 to-neutral-950"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold mb-4 text-white">
                    Ready to automate your repetitive work?
                </h2>
                <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                    Book a discovery call. We'll review your processes and show you what can be automated. No pitch. No pressure. Just a conversation about saving time and money.
                </p>
                <a
                    href="#book-call"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 font-semibold text-lg rounded-full hover:bg-white/90 transition-colors"
                >
                    Book a Discovery Call
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default FinalCTASection;
