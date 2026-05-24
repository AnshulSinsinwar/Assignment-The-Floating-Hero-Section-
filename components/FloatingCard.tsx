"use client";

import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

// ─── Color presets (from reference site source) ──────────────────
const colorMap = {
  blue: {
    bg: "bg-[#2f46ff]",
    labelColor: "text-white",
    shadow: "shadow-[0_14px_32px_rgba(47,70,255,0.28)]",
  },
  orange: {
    bg: "bg-[#e67e2b]",
    labelColor: "text-white",
    shadow: "shadow-[0_14px_32px_rgba(230,126,43,0.28)]",
  },
  dark: {
    bg: "bg-[#2f254d]",
    labelColor: "text-[#f08c2b]",
    shadow: "shadow-[0_14px_32px_rgba(47,37,77,0.35)]",
  },
  lavender: {
    bg: "bg-[#9ea6ef]",
    labelColor: "text-[#0c144b]",
    shadow: "shadow-[0_14px_32px_rgba(106,123,214,0.30)]",
  },
} as const;

export type CardColor = keyof typeof colorMap;

// ─── Icon SVGs matching the reference site ───────────────────────
export function BillingIcon({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="8" width="32" height="48" rx="6" stroke="white" strokeWidth="3" fill="none" />
      <rect x="22" y="16" width="20" height="4" rx="2" fill="white" opacity="0.6" />
      <rect x="22" y="24" width="14" height="4" rx="2" fill="white" opacity="0.6" />
      <rect x="22" y="32" width="20" height="4" rx="2" fill="white" opacity="0.6" />
      <rect x="22" y="40" width="10" height="4" rx="2" fill="white" opacity="0.6" />
      <path d="M38 44l4-4M38 40l4 4" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function MatterIcon({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="12" width="40" height="40" rx="8" stroke="white" strokeWidth="3" fill="none" />
      <path d="M24 32l-4-8h8l4 8h-8z" fill="white" opacity="0.5" />
      <path d="M32 32l4-8h-8" stroke="white" strokeWidth="2" fill="none" />
      <path d="M20 40h24" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M32 20v-4M28 22l-2-3M36 22l2-3" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function TaskIcon({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="12" width="40" height="40" rx="8" stroke="#f08c2b" strokeWidth="3" fill="none" />
      <path d="M22 30l6 6 14-14" stroke="#f08c2b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="22" y1="44" x2="42" y2="44" stroke="#f08c2b" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="22" y1="48" x2="34" y2="48" stroke="#f08c2b" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function DocumentIcon({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 14a6 6 0 016-6h14l12 12v30a6 6 0 01-6 6H22a6 6 0 01-6-6V14z" stroke="#f08c2b" strokeWidth="3" fill="none" />
      <path d="M36 8v12h12" stroke="#f08c2b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="24" y="28" width="16" height="3" rx="1.5" fill="#f08c2b" opacity="0.5" />
      <rect x="24" y="35" width="12" height="3" rx="1.5" fill="#f08c2b" opacity="0.5" />
      <rect x="24" y="42" width="16" height="3" rx="1.5" fill="#f08c2b" opacity="0.5" />
    </svg>
  );
}

// ─── Avatar SVG (inline, no external file needed) ────────────────
export function AvatarSvg({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="20" r="10" fill="#8B6A3E" />
      <ellipse cx="28" cy="52" rx="18" ry="14" fill="#8B6A3E" />
      <circle cx="28" cy="20" r="8" fill="#C49A6C" />
      <ellipse cx="28" cy="50" rx="15" ry="12" fill="#C49A6C" />
    </svg>
  );
}

// ─── Base floating pill card ─────────────────────────────────────
interface FloatingCardProps {
  color: CardColor;
  rotation: number;
  icon: ReactNode;
  label: string;
  iconRotation?: number;
  floatClass?: string;
  enterDelay?: string;
  className?: string;
  /** Desktop width override */
  width?: string;
  /** Size variant */
  desktopLabelSize?: string;
}

export function FloatingCard({
  color,
  rotation,
  icon,
  label,
  iconRotation = 0,
  floatClass = "float-mid",
  enterDelay = "enter-d1",
  className,
  width,
  desktopLabelSize = "text-[26px]",
}: FloatingCardProps) {
  const styles = colorMap[color];

  return (
    <div
      className={cn("absolute", floatClass, className)}
      style={{
        rotate: `${rotation}deg`,
        width: width,
        zIndex: 10,
      }}
    >
      <div
        className={cn(
          "card-base card-hover card-enter w-full",
          styles.bg,
          styles.shadow,
          enterDelay
        )}
        style={{
          gap: "12px",
        }}
      >
        {/* Icon with counter-rotation */}
        <span
          className="shrink-0 self-center -mr-2 flex h-20 w-20 items-center justify-start overflow-visible"
          style={{ transform: iconRotation ? `rotate(${iconRotation}deg)` : undefined }}
        >
          {icon}
        </span>

        {/* Label */}
        <span className={cn("font-normal tracking-tight", styles.labelColor, desktopLabelSize)}>
          {label}
        </span>
      </div>
    </div>
  );
}

// ─── Mobile pill card (smaller) ──────────────────────────────────
interface MobileFloatingCardProps {
  color: CardColor;
  rotation: number;
  icon: ReactNode;
  label: string;
  iconRotation?: number;
  floatClass?: string;
  enterDelay?: string;
  className?: string;
  width?: string;
}

export function MobileFloatingCard({
  color,
  rotation,
  icon,
  label,
  iconRotation = 0,
  floatClass = "float-mid",
  enterDelay = "enter-d1",
  className,
  width,
}: MobileFloatingCardProps) {
  const styles = colorMap[color];

  return (
    <div
      className={cn("absolute", floatClass, className)}
      style={{
        rotate: `${rotation}deg`,
        width: width,
        zIndex: 10,
      }}
    >
      <div
        className={cn(
          "card-enter flex items-center h-11.5! rounded-[100px]! px-4 py-2.5 cursor-pointer card-hover w-full",
          styles.bg,
          styles.shadow,
          enterDelay
        )}
        style={{
          gap: "2px",
        }}
      >
        <span
          className="shrink-0 self-center -mr-2 flex h-9 w-9 items-center justify-start overflow-visible"
          style={{ transform: iconRotation ? `rotate(${iconRotation}deg)` : undefined }}
        >
          {icon}
        </span>
        <span className={cn("text-[18px] font-normal tracking-tight", styles.labelColor)}>
          {label}
        </span>
      </div>
    </div>
  );
}

// ─── Portal / message card variant ───────────────────────────────
interface PortalCardProps {
  name: string;
  message?: string;
  matter: string;
  time: string;
  rotation: number;
  floatClass?: string;
  enterDelay?: string;
  className?: string;
  width?: string;
}

export function PortalCard({
  name,
  message,
  matter,
  time,
  rotation,
  floatClass = "float-slow",
  enterDelay = "enter-d3",
  className,
  width,
}: PortalCardProps) {
  return (
    <div
      className={cn("absolute", floatClass, className)}
      style={{
        rotate: `${rotation}deg`,
        width: width,
        zIndex: 10,
      }}
    >
      <div
        className={cn(
          "card-base card-hover card-enter w-full",
          "bg-[#9ea6ef] shadow-[0_14px_32px_rgba(106,123,214,0.30)]",
          "pl-10! overflow-hidden",
          enterDelay
        )}
        style={{
          gap: "8px",
        }}
      >
        {/* Orange accent bar */}
        <div className="h-11 w-1 rounded-full bg-[#eb7a24]" />

        {/* Avatar */}
        <div className="grid h-11 w-11 place-items-center rounded-full bg-[#f4c8ab] shrink-0">
          <AvatarSvg size={28} />
        </div>

        {/* Text block */}
        <div className="min-w-0 ml-2">
          <p className="truncate text-[16px] font-normal leading-none text-[#0c144b]">
            {name}
          </p>
          {message && (
            <p
              className="mt-1 max-w-45 text-[11px] leading-tight text-[#797DA7]"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
              }}
            >
              {message}
            </p>
          )}
          <p className="mt-1 truncate text-[11px] leading-none text-[#6a77bc]">
            {matter} - {time}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile Portal card variant ──────────────────────────────────
export function MobilePortalCard({
  name,
  matter,
  time,
  rotation,
  floatClass = "float-slow",
  enterDelay = "enter-d3",
  className,
  width,
}: Omit<PortalCardProps, "message">) {
  return (
    <div
      className={cn("absolute", floatClass, className)}
      style={{
        rotate: `${rotation}deg`,
        width: width,
        zIndex: 10,
      }}
    >
      <div
        className={cn(
          "card-enter flex items-center h-11.5! rounded-[90px]! overflow-hidden px-3.5! cursor-pointer card-hover w-full",
          "bg-[#9ea6ef] shadow-[0_14px_32px_rgba(106,123,214,0.30)]",
          enterDelay
        )}
        style={{
          gap: "10px",
        }}
      >
        {/* Orange accent bar */}
        <div className="h-6 w-1 rounded-full bg-[#eb7a24] shrink-0" />

        {/* Avatar */}
        <div className="grid h-6 w-6 place-items-center rounded-full bg-[#f4c8ab] shrink-0">
          <AvatarSvg size={16} />
        </div>

        {/* Title only */}
        <div className="min-w-0">
          <p className="truncate text-[14px] font-normal leading-none text-[#0c144b]">
            {name}
          </p>
          <p className="mt-0.5 truncate text-[10px] leading-none text-[#6a77bc]">
            {matter} - {time}
          </p>
        </div>
      </div>
    </div>
  );
}
