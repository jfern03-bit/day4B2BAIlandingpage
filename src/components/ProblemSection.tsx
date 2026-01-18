const ProblemSection = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Smooth gradient transition from hero - starts lighter and transitions smoothly */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/98 to-neutral-950/95"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold mb-4 text-center text-white">
                    You're spending time and money on repetitive work
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg ring-1 ring-white/10">
                        <h3 className="text-xl mb-3 text-white">Manual lead handling</h3>
                        <p className="text-white/80 leading-relaxed">
                            Inquiries sit in inboxes. Follow-ups get missed. Opportunities slip away while you're busy with other tasks.
                        </p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg ring-1 ring-white/10">
                        <h3 className="text-xl mb-3 text-white">Internal bottlenecks</h3>
                        <p className="text-white/80 leading-relaxed">
                            Simple requests pile up. Data entry eats hours. Your team spends time on admin instead of revenue-generating work.
                        </p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg ring-1 ring-white/10">
                        <h3 className="text-xl mb-3 text-white">Slow response times</h3>
                        <p className="text-white/80 leading-relaxed">
                            Customers wait for answers. Support tickets stack up. You can't scale without hiring more people.
                        </p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg ring-1 ring-white/10">
                        <h3 className="text-xl mb-3 text-white">Missed opportunities</h3>
                        <p className="text-white/80 leading-relaxed">
                            You can't be everywhere at once. Important tasks get delayed. Growth stalls because you're maxed out.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
