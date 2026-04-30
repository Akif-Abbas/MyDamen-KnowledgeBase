import { useEffect, useState } from "react";
import {
  HEADER_IMG_CART,
  HEADER_IMG_CHEVRON,
  HEADER_IMG_LOGO,
  HEADER_IMG_MENU,
  HEADER_IMG_NOTIFICATIONS,
  HEADER_IMG_SLIDER,
  HEADER_IMG_SUPPORT,
} from "./assets";
import "./AppHeader.css";

function formatHeaderTime(d: Date) {
  return d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit", hour12: true });
}

/** Sticky top app bar — Figma Horizontal container 9344:32194 */
export function AppHeader() {
  const [time, setTime] = useState(() => formatHeaderTime(new Date()));

  useEffect(() => {
    const id = window.setInterval(() => setTime(formatHeaderTime(new Date())), 60_000);
    return () => window.clearInterval(id);
  }, []);

  // #region agent log
  useEffect(() => {
    const runId = "stroke-fix-v1";
    const log = (hypothesisId: string, message: string, data: Record<string, unknown>) => {
      fetch("http://127.0.0.1:7242/ingest/f0411043-426e-4e7d-9374-390570fdfb19", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          location: "AppHeader.tsx:debug-pill-icons",
          message,
          data: { ...data, runId, hypothesisId },
          timestamp: Date.now(),
        }),
      }).catch(() => {});
    };

    const tick = () => {
      const pills = document.querySelectorAll<HTMLImageElement>(".app-header__pill-icon");
      const support = document.querySelector<HTMLImageElement>(".app-header__support-icon");
      const rows = Array.from(pills).map((img, i) => ({
        index: i,
        srcTail: img.src.split("/").pop()?.slice(0, 80) ?? "",
        naturalW: img.naturalWidth,
        naturalH: img.naturalHeight,
        complete: img.complete,
        clientW: img.clientWidth,
        clientH: img.clientHeight,
      }));
      log("H2", "pill-icon imgs", { rows, count: pills.length });
      if (support) {
        log("H2", "support-icon img", {
          srcTail: support.src.split("/").pop()?.slice(0, 80) ?? "",
          naturalW: support.naturalWidth,
          naturalH: support.naturalHeight,
          clientW: support.clientWidth,
          clientH: support.clientHeight,
        });
      }
      log("H4", "bundled URL typeof", {
        cartType: typeof HEADER_IMG_CART,
        notifType: typeof HEADER_IMG_NOTIFICATIONS,
        cartTail: String(HEADER_IMG_CART).split("/").pop()?.slice(0, 60),
        notifTail: String(HEADER_IMG_NOTIFICATIONS).split("/").pop()?.slice(0, 60),
      });
      void fetch(String(HEADER_IMG_CART))
        .then((r) => r.text())
        .then((text) => {
          log("H1", "cart.svg fetch text flags", {
            hasStrokeAttr: /\bstroke\s*=/.test(text),
            hasStrokeWidth: /stroke-width/i.test(text),
            fillOnlyWhite: /fill="#FFFFFF"/i.test(text) && !/stroke/i.test(text),
            length: text.length,
          });
        })
        .catch((e) => log("H4", "cart svg fetch failed", { err: String(e) }));
      void fetch(String(HEADER_IMG_NOTIFICATIONS))
        .then((r) => r.text())
        .then((text) => {
          log("H1", "notifications.svg fetch text flags", {
            hasStrokeAttr: /\bstroke\s*=/.test(text),
            length: text.length,
          });
        })
        .catch(() => {});
    };

    requestAnimationFrame(() => requestAnimationFrame(tick));
  }, []);
  // #endregion

  return (
    <header className="app-header" role="banner">
      <div className="app-header__inner">
        <div className="app-header__sidebar">
          <div className="app-header__sidebar-main">
            <button type="button" className="app-header__menu-btn" aria-label="Open menu">
              <span className="app-header__menu-icon-wrap">
                <img src={HEADER_IMG_MENU} alt="" width={17} height={14} />
              </span>
            </button>
            <div className="app-header__logo-row">
              <span className="app-header__divider" aria-hidden>
                <img src={HEADER_IMG_SLIDER} alt="" width={1} height={41} />
              </span>
              <div className="app-header__logo-wrap">
                <img className="app-header__logo" src={HEADER_IMG_LOGO} alt="Damen" width={72} height={14} />
              </div>
            </div>
          </div>
          <button type="button" className="app-header__chevron-card" aria-label="Back">
            <span className="app-header__chevron-wrap">
              <img src={HEADER_IMG_CHEVRON} alt="" width={27} height={27} />
            </span>
          </button>
        </div>

        <div className="app-header__actions">
          <div className="app-header__time" aria-live="polite">
            {time}
          </div>
          <button type="button" className="app-header__pill">
            <img
              className="app-header__pill-icon"
              data-debug-icon="notifications"
              src={HEADER_IMG_NOTIFICATIONS}
              alt=""
              width={20}
              height={20}
            />
            <span className="app-header__pill-text app-header__pill-text--medium">3 unread</span>
          </button>
          <button type="button" className="app-header__pill">
            <img
              className="app-header__pill-icon"
              data-debug-icon="cart"
              src={HEADER_IMG_CART}
              alt=""
              width={20}
              height={20}
            />
            <span className="app-header__pill-text app-header__pill-text--medium">Quotation request</span>
          </button>
          <button type="button" className="app-header__pill">
            <span className="app-header__support-icon-wrap">
              <img className="app-header__support-icon" src={HEADER_IMG_SUPPORT} alt="" width={17} height={17} />
            </span>
            <span className="app-header__pill-text app-header__pill-text--roman">Support</span>
          </button>
        </div>
      </div>
    </header>
  );
}
