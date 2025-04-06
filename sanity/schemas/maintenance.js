export default {
  name: "maintenance",
  title: "Maintenance",
  type: "document",
  fields: [
    {
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "string",
    },
    {
      name: "metaKeywords",
      title: "Meta Keywords",
      type: "string",
    },
    {
      name: "docuContent",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "maintenanceServices",
      title: "Maintenance Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "serviceTitle",
              title: "Service Title",
              type: "string",
            },
            {
              name: "content",
              title: "Content",
              type: "array",
              of: [
                {
                  type: "block",
                },
              ],
            },
            
          ],
        },
      ],
    },
  ],
};
