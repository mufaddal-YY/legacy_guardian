import FaqCta from "@/components/FaqCta";
import Headaches from "@/components/Headaches";
import AboutSection from "@/components/Home/AboutSection";
import HeroBanner from "@/components/Home/HeroBanner";
import Process from "@/components/Home/Process";
import Services from "@/components/Home/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import {
  getHomeData,
  getTestimonialsData,
  getTeamData,
  getFaqData,
} from "@/sanity/sanity_utils";

export async function generateMetadata() {
  try {
    const homeData = await getHomeData();

    if (!homeData) {
      // Handle the case when shoppingData is undefined
      throw new Error("Failed to fetch homedata");
    }
    const data = homeData[0];

    return {
      title: data.metaTitle,
      description: data.metaDescription,
      keywords: data.metaKeywords,
    };
  } catch (error) {
    // Handle errors, log them, or return a default metadata in case of an error
    console.error("Error generating metadata:", error.message);
  }
}

export default async function Home() {
  const homeData = await getHomeData();
  const testimonialsData = await getTestimonialsData();
  const teamData = await getTeamData();
  const faqData = await getFaqData();

  return (
    <>
      <HeroBanner homeData={homeData} />

      <Services homeData={homeData} />

      <AboutSection homeData={homeData} />

      {/* <Headaches homeData={homeData} /> */}

      <Process homeData={homeData} />

      <Testimonials testimonialsData={testimonialsData} />

      <Team teamData={teamData} />

      <FaqCta faqs={faqData} />
    </>
  );
}
