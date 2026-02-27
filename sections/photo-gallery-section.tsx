"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { photoGallery, type PhotoGalleryItem } from "@/lib/content";

export function PhotoGallerySection() {
  const [active, setActive] = React.useState<PhotoGalleryItem | null>(null);

  return (
    <section id="gallery" className="bg-secondary/20 py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Photo Gallery"
          subtitle="Lab and industry moments—testing, setups, presentations, and leadership."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photoGallery.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.03}>
              <button
                type="button"
                className="group text-left"
                onClick={() => setActive(item)}
                aria-label={`Open photo details for ${item.title}`}
              >
                <Card className="overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/35 opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 opacity-0 transition-opacity group-hover:opacity-100">
                      <div>
                        <div className="text-sm font-semibold text-white">
                          {item.title}
                        </div>
                        <div className="text-xs text-white/85">
                          {item.description}
                        </div>
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur">
                        <ArrowUpRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 p-5">
                    <div className="text-sm font-semibold">{item.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.description}
                    </div>
                  </div>
                </Card>
              </button>
            </Reveal>
          ))}
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
                  <DialogDescription>{active.description}</DialogDescription>
                </DialogHeader>

                <div className="relative aspect-[16/9] overflow-hidden rounded-[calc(var(--radius)+6px)] border border-border">
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    className="object-cover"
                  />
                </div>
              </>
            ) : null}
          </DialogContent>
        </Dialog>
      </Container>
    </section>
  );
}

