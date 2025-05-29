import FaqCta from "@/components/FaqCta";
import PageBanner from "@/components/PageBanner";
import { getBlogDetailData, getFaqData } from "@/sanity/sanity_utils";

export default async function BlogDetail({ params }) {
  const { slug } = await params; // Await params here
  const blogDetail = await getBlogDetailData(slug);
  const faqData = await getFaqData();

  return (
    <>
      <PageBanner heading={blogDetail?.title} />

      <FaqCta faqs={faqData} />
    </>
  );
}
