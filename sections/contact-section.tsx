"use client";

import * as React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Github, Linkedin, Mail, Send } from "lucide-react";

import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { site, socials } from "@/lib/content";

const schema = z.object({
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(12, "Please write a slightly longer message (12+ characters)."),
});

type FormValues = z.infer<typeof schema>;

function SocialLink({
  href,
  label,
  icon: Icon,
  hint,
}: {
  href?: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  hint?: string;
}) {
  const disabled = !href;
  const content = (
    <span
      className={cn(
        "flex items-center gap-2 rounded-[calc(var(--radius)-2px)] border border-border px-3 py-2 text-sm transition-colors",
        disabled
          ? "cursor-not-allowed bg-secondary/30 text-muted-foreground"
          : "bg-background hover:bg-secondary/60",
      )}
      aria-disabled={disabled}
    >
      <Icon className="h-4 w-4 text-primary" />
      {label}
    </span>
  );

  if (disabled) {
    return hint ? (
      <Tooltip>
        <TooltipTrigger asChild>{content}</TooltipTrigger>
        <TooltipContent>{hint}</TooltipContent>
      </Tooltip>
    ) : (
      content
    );
  }

  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {content}
    </a>
  );
}

export function ContactSection() {
  const [status, setStatus] = React.useState<"idle" | "sent">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", message: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    const subject = encodeURIComponent(`Portfolio contact — ${site.name}`);
    const body = encodeURIComponent(
      `From: ${values.email}\n\nMessage:\n${values.message}\n`,
    );
    const mailto = `mailto:${site.email}?subject=${subject}&body=${body}`;

    setStatus("sent");
    reset();
    window.location.href = mailto;
  });

  return (
    <section id="contact" className="border-t border-border py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Contact"
          subtitle="Send a concise message. I’ll reply as soon as possible."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Card>
              <CardHeader>
                <CardTitle>Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={onSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      aria-invalid={!!errors.email}
                      {...register("email")}
                    />
                    {errors.email ? (
                      <p className="text-sm text-destructive" role="alert">
                        {errors.email.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Briefly describe your inquiry…"
                      aria-invalid={!!errors.message}
                      {...register("message")}
                    />
                    {errors.message ? (
                      <p className="text-sm text-destructive" role="alert">
                        {errors.message.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Button type="submit" disabled={isSubmitting}>
                      <Send />
                      {isSubmitting ? "Sending…" : "Send"}
                    </Button>
                    <p
                      className="text-sm text-muted-foreground"
                      aria-live="polite"
                    >
                      {status === "sent"
                        ? "Draft opened in your email client."
                        : `Or email me directly: ${site.email}`}
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.05}>
            <TooltipProvider>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between gap-3">
                      <span>Email</span>
                      <a
                        className="font-medium text-foreground underline-offset-4 hover:underline"
                        href={`mailto:${site.email}`}
                      >
                        {site.email}
                      </a>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span>Phone</span>
                      <a
                        className="font-medium text-foreground underline-offset-4 hover:underline"
                        href={`tel:${site.phone.replaceAll(" ", "")}`}
                      >
                        {site.phone}
                      </a>
                    </div>
                    <div className="h-px w-full bg-primary/10" />
                    <div className="text-xs">
                      Prefer LinkedIn/GitHub? Add your links in{" "}
                      <span className="font-mono">lib/content.ts</span>.
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-3">
                  <SocialLink
                    href={socials.linkedIn}
                    label="LinkedIn"
                    icon={Linkedin}
                    hint="Add your LinkedIn URL in lib/content.ts"
                  />
                  <SocialLink
                    href={socials.github}
                    label="GitHub"
                    icon={Github}
                    hint="Add your GitHub URL in lib/content.ts"
                  />
                  <SocialLink href={socials.email} label="Email" icon={Mail} />
                </div>
              </div>
            </TooltipProvider>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

