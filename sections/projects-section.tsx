"use client";

import * as React from "react";
import { ArrowUpRight, BadgeCheck, Factory, FlaskConical, Layers3 } from "lucide-react";

import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projects, type ProjectCaseStudy } from "@/lib/content";

const categoryIcon = (category: string) => {
  const c = category.toLowerCase();
  if (c.includes("testing") || c.includes("quality")) return BadgeCheck;
  if (c.includes("processing") || c.includes("formulation")) return Factory;
  if (c.includes("materials") || c.includes("characterization")) return Layers3;
  return FlaskConical;
};

export function ProjectsSection() {
  const [active, setActive] = React.useState<ProjectCaseStudy | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Projects (Case Studies)"
          subtitle="Industry-focused projects presented with problem framing, solution approach, and outcomes."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => {
            const Icon = categoryIcon(p.category);
            return (
              <Reveal key={p.id} delay={idx * 0.03}>
                <button
                  type="button"
                  className="group text-left"
                  onClick={() => setActive(p)}
                  aria-label={`Open case study for ${p.title}`}
                >
                  <Card className="h-full overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-md">
                    <CardHeader className="gap-2">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <CardTitle className="text-base">{p.title}</CardTitle>
                          <div className="mt-1 text-sm text-muted-foreground">
                            {p.category}
                          </div>
                        </div>
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/7 ring-1 ring-primary/10">
                          <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="h-px w-full bg-primary/10" />
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="text-xs font-medium text-muted-foreground">
                          Problem
                        </div>
                        <div className="mt-1 text-sm">{p.problem}</div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {p.technologies.slice(0, 3).map((t) => (
                          <Badge key={t} variant="outline">
                            {t}
                          </Badge>
                        ))}
                        {p.technologies.length > 3 ? (
                          <Badge variant="subtle">+{p.technologies.length - 3}</Badge>
                        ) : null}
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          View details
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </CardContent>
                  </Card>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Dialog
          open={!!active}
          onOpenChange={(o) => {
            if (!o) setActive(null);
          }}
        >
          <DialogContent className="max-w-3xl">
            {active ? (
              <>
                <DialogHeader>
                  <DialogTitle>{active.title}</DialogTitle>
                  <DialogDescription>{active.category}</DialogDescription>
                </DialogHeader>

                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="space-y-3">
                    <div className="text-sm font-semibold">Problem statement</div>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {active.problem}
                    </p>

                    <div className="pt-2 text-sm font-semibold">Solution approach</div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {active.approach.map((a) => (
                        <li key={a} className="flex items-start gap-2">
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                            aria-hidden="true"
                          />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-semibold">Technologies used</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {active.technologies.map((t) => (
                          <Badge key={t} variant="outline">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[calc(var(--radius)+8px)] border border-border bg-secondary/30 p-5">
                      <div className="text-sm font-semibold">Results / Impact</div>
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                        {active.results.map((r) => (
                          <li key={r} className="flex items-start gap-2">
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                              aria-hidden="true"
                            />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="outline" onClick={() => setActive(null)}>
                      Close
                    </Button>
                  </div>
                </div>
              </>
            ) : null}
          </DialogContent>
        </Dialog>
      </Container>
    </section>
  );
}

