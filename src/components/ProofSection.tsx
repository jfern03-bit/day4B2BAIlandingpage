const ProofSection = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Smooth transition - blends from previous section's end color */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/95 via-neutral-900/60 to-neutral-900/95"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold mb-4 text-center text-white">
                    Results from real businesses
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="text-center">
                        <div className="text-5xl font-bold text-blue-400 mb-2">73%</div>
                        <div className="text-white/80">Average time saved on automated tasks</div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold text-blue-400 mb-2">2.4x</div>
                        <div className="text-white/80">Faster lead response time</div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold text-blue-400 mb-2">$45K</div>
                        <div className="text-white/80">Average annual savings per client</div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg ring-1 ring-white/10">
                        <p className="text-white/80 mb-4 italic leading-relaxed">
                            "We automated our lead qualification process. Response time went from hours to minutes. Our close rate improved because we're only talking to qualified buyers now."
                        </p>
                        <div className="font-semibold text-white">Sarah Chen</div>
                        <div className="text-sm text-white/60">Operations Director, Tech Services Co.</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg ring-1 ring-white/10">
                        <p className="text-white/80 mb-4 italic leading-relaxed">
                            "The support automation handles 70% of our inquiries automatically. Our team can focus on complex issues. Customer satisfaction scores went up."
                        </p>
                        <div className="font-semibold text-white">Michael Rodriguez</div>
                        <div className="text-sm text-white/60">Founder, E-commerce Platform</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg ring-1 ring-white/10">
                        <p className="text-white/80 mb-4 italic leading-relaxed">
                            "We saved 20 hours per week on internal operations. The workflows handle everything we used to do manually. It paid for itself in the first month."
                        </p>
                        <div className="font-semibold text-white">Jennifer Park</div>
                        <div className="text-sm text-white/60">CEO, Professional Services Firm</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProofSection;
