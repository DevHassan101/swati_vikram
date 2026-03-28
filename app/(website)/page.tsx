import WelcomePopup from "./components/WelcomePopup";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import ModelCards from "./components/ModelCards";
import BlogCards from "./components/BlogCards";
import Testimonials from "./components/Testimonial";
import FAQSection from "./components/Faqs";

export default async function Home() {

  return (
    <>
      <WelcomePopup />
      <HeroSection />
      <main className="site-bg">
        <AboutUs />
        <ModelCards />
        <BlogCards limit={4} />
        <Testimonials />
        <FAQSection />
      </main>
    </>
  );
}
