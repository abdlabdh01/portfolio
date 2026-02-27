import { Leaf, Recycle, Sprout, TestTube2 } from "lucide-react";

import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { researchInterests } from "@/lib/content";

const icons = [Leaf, Sprout, TestTube2, Recycle];

export function ResearchSection() {
  return (
    <section id="research" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Research Interests"
          subtitle="Areas I’m actively exploring—aligned to sustainability, elastomers, and robust processing."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {researchInterests.map((item, idx) => {
            const Icon = icons[idx % icons.length]!;
            return (
              <Reveal key={item} delay={idx * 0.03}>
                <Card className="h-full transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <CardContent className="flex items-start gap-3 p-6">
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/10">
                      <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{item}</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        Evidence-led exploration with a standards-aligned mindset.
                      </div>
                    </div>
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

