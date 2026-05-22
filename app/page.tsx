import { HeroSection } from "@/components/HeroSection";
import { BackgroundBlobs } from "@/components/BackgroundBlobs";
import { DarkModeToggle } from "@/components/DarkModeToggle";

export default function Home() {
  return (
    <main className="relative min-h-0 overflow-x-hidden bg-[#f6f7fb] text-[#0f172a] dark:bg-[#0f1420] dark:text-[#e2e8f0] lg:min-h-screen">
      <BackgroundBlobs />
      <HeroSection />
      <div className="fixed bottom-6 right-6 z-50">
        <DarkModeToggle />
      </div>
    </main>
  );
}
