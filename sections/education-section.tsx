import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/lib/content";

export function EducationSection() {
  return (
    <section id="education" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Education"
          subtitle="Process-flow style timeline of academic training and core coursework blocks."
        />

        <div className="relative">
          <div
            className="absolute left-4 top-0 h-full w-px bg-primary/15 sm:left-5"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {education.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={idx * 0.05}>
                  <div className="relative pl-12 sm:pl-14">
                    <div className="absolute left-0 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background shadow-sm sm:left-1">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>

                    <Card className="transition-shadow hover:shadow-md">
                      <CardHeader className="gap-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <CardTitle className="text-base sm:text-lg">
                            {item.title}
                          </CardTitle>
                          <Badge variant="outline">{item.period}</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {item.org}
                        </div>
                        <div className="h-px w-full bg-primary/10" />
                      </CardHeader>
                      <CardContent>
                        <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                          {item.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2">
                              <span
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                                aria-hidden="true"
                              />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
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

