export function BackgroundBlobs() {
  return (
    <>
      {/* ─── Desktop blobs (lg+) ──────────────────────────────────── */}
      <div className="hidden lg:block" aria-hidden="true">
        {/* Left side — 3 stacked pills at bottom */}
        <div className="bg-pill -left-28 bottom-[290px] h-[88px] w-[280px] -rotate-[10deg]" />
        <div className="bg-pill -left-16 bottom-[180px] h-[88px] w-[300px]" />
        <div className="bg-pill -left-8 bottom-[70px] h-[88px] w-[480px]" />

        {/* Right side — 3 stacked pills at top */}
        <div className="bg-pill right-[-78px] top-[112px] h-[88px] w-[280px] rotate-[8deg]" />
        <div className="bg-pill right-[-45px] top-[224px] h-[88px] w-[400px]" />
        <div className="bg-pill right-[-24px] top-[334px] h-[88px] w-[300px]" />
      </div>

      {/* ─── Mobile/tablet blobs ──────────────────────────────────── */}
      <div className="block lg:hidden" aria-hidden="true">
        {/* Left side — small pills */}
        <div className="bg-pill -left-10 bottom-[150px] h-[36px] w-[75px] rotate-[170deg]" />
        <div className="bg-pill -left-6 bottom-[105px] h-[36px] w-[80px] rotate-[-180deg] rounded-tl-[90px] rounded-bl-[90px]" />
        <div className="bg-pill -left-2 bottom-[60px] h-[36px] w-[134px] rotate-[-180deg] rounded-tl-[90px] rounded-bl-[90px]" />

        {/* Right side — small pills */}
        <div className="bg-pill right-[-40px] top-[110px] h-[36px] w-[99px] rotate-[9deg] rounded-tl-[90px] rounded-bl-[90px]" />
        <div className="bg-pill right-[-25px] top-[155px] h-[36px] w-[143px] rounded-tl-[90px] rounded-bl-[90px]" />
        <div className="bg-pill right-[-15px] top-[200px] h-[36px] w-[86px] rounded-tl-[90px] rounded-bl-[90px]" />
      </div>
    </>
  );
}
