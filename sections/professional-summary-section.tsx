import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { professionalSummary } from "@/lib/content";

export function ProfessionalSummarySection() {
  return (
    <section id="summary" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title={professionalSummary.heading}
          subtitle="Engineering profile with industrial relevance and scientific credibility."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div className="rounded-[calc(var(--radius)+10px)] border border-border bg-card/70 p-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/55">
              <div className="text-sm font-semibold tracking-tight">
                Engineering Profile
              </div>
              <div className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                {professionalSummary.summary}
              </div>
              <div className="mt-6 h-px w-full bg-primary/10" />
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[calc(var(--radius)-2px)] bg-secondary/60 px-3 py-2 text-sm">
                  <div className="text-xs text-muted-foreground">Focus</div>
                  <div className="font-medium">Polymer Processing</div>
                </div>
                <div className="rounded-[calc(var(--radius)-2px)] bg-secondary/60 px-3 py-2 text-sm">
                  <div className="text-xs text-muted-foreground">Strength</div>
                  <div className="font-medium">Elastomer Testing</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="grid gap-4 sm:grid-cols-2">
              {professionalSummary.highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <Card
                    key={h.title}
                    className="transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <CardHeader className="flex-row items-center justify-between gap-3">
                      <CardTitle className="text-base">{h.title}</CardTitle>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/7 ring-1 ring-primary/10">
                        <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {h.points.map((p) => (
                          <li key={p} className="flex items-start gap-2">
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                              aria-hidden="true"
                            />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

