import Event from "@/components/Event";
import HomeFirst from "@/components/HomeFirst";
import PastSpeakers from "@/components/PastSpeakers";
import dynamic from "next/dynamic";
const AnimatedText = dynamic(() => import("../components/HomeAbout"), {
  ssr: false,
});
export default function Home() {
  return (
    <>
      <HomeFirst />
      {/* <Event /> */}
      {/* <AnimatedText />
      <PastSpeakers /> */}
    </>
  );
}
