import { HERO_BOW_WAVE } from "./assets";
import "./HeroSecondary.css";

/** Hero Secondary — Figma node 9695:3153 (under app header) */
export function HeroSecondary() {
  return (
    <section className="hero-secondary" aria-labelledby="hero-secondary-title">
      <div className="hero-secondary__inner">
        <div className="hero-secondary__bow">
          <img src={HERO_BOW_WAVE} alt="" width={118} height={59} />
        </div>
        <h1 className="hero-secondary__title" id="hero-secondary-title">
          Knowledge Base
        </h1>
      </div>
    </section>
  );
}
