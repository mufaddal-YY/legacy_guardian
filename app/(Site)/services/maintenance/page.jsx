import MainContent from "@/components/Documentation/MainContent";
import FaqCta from "@/components/FaqCta";
import PageBanner from "@/components/PageBanner";
import ServicesDetails from "@/components/ServicesDetails";
import { maintenanceImg, maintenanceImg1 } from "@/lib/constants";
import { getFaqData, getMaintenanceData } from "@/sanity/sanity_utils";

const Maintenance = async () => {
  const faqData = await getFaqData();
  const maintenanceData = await getMaintenanceData();

  return (
    <>
      <PageBanner heading="Maintenance" />

      <section className="py-[50px] bg-white flex items-center justify-center">
        <div className="container">
          <div className="flex flex-col">
            <MainContent mainData={maintenanceData} />
            {maintenanceData.map((item) => (
              <div>
                {item.maintenanceServices.map((data) => (
                  <ServicesDetails
                    serviceTitle={data?.serviceTitle}
                    content={data?.content}
                  />
                ))}
              </div>
            ))}
            <div className="py-2 lg:py-12 w-full hidden md:flex lg:flex justify-center">
              {maintenanceImg}
            </div>

            <div className="w-full flex md:hidden lg:hidden justify-center ">
              {maintenanceImg1}
            </div>
          </div>
        </div>
      </section>

      <FaqCta faqs={faqData} />
    </>
  );
};

export default Maintenance;
