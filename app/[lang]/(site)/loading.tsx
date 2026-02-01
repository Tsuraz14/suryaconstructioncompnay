export default function Loading() {
  return (
    <div className="container py-16">
      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border border-border bg-muted animate-pulse" />
            <div className="h-3 w-40 rounded-full bg-muted animate-pulse" />
          </div>
          <div className="space-y-3">
            <div className="h-8 w-3/4 rounded-2xl bg-muted animate-pulse" />
            <div className="h-8 w-2/3 rounded-2xl bg-muted animate-pulse" />
          </div>
          <div className="h-4 w-full rounded-full bg-muted animate-pulse" />
          <div className="flex gap-3">
            <div className="h-10 w-40 rounded-full bg-muted animate-pulse" />
            <div className="h-10 w-36 rounded-full bg-muted animate-pulse" />
          </div>
        </div>
        <div className="grid gap-4 rounded-3xl border border-border bg-card p-6">
          <div className="h-20 rounded-2xl bg-muted animate-pulse" />
          <div className="h-20 rounded-2xl bg-muted animate-pulse" />
          <div className="h-20 rounded-2xl bg-muted animate-pulse" />
        </div>
      </div>
    </div>
  );
}
