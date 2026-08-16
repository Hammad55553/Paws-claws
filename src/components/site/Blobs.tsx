export function Blobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-blob absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand/20 blur-3xl" />
      <div
        className="animate-blob absolute -right-20 top-32 h-96 w-96 rounded-full bg-ocean/20 blur-3xl"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="animate-blob absolute bottom-[-6rem] left-1/3 h-72 w-72 rounded-full bg-brand/15 blur-3xl"
        style={{ animationDelay: "-12s" }}
      />
    </div>
  );
}
