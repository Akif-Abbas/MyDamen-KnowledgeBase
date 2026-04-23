import { useLayoutEffect, useMemo, useRef, useState } from "react";
import "./ManualsDocumentLibrary.css";

export type ManualsDocRow = {
  id: string;
  title: string;
  type: string;
  division: string;
  initiallySelected: boolean;
};

export const MOCK_DOCUMENT_ROWS: ManualsDocRow[] = [
  {
    id: "doc-1",
    title: "Importance of protection of exposed shafts",
    type: "Information letter",
    division: "Workboats",
    initiallySelected: true,
  },
  {
    id: "doc-2",
    title: "Correct fitting of Winel WT doors",
    type: "Technical paper",
    division: "Tugs",
    initiallySelected: true,
  },
  {
    id: "doc-3",
    title: "Correct fitting of loud hailers",
    type: "Technical paper",
    division: "Tugs",
    initiallySelected: false,
  },
  {
    id: "doc-4",
    title: "Correct installation and replacement of Exalto window wipers",
    type: "Manual",
    division: "Tugs",
    initiallySelected: false,
  },
  {
    id: "doc-5",
    title: "Maintaining CAT engine crankcase breather",
    type: "Technical paper",
    division: "Workboats",
    initiallySelected: false,
  },
  {
    id: "doc-6",
    title: "Sacrificial anodes",
    type: "Technical paper",
    division: "Workboats",
    initiallySelected: false,
  },
  {
    id: "doc-7",
    title: "Sea axe bow design of aluminum and steel high speed craft",
    type: "Technical paper",
    division: "Workboats",
    initiallySelected: false,
  },
];

function IconSearch({ className }: { className?: string }) {
  return (
    <svg className={className} width={16} height={16} viewBox="0 0 16 16" aria-hidden>
      <path
        fill="currentColor"
        d="M11 10.2 14.3 13.5 13.5 14.3 10.2 11C9.4 11.8 8.3 12.3 7 12.3 4.2 12.3 2 10.1 2 7.3 2 4.5 4.2 2.3 7 2.3 9.8 2.3 12 4.5 12 7.3 12 8.6 11.5 9.7 10.7 10.5ZM7 11.3C9.3 11.3 11 9.6 11 7.3 11 5 9.3 3.3 7 3.3 4.7 3.3 3 5 3 7.3 3 9.6 4.7 11.3 7 11.3Z"
      />
    </svg>
  );
}

/** Trailing chevron per Figma Select (Icon/Next on Select instances such as 9702:6561). */
function IconChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      aria-hidden
      fill="none"
    >
      <path
        d="M7.5 9.5 12 14.5 16.5 9.5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconDownload({ className }: { className?: string }) {
  return (
    <svg className={className} width={24} height={24} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 3v10.2l3.1-3.1 1.1 1.1-5 5-5-5 1.1-1.1L11 13.2V3h1zm-7 16v2h14v-2H5z"
      />
    </svg>
  );
}

function IconDownloadRow({ className }: { className?: string }) {
  return (
    <svg className={className} width={24} height={24} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 4v9.2l2.6-2.6.8.8-4 4-4-4 .8-.8L11 13.2V4h1zm-6 15v1h12v-1H6z"
      />
    </svg>
  );
}

function IconChevronPagination({ className }: { className?: string }) {
  return (
    <svg className={className} width={16} height={16} viewBox="0 0 16 16" aria-hidden>
      <path fill="currentColor" d="M5.5 3.25 10.75 8 5.5 12.75l-1-1.1L8.45 8 4.5 4.35l1-1.1Z" />
    </svg>
  );
}

function visiblePageNumbers(current: number, total: number, windowSize: number): number[] {
  if (total < 1) return [1];
  const w = Math.min(windowSize, total);
  let start = Math.max(1, current - Math.floor(w / 2));
  if (start + w - 1 > total) start = Math.max(1, total - w + 1);
  return Array.from({ length: w }, (_, i) => start + i);
}

/**
 * Figma 9702:6557 — document library: toolbar, table, pagination.
 */
export function ManualsDocumentLibrary() {
  const allIds = useMemo(() => MOCK_DOCUMENT_ROWS.map((r) => r.id), []);
  const initialSelected = useMemo(
    () => new Set(MOCK_DOCUMENT_ROWS.filter((r) => r.initiallySelected).map((r) => r.id)),
    [],
  );
  const [selectedIds, setSelectedIds] = useState<Set<string>>(() => new Set(initialSelected));
  const selectAllRef = useRef<HTMLInputElement>(null);

  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(5);
  const [jumpInput, setJumpInput] = useState("5");
  const totalItems = 19000;

  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  useLayoutEffect(() => {
    const el = selectAllRef.current;
    if (!el) return;
    const n = selectedIds.size;
    el.indeterminate = n > 0 && n < allIds.length;
  }, [selectedIds, allIds.length]);

  useLayoutEffect(() => {
    setJumpInput(String(currentPage));
  }, [currentPage]);

  const rangeLabel = useMemo(() => {
    const start = (currentPage - 1) * pageSize + 1;
    const end = Math.min(currentPage * pageSize, totalItems);
    return `${start}-${end} of ${totalItems.toLocaleString("en-US")} items`;
  }, [currentPage, pageSize, totalItems]);

  const pageNumbers = useMemo(
    () => visiblePageNumbers(currentPage, totalPages, 5),
    [currentPage, totalPages],
  );

  const allSelected = selectedIds.size === allIds.length;

  function toggleRow(id: string) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleSelectAll() {
    if (selectedIds.size === allIds.length) setSelectedIds(new Set());
    else setSelectedIds(new Set(allIds));
  }

  function goPage(p: number) {
    const clamped = Math.max(1, Math.min(totalPages, p));
    setCurrentPage(clamped);
  }

  function applyJump() {
    const n = parseInt(jumpInput, 10);
    if (Number.isFinite(n) && n >= 1) goPage(n);
    else setJumpInput(String(currentPage));
  }

  function onPageSizeChange(v: number) {
    const nextTotal = Math.max(1, Math.ceil(totalItems / v));
    setPageSize(v);
    setCurrentPage((p) => Math.min(p, nextTotal));
  }

  return (
    <section className="manuals-doc-lib" aria-label="Document library" data-node-id="9702:6557">
      <div className="manuals-doc-lib__toolbar">
        <div className="manuals-doc-lib__toolbar-main">
          <form className="manuals-doc-lib__search" role="search" onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              className="manuals-doc-lib__search-input"
              placeholder="Search"
              aria-label="Search documents"
              autoComplete="off"
            />
            <span className="manuals-doc-lib__search-icon" aria-hidden>
              <IconSearch className="manuals-doc-lib__search-svg" />
            </span>
          </form>
          <button type="button" className="manuals-doc-lib__filter" aria-haspopup="listbox" aria-label="System filter">
            <span className="manuals-doc-lib__filter-label">System</span>
            <IconChevronDown className="manuals-doc-lib__filter-chevron" />
          </button>
          <button type="button" className="manuals-doc-lib__filter" aria-haspopup="listbox" aria-label="Type filter">
            <span className="manuals-doc-lib__filter-label">Type</span>
            <IconChevronDown className="manuals-doc-lib__filter-chevron" />
          </button>
          <button type="button" className="manuals-doc-lib__filter" aria-haspopup="listbox" aria-label="Division filter">
            <span className="manuals-doc-lib__filter-label">Division</span>
            <IconChevronDown className="manuals-doc-lib__filter-chevron" />
          </button>
          <button type="button" className="manuals-doc-lib__download">
            <IconDownload className="manuals-doc-lib__download-icon" />
            <span>Download (.zip)</span>
          </button>
        </div>
      </div>

      <div className="manuals-doc-lib__table-block">
        <div className="manuals-doc-lib__table-wrap">
          <table className="manuals-doc-lib__table">
            <caption className="manuals-doc-lib__caption">
              Technical documents matching your filters
            </caption>
            <thead>
              <tr>
                <th className="manuals-doc-lib__th manuals-doc-lib__th--check" scope="col">
                  <label className="manuals-doc-lib__check-label">
                    <span className="manuals-doc-lib__visually-hidden">Select all rows</span>
                    <input
                      ref={selectAllRef}
                      type="checkbox"
                      className="manuals-doc-lib__checkbox"
                      checked={allSelected}
                      onChange={toggleSelectAll}
                      aria-checked={
                        allSelected ? "true" : selectedIds.size === 0 ? "false" : "mixed"
                      }
                    />
                  </label>
                </th>
                <th className="manuals-doc-lib__th manuals-doc-lib__th--title" scope="col">
                  Title
                </th>
                <th className="manuals-doc-lib__th manuals-doc-lib__th--type" scope="col">
                  Type
                </th>
                <th className="manuals-doc-lib__th manuals-doc-lib__th--division" scope="col">
                  Division
                </th>
                <th className="manuals-doc-lib__th manuals-doc-lib__th--action" scope="col">
                  <span className="manuals-doc-lib__visually-hidden">Download</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {MOCK_DOCUMENT_ROWS.map((row) => (
                <tr key={row.id}>
                  <td className="manuals-doc-lib__td manuals-doc-lib__td--check">
                    <label className="manuals-doc-lib__check-label">
                      <span className="manuals-doc-lib__visually-hidden">Select {row.title}</span>
                      <input
                        type="checkbox"
                        className="manuals-doc-lib__checkbox"
                        checked={selectedIds.has(row.id)}
                        onChange={() => toggleRow(row.id)}
                      />
                    </label>
                  </td>
                  <td className="manuals-doc-lib__td manuals-doc-lib__td--title">{row.title}</td>
                  <td className="manuals-doc-lib__td manuals-doc-lib__td--type">{row.type}</td>
                  <td className="manuals-doc-lib__td manuals-doc-lib__td--division">{row.division}</td>
                  <td className="manuals-doc-lib__td manuals-doc-lib__td--action">
                    <button type="button" className="manuals-doc-lib__row-download" aria-label={`Download ${row.title}`}>
                      <IconDownloadRow className="manuals-doc-lib__row-download-svg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className="manuals-doc-lib__pagination" aria-label="Table pagination">
          <div className="manuals-doc-lib__pagination-left">
            <span className="manuals-doc-lib__pagination-label">Items per page</span>
            <label className="manuals-doc-lib__visually-hidden" htmlFor="manuals-page-size">
              Items per page
            </label>
            <select
              id="manuals-page-size"
              className="manuals-doc-lib__page-size"
              value={pageSize}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
            >
              {[10, 25, 50, 100].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            <span className="manuals-doc-lib__range">{rangeLabel}</span>
          </div>

          <div className="manuals-doc-lib__pagination-right">
            <div className="manuals-doc-lib__page-controls">
              <button
                type="button"
                className="manuals-doc-lib__page-nav"
                aria-label="Previous page"
                disabled={currentPage <= 1}
                onClick={() => goPage(currentPage - 1)}
              >
                <span className="manuals-doc-lib__page-nav-icon manuals-doc-lib__page-nav-icon--flip" aria-hidden>
                  <IconChevronPagination />
                </span>
              </button>
              {pageNumbers.map((p) => (
                <button
                  key={p}
                  type="button"
                  className={
                    p === currentPage ? "manuals-doc-lib__page-num manuals-doc-lib__page-num--current" : "manuals-doc-lib__page-num"
                  }
                  aria-label={`Page ${p}`}
                  aria-current={p === currentPage ? "page" : undefined}
                  onClick={() => goPage(p)}
                >
                  {p}
                </button>
              ))}
              <button
                type="button"
                className="manuals-doc-lib__page-nav"
                aria-label="Next page"
                disabled={currentPage >= totalPages}
                onClick={() => goPage(currentPage + 1)}
              >
                <IconChevronPagination />
              </button>
            </div>
            <div className="manuals-doc-lib__jump">
              <input
                type="text"
                inputMode="numeric"
                className="manuals-doc-lib__jump-input"
                value={jumpInput}
                onChange={(e) => setJumpInput(e.target.value)}
                onBlur={applyJump}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    applyJump();
                  }
                }}
                aria-label="Jump to page number"
              />
              <span className="manuals-doc-lib__jump-suffix">of {totalPages.toLocaleString("en-US")} pages</span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
