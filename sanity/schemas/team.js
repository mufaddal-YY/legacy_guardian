export default {
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "designation",
      title: "Designation",
      type: "string",
    },
    {
      name: "linkedin",
      title: "Linkedin",
      type: "string",
    },
  ],
};
