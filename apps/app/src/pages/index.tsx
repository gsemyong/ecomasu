import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <main className="relative flex flex-col">
        <Header />
        <Hero />
        <Features />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
