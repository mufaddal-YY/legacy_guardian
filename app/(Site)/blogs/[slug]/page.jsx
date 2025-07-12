import BlogDetailSection from "@/components/Blogs/BlogDetailSection";
import FaqCta from "@/components/FaqCta";
import PageBanner from "@/components/PageBanner";
import { getBlogData, getBlogDetailData, getFaqData } from "@/sanity/sanity_utils";

export default async function BlogDetail({ params }) {
  const { slug } = await params; // Await params here
  const blogDetail = await getBlogDetailData(slug);
  const blogData = await getBlogData();
  const faqData = await getFaqData();

  return (
    <>
      <PageBanner heading={blogDetail?.title} />
      <BlogDetailSection blogData={blogData} blogDetail={blogDetail} />
      <FaqCta faqs={faqData} />
    </>
  );
}
