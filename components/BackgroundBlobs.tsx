export function BackgroundBlobs() {
  return (
    <>
      {/* ─── Desktop blobs (lg+) ──────────────────────────────────── */}
      <div className="hidden lg:block" aria-hidden="true">
        {/* Left side — 3 stacked pills at bottom */}
        <div className="bg-pill -left-28 bottom-72.5 h-22 w-70 rotate-[-10deg]" />
        <div className="bg-pill -left-16 bottom-45 h-22 w-75" />
        <div className="bg-pill -left-8 bottom-17.5 h-22 w-120" />

        {/* Right side — 3 stacked pills at top */}
        <div className="bg-pill -right-19.5 top-28 h-22 w-70 rotate-[8deg]" />
        <div className="bg-pill -right-11.5 top-56 h-22 w-100" />
        <div className="bg-pill -right-6 top-83.5 h-22 w-75" />
      </div>

      {/* ─── Mobile/tablet blobs ──────────────────────────────────── */}
      <div className="block lg:hidden" aria-hidden="true">
        {/* Left side — small pills */}
        <div className="bg-pill -left-10 bottom-37.5 h-9 w-18.75 rotate-[-10deg]" />
        <div className="bg-pill -left-6 bottom-26.25 h-9 w-20 rounded-tl-[90px] rounded-bl-[90px]" />
        <div className="bg-pill -left-2 bottom-15 h-9 w-33.5 rounded-tl-[90px] rounded-bl-[90px]" />

        {/* Right side — small pills */}
        <div className="bg-pill -right-10 top-27.5 h-9 w-24.75 rotate-[10deg] rounded-tl-[90px] rounded-bl-[90px]" />
        <div className="bg-pill right-6.25 top-38.75 h-9 w-35.75 rounded-tl-[90] rounded-bl-[90]" />
        <div className="bg-pill -right-3.75 top-50 h-9 w-21.5 rounded-tl-[90] rounded-bl-[90]" />
      </div>
    </>
  );
}
