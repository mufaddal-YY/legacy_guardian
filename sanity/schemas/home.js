export default {
  name: "home",
  title: "Home",
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
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "subHeadline",
      title: "Sub Headline",
      type: "string",
    },
    {
      name: "problemSlider",
      title: "Problem Slider",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
            {
              name: "sliderImage",
              title: "Slider Images",
              type: "image",
              options: {
                hotspot: true, // <-- Defaults to false
              },
            },
          ],
        },
      ],
    },
    {
      name: "serviceHeadline",
      title: "Service Headline",
      type: "string",
    },
    {
      name: "serviceSub",
      title: "Service Subheader",
      type: "string",
    },
    {
      name: "services",
      title: "Services",
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
              name: "path",
              title: "Path",
              type: "string",
            },
            {
              name: "icon",
              title: "Icon",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "serviceDescription",
              title: "Service Description",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "text",
                      title: "Text",
                      type: "string",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "aboutHeader",
      title: "About Heading",
      type: "string",
    },
    {
      name: "aboutDesc",
      title: "About Description",
      type: "string",
    },
    {
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "statCaption",
              title: "caption",
              type: "string",
            },
            {
              name: "statNumber",
              title: "Stat Number",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "aboutImage",
      title: "About Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "headacheTitle",
      title: "Section Title",
      type: "string",
    },
    {
      name: "headacheDescription",
      title: "Section Description",
      type: "string",
    },
    {
      name: "headacheIcon",
      title: "Image",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
            {
              name: "icon",
              title: "Icon",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },

    {
      name: "process",
      title: "Our Process",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
            {
              name: "icon",
              title: "Icon",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "processImage",
      title: "Process Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
