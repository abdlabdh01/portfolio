"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { technicalSkills } from "@/lib/content";

function SkillBar({ value }: { value: number }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <div
      ref={ref}
      className="h-2 w-full overflow-hidden rounded-full bg-secondary"
      aria-label={`Skill level ${value} percent`}
      role="img"
    >
      <motion.div
        className="h-full rounded-full bg-primary"
        initial={{ width: 0 }}
        animate={inView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export function TechnicalSkillsSection() {
  return (
    <section id="expertise" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Technical Expertise"
          subtitle="Industry-aligned capability panel with standards-aware indicators."
        />

        <TooltipProvider>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technicalSkills.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <Reveal key={cat.category} delay={idx * 0.05}>
                  <Card className="h-full transition-shadow hover:shadow-md">
                    <CardHeader className="flex-row items-center justify-between">
                      <CardTitle className="text-base">{cat.category}</CardTitle>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/7 ring-1 ring-primary/10">
                        <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {cat.skills.map((s) => (
                        <Tooltip key={s.name}>
                          <TooltipTrigger asChild>
                            <div className="space-y-2 rounded-[calc(var(--radius)-2px)] p-2 transition-colors hover:bg-secondary/50">
                              <div className="flex items-center justify-between gap-3">
                                <div className="text-sm font-medium">{s.name}</div>
                                <div className="text-xs text-muted-foreground">
                                  {s.level}%
                                </div>
                              </div>
                              <SkillBar value={s.level} />
                            </div>
                          </TooltipTrigger>
                          {s.note ? (
                            <TooltipContent>{s.note}</TooltipContent>
                          ) : null}
                        </Tooltip>
                      ))}
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </TooltipProvider>
      </Container>
    </section>
  );
}

