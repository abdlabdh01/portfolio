"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, Shapes, Wrench } from "lucide-react";

import { Container } from "@/components/site/container";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { site } from "@/lib/content";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.22),transparent_55%)] blur-3xl"
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* polymer-like chain nodes */}
        <motion.div
          className="absolute inset-x-[10%] top-32 hidden h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 sm:block"
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute left-[18%] top-28 hidden h-2 w-2 rounded-full bg-primary/70 sm:block" />
        <div className="absolute left-[38%] top-28 hidden h-2 w-2 rounded-full bg-primary/50 sm:block" />
        <div className="absolute left-[58%] top-28 hidden h-2 w-2 rounded-full bg-primary/60 sm:block" />
        <div className="absolute left-[78%] top-28 hidden h-2 w-2 rounded-full bg-primary/40 sm:block" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-primary/10" />
      </motion.div>

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="subtle" className="gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  {site.location}
                </Badge>
                  <Badge variant="outline">
                    Polymer Processing • Rubber • Elastomers
                  </Badge>
                <Badge variant="outline" className="gap-1.5">
                  <Shapes className="h-3.5 w-3.5 text-accent" />
                  Materials Engineering
                </Badge>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                  {site.name}
                </h1>
                <p className="text-base font-medium text-primary sm:text-lg">
                  {site.title}
                </p>
                <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  {site.tagline}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href="/cv.pdf" download>
                    <Download />
                    Download CV
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href="#projects">
                    <Wrench />
                    View Projects
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#contact">
                    <Mail />
                    Contact Me
                  </a>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                Prefer email?{" "}
                <a className="text-primary underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto w-full max-w-sm lg:justify-self-end">
            <div className="relative rounded-[calc(var(--radius)+8px)] border border-border bg-background/60 p-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/45">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-1 ring-primary/15">
                  <Image
                    src="/images/profile.png"
                    alt={`${site.name} profile photo`}
                    fill
                    sizes="80px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold">{site.name}</div>
                  <div className="truncate text-sm text-muted-foreground">
                    {site.title}
                  </div>
                  <div className="mt-2 h-1 w-12 rounded-full bg-primary/25" />
                </div>
              </div>

              <div className="mt-6 grid gap-3 text-sm">
                <div className="flex items-center justify-between rounded-[calc(var(--radius)-2px)] bg-secondary/60 px-3 py-2">
                  <span className="text-muted-foreground">Focus</span>
                  <span className="font-medium">Sustainable Polymers</span>
                </div>
                <div className="flex items-center justify-between rounded-[calc(var(--radius)-2px)] bg-secondary/60 px-3 py-2">
                  <span className="text-muted-foreground">Interest</span>
                  <span className="font-medium">Elastomers & Rubber</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

