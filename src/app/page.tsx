import AboutUs from "@/components/pages/AboutUs";
import ContactUs from "@/components/pages/ContactUs";
import Hero from "@/components/pages/Hero";
import PropertyShowcase from "@/components/pages/Propertie";
export default function HomePage() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <AboutUs />
      <PropertyShowcase />
      <ContactUs />
    </>
  );
}
