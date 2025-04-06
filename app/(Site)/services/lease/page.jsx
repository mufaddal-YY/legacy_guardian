import MainContent from "@/components/Documentation/MainContent";
import FaqCta from "@/components/FaqCta";
import PageBanner from "@/components/PageBanner";
import ServicesDetails from "@/components/ServicesDetails";
import { leaseImg, leaseImg1 } from "@/lib/constants";
import { getFaqData, getLeaseData } from "@/sanity/sanity_utils";

const Lease = async () => {
  const faqData = await getFaqData();
  const leaseData = await getLeaseData();

  return (
    <>
      <PageBanner heading="Lease" />

      <section className="py-[50px] bg-white flex items-center justify-center">
        <div className="container">
          <div className="flex flex-col">
            <MainContent mainData={leaseData} />
            {leaseData.map((item) => (
              <div>
                {item.leaseServices.map((data) => (
                  <ServicesDetails
                    serviceTitle={data?.serviceTitle}
                    content={data?.content}
                  />
                ))}
              </div>
            ))}
            <div className="py-2 lg:py-12 w-full hidden md:flex lg:flex justify-center">
              {leaseImg}
            </div>

            <div className="w-full flex md:hidden lg:hidden justify-center ">
              {leaseImg1}
            </div>
          </div>
        </div>
      </section>

      <FaqCta faqs={faqData} />
    </>
  );
};

export default Lease;
