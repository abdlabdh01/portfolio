"use client";

import * as React from "react";
import { Menu } from "lucide-react";

import { ThemeToggle } from "@/components/site/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navItems, site } from "@/lib/content";
import { useActiveSection } from "@/lib/use-active-section";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const ids = React.useMemo(() => navItems.map((n) => n.id), []);
  const { activeId, setActiveId } = useActiveSection(ids);
  const [open, setOpen] = React.useState(false);

  function onNav(id: string) {
    setActiveId(id);
    scrollToId(id);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/55">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => onNav("home")}
          className="group flex items-center gap-2 text-left"
          aria-label="Go to top"
        >
          <div className="h-8 w-8 rounded-full bg-primary/15 ring-1 ring-primary/15" />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">{site.name}</div>
            <div className="text-xs text-muted-foreground">{site.title}</div>
          </div>
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.slice(1).map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNav(item.id)}
                className={cn(
                  "relative rounded-[calc(var(--radius)-2px)] px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "text-foreground",
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-2 bottom-1 h-0.5 rounded-full bg-primary/35"
                  />
                ) : null}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />

          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Navigate</SheetTitle>
                </SheetHeader>
                <div className="mt-4 flex flex-col gap-1">
                  {navItems.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => onNav(item.id)}
                        className={cn(
                          "rounded-[calc(var(--radius)-2px)] px-3 py-2 text-left text-sm transition-colors hover:bg-secondary/60",
                          isActive && "bg-secondary text-foreground",
                        )}
                      >
                        <div className="font-medium">{item.label}</div>
                      </button>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

