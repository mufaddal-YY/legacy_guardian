import FaqCta from '@/components/FaqCta'
import PageBanner from '@/components/PageBanner'
import { getBlogData, getFaqData } from '@/sanity/sanity_utils'

export default async function Blogs() {
    const faqData = await getFaqData();
    const blogData = await getBlogData()
  return (
    <>
      <PageBanner heading="Blogs" />
      
      <FaqCta faqs={faqData} />
    </>
  )
}
