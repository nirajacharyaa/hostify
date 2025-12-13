"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";

const COLLAPSED_HEIGHT = 300;

const AboutProperty = ({ aboutHtml }: { aboutHtml: string }) => {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [canToggle, setCanToggle] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const measure = () => {
      const h = el.scrollHeight;
      setContentHeight(h);
      setCanToggle(h > COLLAPSED_HEIGHT);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const maxHeight = expanded ? `${contentHeight}px` : `${COLLAPSED_HEIGHT}px`;

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">About this home</h2>

      <div
        ref={contentRef}
        className="relative text-gray-600 leading-relaxed prose max-w-none prose-h1:mb-0 prose-h1:text-2xl prose-headings:font-semibold prose-p:my-3 prose-h2:my-4 prose-h2:text-xl"
        style={{
          maxHeight,
          overflow: "hidden",
          transition: "max-height 300ms",
        }}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <i will sanitize this later>
        dangerouslySetInnerHTML={{ __html: aboutHtml }}
      />

      {canToggle && (
        <Button
          onClick={() => setExpanded((s) => !s)}
          variant={"link"}
          size={"sm"}
          className="mt-2 text-orange-500 px-0 font-semibold hover:underline flex items-center gap-1"
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Show more"}
        </Button>
      )}
    </div>
  );
};

export default AboutProperty;
