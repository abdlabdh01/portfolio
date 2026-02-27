import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "@/lib/content";

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-secondary/20 py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Industry & Leadership Experience"
          subtitle="Structured engineering timeline with impact, technical contribution, and leadership contribution."
        />

        <div className="relative">
          <div
            className="absolute left-4 top-0 h-full w-px bg-primary/12 sm:left-5"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {experience.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.role} delay={idx * 0.05}>
                  <div className="relative pl-12 sm:pl-14">
                    <div className="absolute left-0 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background shadow-sm sm:left-1">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>

                    <Card className="transition-shadow hover:shadow-md">
                      <CardHeader className="gap-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <CardTitle className="text-base sm:text-lg">{item.role}</CardTitle>
                          <Badge variant="outline">{item.period}</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {item.org}
                        </div>
                        {item.tags?.length ? (
                          <div className="flex flex-wrap gap-2 pt-1">
                            {item.tags.map((t) => (
                              <Badge key={t} variant="subtle">
                                {t}
                              </Badge>
                            ))}
                          </div>
                        ) : null}
                        {item.metrics?.length ? (
                          <div className="flex flex-wrap gap-2 pt-1">
                            {item.metrics.map((m) => (
                              <Badge key={m} variant="outline">
                                {m}
                              </Badge>
                            ))}
                          </div>
                        ) : null}
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-5 lg:grid-cols-3">
                          <div>
                            <div className="text-xs font-semibold tracking-wide text-muted-foreground">
                              Impact
                            </div>
                            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                              {item.impact.map((b) => (
                                <li key={b} className="flex items-start gap-2">
                                  <span
                                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                                    aria-hidden="true"
                                  />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <div className="text-xs font-semibold tracking-wide text-muted-foreground">
                              Technical contribution
                            </div>
                            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                              {item.technical.map((b) => (
                                <li key={b} className="flex items-start gap-2">
                                  <span
                                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                                    aria-hidden="true"
                                  />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <div className="text-xs font-semibold tracking-wide text-muted-foreground">
                              Leadership contribution
                            </div>
                            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                              {item.leadership.map((b) => (
                                <li key={b} className="flex items-start gap-2">
                                  <span
                                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                                    aria-hidden="true"
                                  />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

