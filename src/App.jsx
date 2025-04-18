import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import { useState } from "react";

export default function App() {
  const [tab, setTub] = useState("feedback");

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTub(current)} />

        {tab === "main" && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}
        {tab === "feedback" && (
          <>
            <FeedbackSection />
          </>
        )}
      </main>
    </>
  );
}
