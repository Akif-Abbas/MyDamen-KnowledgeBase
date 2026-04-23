import type { ButtonHTMLAttributes, ReactNode } from "react";

export type FaqBlockDefaultProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "children"> & {
  iconSrc: string;
  iconAlt?: string;
  children: ReactNode;
  /** When true, card uses the same visuals as hover (selected category). */
  isSelected?: boolean;
};

/**
 * FAQ block: default surface (9344:15111); hover/focus matches Active (9344:15113).
 */
export function FaqBlockDefault({
  iconSrc,
  iconAlt = "",
  className,
  children,
  isSelected,
  ...rest
}: FaqBlockDefaultProps) {
  const rootClass = ["faq-block", isSelected && "faq-block--selected", className].filter(Boolean).join(" ");
  return (
    <button type="button" className={rootClass} {...rest}>
      <div className="faq-block__top">
        <div className="faq-block__icon-wrap">
          <img className="faq-block__icon" src={iconSrc} alt={iconAlt} width={32} height={32} />
        </div>
      </div>
      <div className="faq-block__bottom">{children}</div>
    </button>
  );
}
