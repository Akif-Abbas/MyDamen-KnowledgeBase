import "./WebinarsCategoryHeader.css";

const SUBTITLE = "Recordings of Damen webinars and trainings";

/**
 * Title & Subtitle from Figma (9702:6928) — Webinars category intro, centered like Manuals.
 */
export function WebinarsCategoryHeader() {
  return (
    <div className="webinars-category-header" data-node-id="9702:6928" data-name="Title & Subtitle">
      <h2 className="webinars-category-header__title">Webinars and trainings</h2>
      <p className="webinars-category-header__lede">{SUBTITLE}</p>
    </div>
  );
}
