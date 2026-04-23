import "./GeneralCategoryHeader.css";

const SUBTITLE = "Quick answers to common questions and issues.";

/**
 * Title & Subtitle from Figma (9702:7022) — General questions tab intro.
 */
export function GeneralCategoryHeader() {
  return (
    <div className="general-category-header" data-node-id="9702:7022" data-name="Title & Subtitle">
      <h2 className="general-category-header__title">Frequently Asked Questions</h2>
      <p className="general-category-header__lede">{SUBTITLE}</p>
    </div>
  );
}
