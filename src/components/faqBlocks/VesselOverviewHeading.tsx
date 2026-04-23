import "./VesselOverviewHeading.css";

const BODY_COPY =
  "Managing a vessel can be complex, especially when communication happens across multiple channels like email, phone calls and messaging apps. MyDamen simplifies this by bringing everything together in one secure platform. It centralises warranty claims, documentation, parts requests and service communication, helping you stay organised and informed.";

/**
 * Heading block from Figma (node 9702:3497) — title + body below Getting started.
 */
export function VesselOverviewHeading() {
  return (
    <div className="vessel-overview-heading" data-node-id="9702:3497" data-name="Heading">
      <div className="vessel-overview-heading__inner">
        <h3 className="vessel-overview-heading__title">Everything about your vessel in one place</h3>
        <p className="vessel-overview-heading__body">{BODY_COPY}</p>
      </div>
    </div>
  );
}
