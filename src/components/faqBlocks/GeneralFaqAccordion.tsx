import { useId, useState } from "react";
import "./GeneralFaqAccordion.css";

export type GeneralFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const MOCK_GENERAL_FAQ: GeneralFaqItem[] = [
  {
    id: "g-1",
    question: "I cannot sign in MyDamen",
    answer:
      "That depends on your authorization level. Only the administrator of your organization can invite other persons. On the My settings page you can see your authorization level.",
  },
  {
    id: "g-2",
    question: "Can I change the language of MyDamen?",
    answer: "Yes. You can change the language in the Personal details on the My settings page.",
  },
  {
    id: "g-3",
    question:
      "My language is not in the list of languages. Can I use a website translator, for example Google translate?",
    answer:
      "If your language is not supported in the list, contact your organization administrator. Using external translators may affect layout or accuracy.",
  },
  {
    id: "g-4",
    question: "I receive a confirmation email after I submitted a request. Can I change this?",
    answer:
      "You can often adjust notification preferences under My settings. If the option is not available, ask your administrator for the correct policy.",
  },
  {
    id: "g-5",
    question: "Information in MyDamen is missing or incorrect. What can I do?",
    answer:
      "Report the issue through your usual support channel and include the affected area, screenshots, and any reference numbers so the team can investigate.",
  },
];

function IconPlus({ className }: { className?: string }) {
  return (
    <svg className={className} width={24} height={24} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M11 5h2v7h7v2h-7v7h-2v-7H4v-2h7V5z"
      />
    </svg>
  );
}

function IconMinus({ className }: { className?: string }) {
  return (
    <svg className={className} width={24} height={24} viewBox="0 0 24 24" aria-hidden>
      <path fill="currentColor" d="M5 11h14v2H5v-2z" />
    </svg>
  );
}

type GeneralFaqAccordionProps = {
  items?: GeneralFaqItem[];
};

/**
 * Figma 9702:7035 — FAQ list: plus expands to show answer; single-open; all collapsed initially.
 */
export function GeneralFaqAccordion({ items = MOCK_GENERAL_FAQ }: GeneralFaqAccordionProps) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(null);

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section className="general-faq-accordion" data-node-id="9702:7035" aria-label="Frequently asked questions">
      <div className="general-faq-accordion__list" role="list">
        {items.map((item) => {
          const isOpen = openId === item.id;
          const panelId = `${baseId}-panel-${item.id}`;
          const triggerId = `${baseId}-trigger-${item.id}`;

          return (
            <div
              key={item.id}
              className={`general-faq-accordion__item${isOpen ? " general-faq-accordion__item--open" : ""}`}
              role="listitem"
            >
              <h3 className="general-faq-accordion__heading">
                <button
                  id={triggerId}
                  type="button"
                  className="general-faq-accordion__trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(item.id)}
                >
                  <span className="general-faq-accordion__icon" aria-hidden>
                    {isOpen ? (
                      <IconMinus className="general-faq-accordion__icon-svg general-faq-accordion__icon-svg--minus" />
                    ) : (
                      <IconPlus className="general-faq-accordion__icon-svg general-faq-accordion__icon-svg--plus" />
                    )}
                  </span>
                  <span className="general-faq-accordion__question">{item.question}</span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                className="general-faq-accordion__panel"
                aria-labelledby={triggerId}
                hidden={!isOpen}
              >
                <p className="general-faq-accordion__answer">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
