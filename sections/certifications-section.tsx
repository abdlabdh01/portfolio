import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { certifications } from "@/lib/content";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Certifications & Technical Training"
          subtitle="Professional development aligned with industrial safety, standards, and research discipline."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, idx) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={idx * 0.03}>
                <Card className="h-full transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <CardHeader className="flex-row items-center justify-between gap-3">
                    <CardTitle className="text-base">{c.title}</CardTitle>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/7 ring-1 ring-primary/10">
                      <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {c.note}
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

