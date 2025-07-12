import BlogCard from '@/components/Blogs/BlogCard';
import FaqCta from '@/components/FaqCta'
import PageBanner from '@/components/PageBanner'
import { getBlogData, getFaqData } from '@/sanity/sanity_utils'

export default async function Blogs() {
    const faqData = await getFaqData();
    const blogData = await getBlogData()
  return (
    <>
      <PageBanner heading="Blogs" />
      <article className="py-[50px] container">
        <div className="flex flex-col lg:flex-row flex-wrap">
          {blogData.map((item, idx) => (
            <div className="w-full lg:w-1/3 p-2" key={idx}>
              <BlogCard
                mainImage={item?.mainImage}
                title={item?.title}
                slug={item?.slug}
                excerpt={item?.excerpt}
              />
            </div>
          ))}
        </div>
      </article>
      
      <FaqCta faqs={faqData} />
    </>
  )
}
