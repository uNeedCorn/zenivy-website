import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Waitlist } from "@/components/sections/Waitlist";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Waitlist />
      <Footer />
    </main>
  );
}
