import { createFileRoute } from "@tanstack/react-router";
import { XalientLogo } from "@/components/XalientLogo";

const CALENDLY = "https://calendly.com/xalient1/30min";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Xalient — Custom AI Agents for Law & Professional Firms" },
      {
        name: "description",
        content:
          "Xalient builds custom AI agents for law firms, accounting practices and consulting teams — intake triage, document review and client comms, deployed in weeks.",
      },
      {
        property: "og:title",
        content: "Xalient — Custom AI Agents for Law & Professional Firms",
      },
      {
        property: "og:description",
        content:
          "Custom AI agents for legal and professional services firms. Deployed in weeks, not quarters.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function BookCall({
  variant = "gold",
  className = "",
}: {
  variant?: "gold" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold tracking-wide uppercase transition-colors rounded-sm";
  const styles =
    variant === "gold"
      ? "bg-accent text-accent-foreground hover:bg-accent/85"
      : "border border-primary/25 text-primary hover:bg-primary hover:text-primary-foreground";
  return (
    <a href={CALENDLY} className={`${base} ${styles} ${className}`}>
      Book a call
    </a>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="rule-gold" />
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {children}
      </span>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <XalientLogo />
          <a
            href={CALENDLY}
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Book a call
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
            <h1 className="max-w-3xl text-4xl leading-[1.08] md:text-6xl">
              Your firm's busywork, handled by AI that actually understands your
              workflow.
            </h1>
            <p className="mt-7 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Xalient builds custom AI agents for law firms and professional
              services teams — deployed in weeks, not quarters.
            </p>
            <div className="mt-10">
              <BookCall />
            </div>
          </div>
        </section>

        {/* Who we work with */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <SectionLabel>Who we work with</SectionLabel>
            <h2 className="max-w-2xl text-2xl md:text-3xl">
              Firms where the bottleneck is billable time, not headcount.
            </h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {[
                {
                  t: "Law firms",
                  d: "Litigation, corporate and boutique practices drowning in intake, discovery and contract volume that partners shouldn't be touching.",
                },
                {
                  t: "Accounting & tax practices",
                  d: "Teams running the same document chase and client follow-up cycle every quarter, with a hard deadline they can't move.",
                },
                {
                  t: "Consulting firms",
                  d: "Advisory teams whose analysts spend more hours formatting, summarising and chasing status than advising.",
                },
              ].map((x) => (
                <div key={x.t} className="border-t-2 border-accent pt-5">
                  <h3 className="text-lg">{x.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {x.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we build */}
        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <SectionLabel>What we build</SectionLabel>
            <h2 className="max-w-2xl text-2xl md:text-3xl">
              Agents scoped to one job, built against your actual files.
            </h2>
            <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
              {[
                {
                  n: "01",
                  t: "Intake Triage Agent",
                  d: "Screens and routes new client inquiries automatically, and flags high-priority leads before they go cold.",
                },
                {
                  n: "02",
                  t: "Document Review Agent",
                  d: "Extracts key terms and flags risks across contracts and case files, with citations back to the source clause.",
                },
                {
                  n: "03",
                  t: "Client Comms Agent",
                  d: "Drafts status updates and follow-ups so associates stop writing the same email twice.",
                },
              ].map((x) => (
                <div key={x.t} className="bg-card p-8">
                  <span className="font-display text-sm text-accent">{x.n}</span>
                  <h3 className="mt-4 text-lg">{x.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {x.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="border-b border-border bg-primary text-primary-foreground">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="mb-5 flex items-center gap-3">
              <span className="rule-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
                Proof
              </span>
            </div>
            <div className="grid gap-10 md:grid-cols-2">
              {[
                {
                  q: "Cut new-client intake response time from 3 days to 4 hours",
                  a: "[Firm Name Withheld], mid-size law firm",
                },
                {
                  q: "Saved 12 associate-hours per week on contract review",
                  a: "[Firm Name Withheld], corporate legal team",
                },
              ].map((x) => (
                <div key={x.a}>
                  <p className="font-display text-2xl leading-snug md:text-3xl">
                    {x.q}
                  </p>
                  <p className="mt-4 text-sm text-primary-foreground/60">{x.a}</p>
                </div>
              ))}
            </div>
            <blockquote className="mt-14 border-l-2 border-accent pl-6">
              <p className="max-w-3xl text-lg leading-relaxed md:text-xl">
                "Xalient's agent handles the first-pass review our juniors used to
                dread. It paid for itself in the first month."
              </p>
              <footer className="mt-4 text-sm text-primary-foreground/60">
                Managing Partner, regional law firm
              </footer>
            </blockquote>
            <div className="mt-12">
              <a
                href={CALENDLY}
                className="inline-flex items-center justify-center rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/85"
              >
                Book a call
              </a>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <SectionLabel>How it works</SectionLabel>
            <h2 className="max-w-2xl text-2xl md:text-3xl">
              Three steps. Weeks, not quarters.
            </h2>
            <ol className="mt-12 space-y-10">
              {[
                {
                  n: "1",
                  t: "A 20-minute call to map your workflow",
                  d: "We walk the process you want handled, end to end, and tell you straight whether an agent is the right fit.",
                },
                {
                  n: "2",
                  t: "We build and test against real cases",
                  d: "Your agent is built on your documents, your matter types and your escalation rules — then measured against work you've already done.",
                },
                {
                  n: "3",
                  t: "It goes live with your team",
                  d: "Deployed into your day-to-day, then refined over the first 30 days as your team pushes real volume through it.",
                },
              ].map((x) => (
                <li key={x.n} className="flex gap-6 border-t border-border pt-8">
                  <span className="font-display text-3xl text-accent">{x.n}</span>
                  <div>
                    <h3 className="text-lg">{x.t}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {x.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-24 text-center">
            <h2 className="mx-auto max-w-2xl text-3xl md:text-4xl">
              Bring one process. We'll tell you in 20 minutes if it's worth
              automating.
            </h2>
            <div className="mt-9 flex justify-center">
              <BookCall />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <XalientLogo tone="light" />
          <div className="flex items-center gap-6">
            <a
              href="mailto:ar@xalient.us"
              className="text-sm text-primary-foreground/75 underline-offset-4 hover:underline"
            >
              ar@xalient.us
            </a>
            <a
              href={CALENDLY}
              className="text-sm font-semibold uppercase tracking-wide text-accent underline-offset-4 hover:underline"
            >
              Book a call
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
