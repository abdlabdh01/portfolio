import * as React from "react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
}: {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-8",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div
        className={cn(
          "mt-2 h-[3px] w-16 rounded-full bg-gradient-to-r from-primary/60 via-primary/20 to-transparent",
          align === "center" ? "mx-auto" : "",
        )}
        aria-hidden="true"
      />
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

