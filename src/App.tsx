import React, { useState } from 'react';
import { LanguageProvider } from './hooks/useLanguage';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileNav } from './components/layout/MobileNav';
import { DemoModeBanner } from './components/common/DemoModeBanner';
import { ToastContainer } from './components/common/ToastContainer';
import { AccessibilityModal } from './components/common/AccessibilityModal';
import { Hero } from './components/landing/Hero';
import { ProblemSection } from './components/landing/ProblemSection';
import { HowItWorks } from './components/landing/HowItWorks';
import { CitizenJourneySection } from './components/landing/CitizenJourneySection';
import { RecommendedSchemesSection } from './components/landing/RecommendedSchemesSection';
import { ConnectNotReplaceSection } from './components/landing/ConnectNotReplaceSection';
import { KeyFeaturesSection } from './components/landing/KeyFeaturesSection';
import { BenefitsFeasibilitySection } from './components/landing/BenefitsFeasibilitySection';
import { AskAIModal } from './components/ai/AskAIModal';
import { SchemeHub } from './components/schemes/SchemeHub';
import { SchemeDetailsModal } from './components/schemes/SchemeDetailsModal';
import { EligibilityWizard } from './components/schemes/EligibilityWizard';
import { JourneyTimeline } from './components/journey/JourneyTimeline';
import { DocumentChecklist } from './components/journey/DocumentChecklist';
import { PrerequisiteModal } from './components/journey/PrerequisiteModal';
import { GuidedJourneyModal } from './components/journey/GuidedJourneyModal';
import { ApplicationTracker } from './components/tracking/ApplicationTracker';
import { InteropDiagram } from './components/interoperability/InteropDiagram';
import { ConnectorDashboard } from './components/interoperability/ConnectorDashboard';
import { GrievanceAssistant } from './components/grievance/GrievanceAssistant';
import { AdminDashboard } from './components/analytics/AdminDashboard';
import { TrustSection } from './components/security/TrustSection';

import { mockSchemes } from './data/schemes';
import { mockDefaultJourneys } from './data/journeys';
import type { Scheme } from './types';

export const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);
  const [isPrerequisiteOpen, setIsPrerequisiteOpen] = useState<boolean>(false);
  const [isGuidedDemoOpen, setIsGuidedDemoOpen] = useState<boolean>(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState<boolean>(false);
  const [isDemoActive, setIsDemoActive] = useState<boolean>(false);

  const activeJourney = mockDefaultJourneys[0];
  const eduScheme = mockSchemes.find((s) => s.id === 'scheme-edu-001') || mockSchemes[0];

  // 1-Click Guided Product Demo Runner
  const handleStartDemoJourney = () => {
    setIsDemoActive(true);
    setIsGuidedDemoOpen(true);
  };

  const handleSelectScheme = (scheme: Scheme) => {
    setSelectedScheme(scheme);
  };

  const handleCheckEligibility = () => {
    setActiveTab('eligibility-wizard');
  };

  const handlePrepareDocuments = () => {
    setActiveTab('doc-checklist');
  };

  const handleOpenPrerequisite = () => {
    setIsPrerequisiteOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-slate-950 pb-16 lg:pb-0">
      {/* Global Toast Notifications */}
      <ToastContainer />

      {/* Accessibility Settings Modal */}
      <AccessibilityModal
        isOpen={isAccessibilityOpen}
        onClose={() => setIsAccessibilityOpen(false)}
      />

      {/* Product Banner */}
      <DemoModeBanner onStartDemo={handleStartDemoJourney} isDemoActive={isDemoActive} />

      {/* Main Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onStartDemo={handleStartDemoJourney}
        onOpenAccessibility={() => setIsAccessibilityOpen(true)}
      />

      {/* Body Content Router */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div>
            <Hero
              onAskAI={() => setActiveTab('ask-ai')}
              onExploreSchemes={() => setActiveTab('schemes')}
              onStartDemo={handleStartDemoJourney}
            />
            <ProblemSection />
            <HowItWorks />
            <CitizenJourneySection
              onStartDemo={handleStartDemoJourney}
              onNavigateTab={setActiveTab}
            />
            <RecommendedSchemesSection
              onSelectScheme={handleSelectScheme}
              onExploreSchemes={() => setActiveTab('schemes')}
            />
            <ConnectNotReplaceSection />
            <KeyFeaturesSection />
            <BenefitsFeasibilitySection />
          </div>
        )}

        {activeTab === 'ask-ai' && (
          <AskAIModal
            onSelectScheme={handleSelectScheme}
            onNavigateTab={setActiveTab}
          />
        )}

        {activeTab === 'schemes' && (
          <SchemeHub
            onSelectScheme={handleSelectScheme}
            onCheckEligibility={handleCheckEligibility}
          />
        )}

        {activeTab === 'journey' && (
          <div className="py-8 space-y-8">
            <JourneyTimeline
              journey={activeJourney}
              onSelectPrerequisite={handleOpenPrerequisite}
              onOpenOfficialPortal={(url) => window.open(url, '_blank')}
            />
          </div>
        )}

        {activeTab === 'eligibility-wizard' && (
          <div className="py-8">
            <EligibilityWizard
              scheme={eduScheme}
              onComplete={() => setActiveTab('journey')}
            />
          </div>
        )}

        {activeTab === 'doc-checklist' && (
          <div className="py-8">
            <DocumentChecklist
              documents={eduScheme.documents}
              onOpenPrerequisite={handleOpenPrerequisite}
            />
          </div>
        )}

        {activeTab === 'track' && <ApplicationTracker />}

        {activeTab === 'interop' && (
          <div className="py-8 space-y-12">
            <InteropDiagram />
            <ConnectorDashboard />
          </div>
        )}

        {activeTab === 'grievance' && <GrievanceAssistant />}

        {activeTab === 'analytics' && <AdminDashboard />}

        {activeTab === 'trust' && <TrustSection />}
      </main>

      {/* Scheme Detailed Breakdown Modal */}
      <SchemeDetailsModal
        scheme={selectedScheme}
        onClose={() => setSelectedScheme(null)}
        onCheckEligibility={handleCheckEligibility}
        onPrepareDocuments={handlePrepareDocuments}
      />

      {/* Income Certificate Prerequisite Guidance Modal */}
      <PrerequisiteModal
        isOpen={isPrerequisiteOpen}
        onClose={() => setIsPrerequisiteOpen(false)}
      />

      {/* Guided 35-Step Product Demo Modal */}
      <GuidedJourneyModal
        isOpen={isGuidedDemoOpen}
        onClose={() => setIsGuidedDemoOpen(false)}
        onNavigateTab={setActiveTab}
      />

      {/* Sticky Mobile Bottom Navigation */}
      <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
};

export function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
