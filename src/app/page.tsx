import AnimatedLogo3D from "./components/AnimatedLogo";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24
    bg-main-flower bg-blend-overlay bg-[length:100px_100px]  bg-repeat-space "  >
      <div className="bg-gradient-to-r  from-[#15bb4dfd]  shadow-black shadow-2xl w-[700px] rounded-br-sm  rounded-tl-lg rounded-full h-[400px] text-center  content-center">
        <Navbar />
      </div>

      {/* <AnimatedLogo3D hover={true} boost={true} /> */}
    </main>
  );
}
