import Footer from "@/src/components/app/Footer";
import { Section1 } from "@/src/components/home/Section1";
import { Section2 } from "@/src/components/home/Section2";
import { Section3 } from "@/src/components/home/Section3";
import MainNav from "@/src/components/app/MainNav";

function HomePage() {
  return (
    <>
      <MainNav />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
