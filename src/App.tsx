import React from 'react';
import ResponsiveHeroBanner from './components/ResponsiveHeroBanner';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ExamplesSection from './components/ExamplesSection';
import ProofSection from './components/ProofSection';
import ProcessSection from './components/ProcessSection';
import FinalCTASection from './components/FinalCTASection';
import { GridPattern } from './components/GridPattern';

function App() {
  return (
    <div className="min-h-screen">
      <ResponsiveHeroBanner
        navLinks={[
          { label: "Home", href: "#", isActive: true },
          { label: "Solutions", href: "#solutions" },
          { label: "Examples", href: "#examples" },
          { label: "Process", href: "#process" },
          { label: "Book Call", href: "#book-call", isActive: false }
        ]}
        ctaButtonText="Book a Discovery Call"
        ctaButtonHref="#book-call"
        badgeLabel="New"
        badgeText="Automation workflows that save 20+ hours per week"
        title="Stop paying people to do work"
        titleLine2="that runs itself."
        description="Done-for-you AI automation workflows that handle leads, operations, and support. You own the system. You keep the savings."
        primaryButtonText="Book a Discovery Call"
        primaryButtonHref="#book-call"
        secondaryButtonText="Learn More"
        secondaryButtonHref="#solutions"
        partnersTitle="Trusted by businesses worldwide"
        partners={[]}
      />
      <div className="relative bg-neutral-950">
        {/* Grid pattern background that spans the whole page */}
        <GridPattern
          width={40}
          height={40}
          x={-1}
          y={-1}
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [10, 5],
            [13, 3],
            [15, 6],
            [18, 4],
            [20, 7],
            [23, 5],
            [25, 8],
            [28, 6],
            [30, 9],
            [33, 7],
            [35, 10],
            [38, 8],
            [40, 11],
            [43, 9],
            [45, 12],
            [48, 10],
            [50, 13],
          ]}
          className="opacity-40 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"
        />
        
        <ProblemSection />
        <div id="solutions">
          <SolutionSection />
        </div>
        <div id="examples">
          <ExamplesSection />
        </div>
        <ProofSection />
        <div id="process">
          <ProcessSection />
        </div>
        <FinalCTASection />
      </div>
    </div>
  );
}

export default App;
