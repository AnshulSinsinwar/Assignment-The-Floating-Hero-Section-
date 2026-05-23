"use client";

import {
  FloatingCard,
  MobileFloatingCard,
  PortalCard,
  MobilePortalCard,
  BillingIcon,
  MatterIcon,
  TaskIcon,
  DocumentIcon,
} from "./FloatingCard";

export function HeroSection() {
  return (
    <section className="relative mx-auto max-w-[1240px] px-4 pb-10 pt-6 sm:px-6 md:px-10 md:pt-8 lg:h-full lg:px-16 lg:pt-10">
      {/* ─── Left: Text Content ──────────────────────────────────── */}
      <div className="relative z-20 max-w-[580px] self-start fade-up enter-d1">
        {/* Heading */}
        <h1
          className="w-full max-w-[250px] text-left text-[28px] font-light leading-[1.08] tracking-[-0.03em] text-[#7377a8] dark:text-[#b3bce5] sm:w-auto sm:max-w-none sm:text-[43px] lg:text-[56px]"
          style={{ wordSpacing: "0.08em" }}
        >
          {/* Mobile layout */}
          <span className="sm:hidden">
            A single platform to<br />
            <span className="font-semibold text-[#6971aa] dark:text-white">manage</span> every part<br />
            of your <span className="font-semibold text-[#6971aa] dark:text-white">legal work</span>
          </span>
          {/* Desktop layout */}
          <span className="hidden sm:inline">
            A single platform to<br />
            <span className="font-semibold text-[#6971aa] dark:text-white">manage</span> every part of<br />
            your <span className="font-semibold text-[#6971aa] dark:text-white">legal work</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="mt-6 w-full max-w-[260px] text-left text-[16px] font-normal leading-[1.45] text-[#3955ff] dark:text-[#88a0ff] sm:w-[70%] sm:max-w-[460px] sm:text-[18px] lg:text-[19px]"
          style={{ wordSpacing: "0.06em" }}
        >
          Track matters, coordinate schedules, manage clients, centralize documents, and handle communication - all in one system.
        </p>

        {/* ─── Mobile floating cards (visible < lg) ──────────────── */}
        <div className="relative mt-8 w-full max-w-[360px] lg:hidden" style={{ height: "260px" }}>
          <div
            className="relative h-[260px] w-[360px]"
            style={{ transform: "scale(1)", transformOrigin: "top left" }}
          >
            {/* Billing — top right */}
            <MobileFloatingCard
              color="blue"
              rotation={10.2}
              icon={<BillingIcon size={24} />}
              iconRotation={-12}
              label="Billing"
              floatClass="float-mid"
              enterDelay="enter-d1"
              className="absolute right-1 top-2"
              width="166px"
            />

            {/* Matters — top left */}
            <MobileFloatingCard
              color="orange"
              rotation={-10.2}
              icon={<MatterIcon size={24} />}
              iconRotation={12}
              label="Matters"
              floatClass="float-slow"
              enterDelay="enter-d2"
              className="absolute left-[6px] top-[10px]"
              width="151px"
            />

            {/* Portal — center */}
            <MobilePortalCard
              name="John Doe - Portal"
              matter="MAT-2233"
              time="2 h ago"
              rotation={5.5}
              floatClass="float-slow"
              enterDelay="enter-d3"
              className="absolute left-[111px] top-[80px]"
              width="300px"
            />

            {/* Tasks — bottom left */}
            <MobileFloatingCard
              color="dark"
              rotation={11.3}
              icon={<TaskIcon size={24} />}
              iconRotation={-13.31}
              label="Tasks"
              floatClass="float-mid"
              enterDelay="enter-d4"
              className="absolute left-[36px] top-[130px]"
              width="166px"
            />

            {/* Documents — bottom right */}
            <MobileFloatingCard
              color="dark"
              rotation={-5.7}
              icon={<DocumentIcon size={24} />}
              iconRotation={6.73}
              label="Documents"
              floatClass="float-mid"
              enterDelay="enter-d5"
              className="absolute left-[145px] top-[190px]"
              width="201px"
            />
          </div>
        </div>
      </div>

      {/* ─── Desktop floating cards (lg+) ────────────────────────── */}
      <div className="absolute inset-0 z-10 hidden lg:block">
        {/* Billing — top right area, tilted right */}
        <FloatingCard
          color="blue"
          rotation={9.35}
          icon={<BillingIcon size={64} />}
          iconRotation={-11}
          label="Billing"
          floatClass="float-mid"
          enterDelay="enter-d1"
          className="absolute right-[160px] top-[290px]"
          width="430px"
        />

        {/* Matters — left-center, tilted left */}
        <FloatingCard
          color="orange"
          rotation={-9.35}
          icon={<MatterIcon size={64} />}
          iconRotation={11}
          label="Matters"
          floatClass="float-slow"
          enterDelay="enter-d2"
          className="absolute left-[240px] top-[430px]"
          width="360px"
        />

        {/* John Doe - Portal — center right */}
        <PortalCard
          name="John Doe - Portal"
          message="Hey! Could you please review a document for me?"
          matter="MAT-2233"
          time="2 h ago"
          rotation={3.4}
          floatClass="float-slow"
          enterDelay="enter-d3"
          className="absolute left-[620px] top-[430px]"
          width="390px"
        />

        {/* Tasks — bottom center */}
        <FloatingCard
          color="dark"
          rotation={0}
          icon={<TaskIcon size={64} />}
          label="Tasks"
          floatClass="float-mid"
          enterDelay="enter-d4"
          className="absolute left-[calc(50%-180px)] top-[572px]"
          width="360px"
        />

        {/* Documents — bottom right */}
        <FloatingCard
          color="dark"
          rotation={-6.8}
          icon={<DocumentIcon size={64} />}
          iconRotation={8}
          label="Documents"
          floatClass="float-mid"
          enterDelay="enter-d5"
          className="absolute right-[-82px] top-[540px]"
          width="480px"
        />
      </div>
    </section>
  );
}
