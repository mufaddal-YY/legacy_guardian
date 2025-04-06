import MainContent from "@/components/Documentation/MainContent";
import FaqCta from "@/components/FaqCta";
import PageBanner from "@/components/PageBanner";
import ServicesDetails from "@/components/ServicesDetails";
import { docus, docus1 } from "@/lib/constants";
import { getDocumentationData, getFaqData } from "@/sanity/sanity_utils";

const documentations = async () => {
  const faqData = await getFaqData();
  const docuData = await getDocumentationData();

  return (
    <>
      <PageBanner heading="Documentations" />

      <section className="py-[50px] bg-white flex items-center justify-center">
        <div className="container">
          <div className="flex flex-col">
            <MainContent mainData={docuData} />
            {docuData.map((item) => (
              <div>
                {item.docuServices.map((data) => (
                  <ServicesDetails
                    serviceTitle={data?.serviceTitle}
                    content={data?.content}
                  />
                ))}
              </div>
            ))}

            <div className="py-2 lg:py-12 w-full hidden md:flex lg:flex justify-center">
              {docus}
            </div>

            <div className="w-full flex md:hidden lg:hidden justify-center ">
              {docus1}
            </div>
          </div>
        </div>
      </section>

      <FaqCta faqs={faqData} />
    </>
  );
};

export default documentations;
