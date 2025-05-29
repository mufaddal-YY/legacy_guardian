import blog from "./schemas/blog";
import documents from "./schemas/documents";
import faqs from "./schemas/faqs";
import home from "./schemas/home";
import lease from "./schemas/lease";
import maintenance from "./schemas/maintenance";
import team from "./schemas/team";
import testimonials from "./schemas/testimonials";

export const schema = {
  types: [home, documents, lease, maintenance, testimonials, team, faqs, blog],
};
