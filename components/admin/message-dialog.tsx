"use client";

import { useEffect, useRef } from "react";
import type { Submission } from "@/lib/supabase";

type Props = {
  submission: Submission;
  formattedDate: string;
};

export function MessageDialog({ submission, formattedDate }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  // Lock body scroll while open.
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const onToggle = () => {
      document.body.style.overflow = dialog.open ? "hidden" : "";
    };
    dialog.addEventListener("close", onToggle);
    dialog.addEventListener("cancel", onToggle);
    return () => {
      dialog.removeEventListener("close", onToggle);
      dialog.removeEventListener("cancel", onToggle);
      document.body.style.overflow = "";
    };
  }, []);

  function open() {
    ref.current?.showModal();
    document.body.style.overflow = "hidden";
  }

  function close() {
    ref.current?.close();
  }

  // Click outside dialog content (on the dialog backdrop area) closes it.
  function onBackdropClick(e: React.MouseEvent<HTMLDialogElement>) {
    if (e.target === ref.current) close();
  }

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint transition-colors hover:text-fg"
      >
        View →
      </button>

      <dialog
        ref={ref}
        onClick={onBackdropClick}
        className="m-auto w-[min(640px,calc(100vw-2rem))] rounded-2xl border border-border bg-surface p-0 text-fg shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-start justify-between gap-6 border-b border-border px-6 py-5">
          <div className="space-y-1">
            <p className="font-medium text-fg">{submission.name}</p>
            <a
              href={`mailto:${submission.email}`}
              className="text-sm text-muted transition-colors hover:text-aurora-2"
            >
              {submission.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-faint">
              {formattedDate}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="flex h-8 w-8 items-center justify-center rounded-full text-faint transition-colors hover:bg-elevated hover:text-fg"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden
              >
                <path
                  d="M1 1l12 12M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="max-h-[60vh] overflow-y-auto px-6 py-5">
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-muted">
            {submission.message}
          </p>
        </div>
      </dialog>
    </>
  );
}
