



import Image from "next/image";
import Hero from "./HomeCompo/FixedCompo/Hero";
import HeroSlider from "./HomeCompo/FixedCompo/HeroSlider";
import HomeProvider from "./Redux/HomeProvider";
import Header from "./H&F/Header";
import Curtain from "../(dashboardlayout)/about/Componenets/Shared/Curtain";
import HomePage from "./HomeCompo/FixedCompo/Login";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <HomeProvider>
        <HomePage></HomePage>
          <Header></Header>
          <Curtain></Curtain>
        <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10">
          <HeroSlider />
          <Hero></Hero>
        </section>

      </HomeProvider>
    </main>
  );
}
