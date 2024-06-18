import AnimatedLogo3D from "./components/AnimatedLogo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AnimatedLogo3D hover={true} boost={true} />
    </main>
  );
}
