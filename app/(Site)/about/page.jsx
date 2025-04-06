import PageBanner from "@/components/PageBanner";
import WhoWeAre from "@/components/About/WhoWeAre";
import Team from "@/components/Team";
import {
  getTestimonialsData,
  getTeamData,
  getFaqData,
} from "@/sanity/sanity_utils";
import WhyUs from "@/components/About/WhyUs";
import Testimonials from "@/components/Testimonials";
import FaqCta from "@/components/FaqCta";

const About = async () => {
  const testimonialsData = await getTestimonialsData();
  const teamData = await getTeamData();
  const faqData = await getFaqData();

  return (
    <>
      <PageBanner heading="About Us" />
      <WhoWeAre />
      <WhyUs />
      <Testimonials testimonialsData={testimonialsData} />
      <Team teamData={teamData} />
      <FaqCta faqs={faqData} />
    </>
  );
};

export default About;
