import Faq from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <main className="relative flex flex-col">
        <Header />
        <Hero />
        <Features />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
