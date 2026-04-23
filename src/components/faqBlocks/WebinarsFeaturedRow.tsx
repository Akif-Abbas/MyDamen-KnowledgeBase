import "./WebinarsFeaturedRow.css";

export type WebinarFeaturedItem = {
  id: string;
  title: string;
  durationLabel: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
};

export const MOCK_WEBINAR_FEATURED: WebinarFeaturedItem[] = [
  {
    id: "w-1",
    title: "Introduction to maintenance",
    durationLabel: "0.57 Min",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop&q=80",
    thumbnailAlt: "Vessel at sea — webinar thumbnail",
  },
  {
    id: "w-2",
    title: "Introduction to maintenance",
    durationLabel: "0.57 Min",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop&q=80",
    thumbnailAlt: "Vessel at sea — webinar thumbnail",
  },
  {
    id: "w-3",
    title: "Introduction to maintenance",
    durationLabel: "0.57 Min",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop&q=80",
    thumbnailAlt: "Vessel at sea — webinar thumbnail",
  },
];

function IconSchedule({ className }: { className?: string }) {
  return (
    <svg className={className} width={16} height={16} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"
      />
    </svg>
  );
}

function IconPlay({ className }: { className?: string }) {
  return (
    <svg className={className} width={24} height={24} viewBox="0 0 24 24" aria-hidden>
      <path fill="currentColor" d="M9 7.5v9l8-4.5L9 7.5Z" />
    </svg>
  );
}

type WebinarFeaturedCardProps = {
  item: WebinarFeaturedItem;
};

function WebinarFeaturedCard({ item }: WebinarFeaturedCardProps) {
  return (
    <article className="webinars-featured-card" data-node-id="9702:6970">
      <div className="webinars-featured-card__video">
        <img className="webinars-featured-card__thumb" src={item.thumbnailSrc} alt={item.thumbnailAlt} loading="lazy" />
        <button type="button" className="webinars-featured-card__play" aria-label={`Play ${item.title}`}>
          <IconPlay className="webinars-featured-card__play-icon" />
        </button>
      </div>
      <div className="webinars-featured-card__time">
        <IconSchedule className="webinars-featured-card__schedule-icon" />
        <span>{item.durationLabel}</span>
      </div>
      <h3 className="webinars-featured-card__title">{item.title}</h3>
    </article>
  );
}

export type WebinarsFeaturedRowProps = {
  items?: WebinarFeaturedItem[];
  /** Distinct keys when multiple rows render the same mock items */
  rowKeyPrefix?: string;
  "aria-label"?: string;
};

/**
 * Figma 9702:6989 — horizontal row of webinar video cards.
 */
export function WebinarsFeaturedRow({
  items = MOCK_WEBINAR_FEATURED,
  rowKeyPrefix = "",
  "aria-label": ariaLabel = "Featured webinars",
}: WebinarsFeaturedRowProps) {
  return (
    <div
      className="webinars-featured-row"
      data-node-id="9702:6989"
      data-name="Webinars"
      aria-label={ariaLabel}
    >
      {items.map((item) => (
        <WebinarFeaturedCard
          key={rowKeyPrefix ? `${rowKeyPrefix}-${item.id}` : item.id}
          item={item}
        />
      ))}
    </div>
  );
}
