import "./GettingStartedFigmaContainer.css";

function IconChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} width={16} height={16} viewBox="0 0 16 16" aria-hidden>
      <path
        fill="currentColor"
        d="M5.5 3.25 10.75 8 5.5 12.75l-1-1.1L8.45 8 4.5 4.35l1-1.1Z"
      />
    </svg>
  );
}

function IconPlay({ className }: { className?: string }) {
  return (
    <svg className={className} width={16} height={16} viewBox="0 0 16 16" aria-hidden>
      <path fill="currentColor" d="M5 3.5v9l7-4.5L5 3.5Z" />
    </svg>
  );
}

/**
 * Vertical container from Figma (node 9702:3166) — Getting started content slot.
 */
export function GettingStartedFigmaContainer() {
  return (
    <div className="gs-figma" data-node-id="9702:3166" data-name="Vertical container">
      <div className="gs-figma__intro">
        <h2 className="gs-figma__title">Getting started</h2>
        <p className="gs-figma__lede">
          {"See the latest manuals & instructions on portal usage, coach marks and tutorials."}
        </p>
      </div>

      <div className="gs-figma__sheet">
        <div className="gs-figma__row">
          <div className="gs-figma__col">
            <div className="gs-figma__col-text">
              <h3 className="gs-figma__col-title">Urgent service</h3>
              <p className="gs-figma__col-desc">In need of service as soon as possible?</p>
            </div>
            <a className="gs-figma__link" href="tel:+31183631339">
              +31 183 631 339
            </a>
          </div>

          <div className="gs-figma__col">
            <div className="gs-figma__col-text">
              <h3 className="gs-figma__col-title">Settings</h3>
              <p className="gs-figma__col-desc">Change your preferences or personal details</p>
            </div>
            <a className="gs-figma__link gs-figma__link--inline" href="#">
              My settings
              <IconChevronRight className="gs-figma__link-icon" />
            </a>
          </div>

          <div className="gs-figma__col">
            <div className="gs-figma__col-text">
              <h3 className="gs-figma__col-title">Ask a question</h3>
              <p className="gs-figma__col-desc">Need help or do you want to give us feedback?</p>
            </div>
            <a className="gs-figma__link gs-figma__link--inline" href="#">
              Ask a question
              <IconChevronRight className="gs-figma__link-icon" />
            </a>
          </div>

          <div className="gs-figma__col">
            <div className="gs-figma__col-text">
              <h3 className="gs-figma__col-title">Coach marks</h3>
              <p className="gs-figma__col-desc">Freshen up your skills and know-how</p>
            </div>
            <a className="gs-figma__link gs-figma__link--inline" href="#">
              Start tutorial
              <IconPlay className="gs-figma__link-icon" />
            </a>
          </div>
        </div>
        <div className="gs-figma__divider" aria-hidden />
      </div>
    </div>
  );
}
