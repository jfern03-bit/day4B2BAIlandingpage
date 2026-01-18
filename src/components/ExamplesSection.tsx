const ExamplesSection = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Smooth transition - blends from previous section's end color */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/95 via-neutral-950/50 to-neutral-950/95"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold mb-4 text-center text-white">
                    What gets automated
                </h2>
                <div className="grid grid-cols-1 gap-12 mt-12">
                    <div className="bg-white/5 backdrop-blur-sm p-10 rounded-lg ring-1 ring-white/10">
                        <h3 className="text-2xl mb-4 text-white">Lead Qualification & Routing</h3>
                        <span className="font-semibold text-blue-400 mb-2 block">Problem:</span>
                        <p className="text-white/80 mb-4 leading-relaxed">
                            Inquiries come through multiple channels. You manually review each one, ask qualifying questions, and route to the right person. It takes hours each week.
                        </p>
                        <span className="font-semibold text-green-400 mb-2 block mt-4">Automated Solution:</span>
                        <p className="text-white/80 mb-4 leading-relaxed">
                            Incoming leads are automatically qualified through conversation. Budget, timeline, and requirements are captured. Qualified leads are routed to your team with full context. Unqualified leads are handled politely and saved for follow-up.
                        </p>
                        <span className="font-semibold text-red-400 mb-2 block mt-4">Outcome:</span>
                        <p className="text-white/80 leading-relaxed">
                            Your team only talks to serious buyers. Response time drops to minutes. No leads fall through cracks. You save 10+ hours per week on qualification.
                        </p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-10 rounded-lg ring-1 ring-white/10">
                        <h3 className="text-2xl mb-4 text-white">Customer Support & FAQ Handling</h3>
                        <span className="font-semibold text-blue-400 mb-2 block">Problem:</span>
                        <p className="text-white/80 mb-4 leading-relaxed">
                            Same questions come in repeatedly. Your team answers them manually, taking time away from complex issues. Support costs rise as you scale.
                        </p>
                        <span className="font-semibold text-green-400 mb-2 block mt-4">Automated Solution:</span>
                        <p className="text-white/80 mb-4 leading-relaxed">
                            Common questions are answered instantly with accurate information pulled from your knowledge base. Complex issues are escalated to your team with full context. Customers get immediate answers 24/7.
                        </p>
                        <span className="font-semibold text-red-400 mb-2 block mt-4">Outcome:</span>
                        <p className="text-white/80 leading-relaxed">
                            Support volume drops by 60-80%. Your team focuses on high-value issues. Customer satisfaction improves. You reduce support costs while scaling.
                        </p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-10 rounded-lg ring-1 ring-white/10">
                        <h3 className="text-2xl mb-4 text-white">Internal Operations & Data Management</h3>
                        <span className="font-semibold text-blue-400 mb-2 block">Problem:</span>
                        <p className="text-white/80 mb-4 leading-relaxed">
                            Data entry, report generation, and task coordination eat up hours. Your team does manual work that could be automated. Errors happen from repetition.
                        </p>
                        <span className="font-semibold text-green-400 mb-2 block mt-4">Automated Solution:</span>
                        <p className="text-white/80 mb-4 leading-relaxed">
                            Workflows handle data entry, generate reports automatically, coordinate tasks between systems, and keep everything in sync. Your team gets alerts only when action is needed.
                        </p>
                        <span className="font-semibold text-red-400 mb-2 block mt-4">Outcome:</span>
                        <p className="text-white/80 leading-relaxed">
                            Operations run smoothly without constant oversight. Errors drop. Your team focuses on strategy and growth. You save 15-20 hours per week on admin work.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExamplesSection;
