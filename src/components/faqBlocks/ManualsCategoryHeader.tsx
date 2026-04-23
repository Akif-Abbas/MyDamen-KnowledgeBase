import "./ManualsCategoryHeader.css";

const SUBTITLE =
  "See the latest manuals & instructions on portal usage, coach marks and tutorials.";

/**
 * Title & Subtitle from Figma (node 9702:6553) — Manuals category intro, centered like Getting started.
 */
export function ManualsCategoryHeader() {
  return (
    <div className="manuals-category-header" data-node-id="9702:6553" data-name="Title & Subtitle">
      <h2 className="manuals-category-header__title">Manuals, instructions and technical papers</h2>
      <p className="manuals-category-header__lede">{SUBTITLE}</p>
    </div>
  );
}
