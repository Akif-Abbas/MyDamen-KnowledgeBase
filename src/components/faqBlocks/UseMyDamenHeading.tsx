import "./UseMyDamenHeading.css";

const LIST_ITEMS = [
  "Submit and track warranty requests",
  "Access technical manuals, operating guides and engineering drawings",
  "Request and order spare parts",
  "Collaborate with Damen Services for operational support",
  "Arrange training to help your crew get familiar with onboard systems",
] as const;

/**
 * Heading block from Figma (node 9702:3502) — H4 title + bullet list.
 */
export function UseMyDamenHeading() {
  return (
    <div className="use-mydamen-heading" data-node-id="9702:3502" data-name="Heading">
      <div className="use-mydamen-heading__inner">
        <h4 className="use-mydamen-heading__title">Use MyDamen for</h4>
        <ul className="use-mydamen-heading__list">
          {LIST_ITEMS.map((text) => (
            <li key={text} className="use-mydamen-heading__item">
              <span className="use-mydamen-heading__item-text">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
