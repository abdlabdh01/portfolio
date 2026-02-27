import { Container } from "@/components/site/container";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-2 border-t border-primary/15 bg-primary text-primary-foreground">
      <Container className="flex flex-col gap-3 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-primary-foreground/80">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
        <div className="text-sm text-primary-foreground/80">
          Polymer industry portfolio • Next.js • TypeScript • Tailwind • Framer Motion
        </div>
      </Container>
    </footer>
  );
}

