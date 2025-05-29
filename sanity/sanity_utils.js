import { groq } from "next-sanity";
import { client } from "./lib/client";

const defaultFetchOptions = { cache: "no-cache" };

export async function getHomeData() {
  const result = await client.fetch(
    groq`*[_type == "home"]{
        _id,
        _createdAt,
       metaTitle,
       metaDescription,
       metaKeywords,
       headline,
       subHeadline,
       problemSlider[]{
        caption,
        "sliderImage": sliderImage.asset->url,
       },
       serviceHeadline,
       serviceSub,
       services[]{
        serviceTitle,
        path,
        "icon": icon.asset->url,
        serviceDescription[]{text},
       },
       aboutHeader,
       aboutDesc,
       stats[]{
        statCaption,
        statNumber,
       },
       "aboutImage": aboutImage.asset->url,
       
        headacheTitle,
        headacheDescription,
        headacheIcon[]{
        "icon": icon.asset->url,
        caption,
        },
      
       process[]{
        title,
        description,
        "icon": icon.asset->url,
       },
       "processImage": processImage.asset->url,
      }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getTestimonialsData() {
  const result = await client.fetch(
    groq`*[_type == "testimonials"]{
        _id,
        _createdAt,
        reviews[]{
        name,
        designation,
        description,
        },
      }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getTeamData() {
  const result = await client.fetch(
    groq`*[_type == "team"]{
        _id,
        _createdAt,
        name,
        designation,
        "image": image.asset->url,
        linkedin,
      }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getDocumentationData() {
  const result = await client.fetch(
    groq`*[_type == "documentation"]{
        _id,
        _createdAt,
        metaTitle,
        metaDescription,
        metaKeywords,
        docuContent,
        docuServices[]{
        serviceTitle,
        content,
        },
      }`,
    {},
    defaultFetchOptions
  );
  return result;
}
export async function getLeaseData() {
  const result = await client.fetch(
    groq`*[_type == "lease"]{
        _id,
        _createdAt,
        metaTitle,
        metaDescription,
        metaKeywords,
        docuContent,
        leaseServices[]{
        serviceTitle,
        content,
        },
      }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getMaintenanceData() {
  const result = await client.fetch(
    groq`*[_type == "maintenance"]{
        _id,
        _createdAt,
        metaTitle,
        metaDescription,
        metaKeywords,
        docuContent,
        maintenanceServices[]{
        serviceTitle,
        content,
        },
      }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getFaqData() {
  const result = await client.fetch(
    groq`*[_type == "faqs"]{
        _id,
        _createdAt,
        metaTitle,
        metaDescription,
        metaKeywords,
        faqType[]{
        title,
        questions[]{
          question,
          answer,
        },
        },       
      }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getBlogData() {
  const result = await client.fetch(
    groq`*[_type == "blog"] | order(publishedAt desc){
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      publishedAt,
      metaTitle,
      metaDescription,
      metaKeywords,
      excerpt,
      "mainImage": mainImage.asset->url,
      author,
    }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getBlogDetailData(slug) {
  const result = await client.fetch(
    groq`*[_type == "blogs" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      publishedAt,
      metaTitle,
      metaDescription,
      metaKeywords,
      excerpt,
      "mainImage": mainImage.asset->url,
      author,
      content[]{
        ...,
        _type == "image" => {
          "asset": asset->url
        }
      }
    }`,
    {},
    { slug, defaultFetchOptions }
  );
  return result;
}
