import AnimatedLogo3D from "./components/AnimatedLogo";
import ThreeScene from "./components/ThreeScene";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AnimatedLogo3D hover={false} boost={false} />
      {/* <ThreeScene hover={false} boost={false} /> */}
    </main>
  );
}
