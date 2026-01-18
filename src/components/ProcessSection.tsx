const ProcessSection = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Smooth transition - blends from previous section's end color */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/95 via-neutral-950/50 to-neutral-950/95"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold mb-4 text-center text-white">
                    How it works
                </h2>
                <p className="text-lg text-white/70 text-center max-w-2xl mx-auto mb-12">
                    Simple process. Minimal time commitment from you.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg ring-1 ring-white/10 text-center">
                        <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                            1
                        </div>
                        <h3 className="text-xl mb-3 text-white">Audit</h3>
                        <p className="text-white/80 leading-relaxed">
                            We review your current processes. We identify what to automate. We map out the workflows. You approve the plan.
                        </p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg ring-1 ring-white/10 text-center">
                        <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                            2
                        </div>
                        <h3 className="text-xl mb-3 text-white">Build</h3>
                        <p className="text-white/80 leading-relaxed">
                            We build and test the automation workflows. We integrate with your existing systems. You own everything we create.
                        </p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg ring-1 ring-white/10 text-center">
                        <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                            3
                        </div>
                        <h3 className="text-xl mb-3 text-white">Optimize</h3>
                        <p className="text-white/80 leading-relaxed">
                            We monitor performance. We refine based on results. You get ongoing improvements without extra work.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
