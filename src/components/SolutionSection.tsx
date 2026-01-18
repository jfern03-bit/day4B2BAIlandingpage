import React from 'react';

const SolutionSection = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Smooth transition - blends from previous section's end color */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/95 via-neutral-900/60 to-neutral-900/95"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold mb-4 text-center text-white">
                    Automation workflows that run your business
                </h2>
                <div className="max-w-3xl mx-auto text-center mt-12">
                    <p className="text-lg text-white/90 mb-6 leading-relaxed">
                        We build custom automation workflows that handle your repetitive tasks. Lead qualification, customer support, scheduling, internal operations—whatever you're doing manually, we automate.
                    </p>
                    <p className="text-lg text-white/90 leading-relaxed">
                        You get a complete system that works 24/7. No ongoing management. No monthly subscriptions to software you don't control. You own everything. We implement it. You keep the time and money saved.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
