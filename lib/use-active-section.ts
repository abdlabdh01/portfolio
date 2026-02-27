"use client";

import * as React from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = React.useState(sectionIds[0] ?? "home");
  const idsKey = React.useMemo(() => sectionIds.join("|"), [sectionIds]);

  React.useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        root: null,
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-20% 0px -65% 0px",
      },
    );

    for (const el of els) observer.observe(el);
    return () => observer.disconnect();
  }, [idsKey, sectionIds]);

  return { activeId, setActiveId };
}

