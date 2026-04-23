import { AppHeader, FaqBlocksSection, HeroSecondary, SearchboxSection } from "./components";
import "./App.css";

/**
 * Page shell — header in document flow; hero + white content card on grey band (`page__shell`).
 */
export function App() {
  return (
    <>
      <AppHeader />
      <main className="page">
        <HeroSecondary />
        <div className="page__shell">
          <div className="page__content">
            <SearchboxSection />
            <FaqBlocksSection />
          </div>
        </div>
      </main>
    </>
  );
}
