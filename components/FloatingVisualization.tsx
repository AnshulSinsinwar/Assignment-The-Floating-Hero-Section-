"use client";

import {
  Receipt,
  Home,
  CheckSquare,
  FileText,
  Calendar,
  Users,
} from "lucide-react";
import { FloatingCard, PortalCard } from "./FloatingCard";

export function FloatingVisualization() {
  return (
    <div className="relative w-full h-[480px] md:h-[560px] flex-shrink-0">
      {/* Billing — top center-right, tilted right */}
      <FloatingCard
        color="blue"
        rotation={-8}
        icon={Receipt}
        label="Billing"
        floatClass="float-card-1"
        delay={0.55}
        className="top-[20px] right-[30px] md:right-[40px] z-20"
      />

      {/* Matters — left-center, tilted left */}
      <FloatingCard
        color="orange"
        rotation={12}
        icon={Home}
        label="Matters"
        floatClass="float-card-2"
        delay={0.65}
        className="top-[130px] left-[10px] md:left-[30px] z-20"
      />

      {/* Portal message card — center */}
      <PortalCard
        name="John Doe · Portal"
        message="Hey! Could you please review a document for me?"
        matter="MAT-2233"
        time="2 h ago"
        rotation={-3}
        floatClass="float-card-3"
        delay={0.75}
        className="top-[150px] right-[60px] md:right-[90px] z-30"
      />

      {/* Tasks — bottom center-left */}
      <FloatingCard
        color="dark"
        rotation={-5}
        icon={CheckSquare}
        label="Tasks"
        floatClass="float-card-4"
        delay={0.85}
        className="bottom-[90px] left-[60px] md:left-[80px] z-20"
      />

      {/* Documents — bottom right */}
      <FloatingCard
        color="dark"
        rotation={8}
        icon={FileText}
        label="Documents"
        floatClass="float-card-5"
        delay={0.95}
        className="bottom-[70px] right-[10px] md:right-[20px] z-20"
      />

      {/* Bonus: Calendar pill */}
      <FloatingCard
        color="blue"
        rotation={-12}
        icon={Calendar}
        label="Schedule"
        floatClass="float-card-2"
        delay={1.05}
        className="top-[40px] left-[100px] md:left-[130px] z-10 opacity-75 scale-90"
      />

      {/* Bonus: Clients pill */}
      <FloatingCard
        color="orange"
        rotation={6}
        icon={Users}
        label="Clients"
        floatClass="float-card-1"
        delay={1.15}
        className="bottom-[180px] right-[10px] z-10 opacity-70 scale-90"
      />
    </div>
  );
}
