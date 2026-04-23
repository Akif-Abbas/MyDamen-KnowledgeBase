import { useState } from "react";
import { FaqBlockDefault } from "./FaqBlockDefault";
import { FaqBlockCategoryPanel } from "./FaqBlockCategoryPanel";
import { FAQ_BLOCK_TAB_IDS, type FaqBlockId } from "./faqBlocks/faqBlockIds";
import {
  FAQ_ICON_DOCUMENT,
  FAQ_ICON_EDUCATION,
  FAQ_ICON_FORUM,
  FAQ_ICON_SHIP,
} from "./faqBlocks/assets";
import "./FaqBlocksSection.css";

const FAQ_PANEL_ID = "faq-category-tabpanel";

/**
 * FAQ category row (Figma Container 9344:15273): four default FAQ blocks in one row.
 * "Getting started" is selected on first paint; content panel shows a template per category.
 */
export function FaqBlocksSection() {
  const [activeId, setActiveId] = useState<FaqBlockId>("getting-started");

  return (
    <section className="faq-blocks-section" aria-label="Help categories">
      <div className="faq-blocks-section__row" data-name="Container" role="tablist" aria-label="FAQ topics">
        <FaqBlockDefault
          iconSrc={FAQ_ICON_SHIP}
          id={FAQ_BLOCK_TAB_IDS["getting-started"]}
          role="tab"
          aria-selected={activeId === "getting-started"}
          aria-controls={FAQ_PANEL_ID}
          tabIndex={0}
          isSelected={activeId === "getting-started"}
          onClick={() => setActiveId("getting-started")}
        >
          <p className="faq-block__label">Getting started</p>
        </FaqBlockDefault>
        <FaqBlockDefault
          iconSrc={FAQ_ICON_DOCUMENT}
          id={FAQ_BLOCK_TAB_IDS.manuals}
          role="tab"
          aria-selected={activeId === "manuals"}
          aria-controls={FAQ_PANEL_ID}
          tabIndex={0}
          isSelected={activeId === "manuals"}
          onClick={() => setActiveId("manuals")}
        >
          <div className="faq-block__label faq-block__label--multiline">
            <p>Manuals, instructions</p>
            <p>and technical papers</p>
          </div>
        </FaqBlockDefault>
        <FaqBlockDefault
          iconSrc={FAQ_ICON_EDUCATION}
          id={FAQ_BLOCK_TAB_IDS.webinars}
          role="tab"
          aria-selected={activeId === "webinars"}
          aria-controls={FAQ_PANEL_ID}
          tabIndex={0}
          isSelected={activeId === "webinars"}
          onClick={() => setActiveId("webinars")}
        >
          <p className="faq-block__label">Webinars and trainings</p>
        </FaqBlockDefault>
        <FaqBlockDefault
          iconSrc={FAQ_ICON_FORUM}
          id={FAQ_BLOCK_TAB_IDS.general}
          role="tab"
          aria-selected={activeId === "general"}
          aria-controls={FAQ_PANEL_ID}
          tabIndex={0}
          isSelected={activeId === "general"}
          onClick={() => setActiveId("general")}
        >
          <p className="faq-block__label">General questions</p>
        </FaqBlockDefault>
      </div>

      <div
        id={FAQ_PANEL_ID}
        role="tabpanel"
        aria-labelledby={FAQ_BLOCK_TAB_IDS[activeId]}
        className="faq-blocks-section__panel-wrap"
      >
        <FaqBlockCategoryPanel key={activeId} activeId={activeId} />
      </div>
    </section>
  );
}
