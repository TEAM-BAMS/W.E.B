import Banner3 from "@/components/shared/Banner";
import Footer from "@/components/shared/Footer";
import { Translator } from "@/components/shared/translator";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      <Footer />
      <Image src="/ai.webp" alt="AI" width={500} height={500} className="w-16 z-10 h-12 absolute top-2 left-5" />
      <Banner3 />
      <Translator />
    </main>
  );
}
