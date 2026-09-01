import dynamic from "next/dynamic";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

const CoverParticles = dynamic(() => import("@/components/cover-particles").then((mod) => ({ default: mod.CoverParticles })), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}
