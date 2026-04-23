import { SEARCH_ICON } from "./assets";
import "./SearchboxSection.css";

/**
 * Help heading (Figma 9702:7435) + pill search (Figma Searchbox 9695:2911). Import from `./searchbox` for new pages.
 */
export function SearchboxSection() {
  return (
    <section className="searchbox-section" aria-label="Search">
      <h2 className="searchbox-section__heading" data-node-id="9702:7435">
        How can we help you?
      </h2>
      <form className="searchbox" role="search" onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          className="searchbox__input"
          placeholder="Ask me anything"
          aria-label="Ask me anything"
          autoComplete="off"
        />
        <span className="searchbox__icon-wrap" aria-hidden>
          <img className="searchbox__icon" src={SEARCH_ICON} alt="" width={16} height={16} />
        </span>
      </form>
    </section>
  );
}
