import type { FaqBlockId } from "./faqBlocks/faqBlockIds";
import { GettingStartedFigmaContainer } from "./faqBlocks/GettingStartedFigmaContainer";
import { ManualsCategoryHeader } from "./faqBlocks/ManualsCategoryHeader";
import { ManualsDocumentLibrary } from "./faqBlocks/ManualsDocumentLibrary";
import { GeneralCategoryHeader } from "./faqBlocks/GeneralCategoryHeader";
import { GeneralFaqAccordion } from "./faqBlocks/GeneralFaqAccordion";
import { WebinarsCategoryHeader } from "./faqBlocks/WebinarsCategoryHeader";
import { WebinarsFeaturedRow } from "./faqBlocks/WebinarsFeaturedRow";
import { UseMyDamenHeading } from "./faqBlocks/UseMyDamenHeading";
import { VesselOverviewHeading } from "./faqBlocks/VesselOverviewHeading";
import "./FaqBlockCategoryPanel.css";

type FaqBlockCategoryPanelProps = {
  activeId: FaqBlockId;
};

/**
 * Placeholder region for category-specific content. Getting started uses Figma 9702:3166.
 */
export function FaqBlockCategoryPanel({ activeId }: FaqBlockCategoryPanelProps) {
  if (activeId === "getting-started") {
    return (
      <div className="faq-category-panel faq-category-panel--getting-started">
        <div className="faq-category-content-stack">
          <GettingStartedFigmaContainer />
          <VesselOverviewHeading />
          <UseMyDamenHeading />
        </div>
      </div>
    );
  }

  if (activeId === "manuals") {
    return (
      <div className="faq-category-panel faq-category-panel--manuals">
        <div className="faq-category-content-stack">
          <ManualsCategoryHeader />
          <div className="faq-category-divider" aria-hidden />
          <ManualsDocumentLibrary />
        </div>
      </div>
    );
  }

  if (activeId === "webinars") {
    return (
      <div className="faq-category-panel faq-category-panel--webinars">
        <div className="faq-category-content-stack">
          <WebinarsCategoryHeader />
          <div className="faq-category-divider" aria-hidden />
          <div className="faq-category-webinars-featured-stack">
            <WebinarsFeaturedRow rowKeyPrefix="row-1" aria-label="Featured webinars" />
            <WebinarsFeaturedRow rowKeyPrefix="row-2" aria-label="More webinars" />
          </div>
        </div>
      </div>
    );
  }

  if (activeId === "general") {
    return (
      <div className="faq-category-panel faq-category-panel--general">
        <div className="faq-category-content-stack">
          <GeneralCategoryHeader />
          <div className="faq-category-divider" aria-hidden />
          <GeneralFaqAccordion />
        </div>
      </div>
    );
  }

  const _never: never = activeId;
  return _never;
}
