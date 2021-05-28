export default {
  title: "CV List",
  name: "cv-list",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "cvs",
      title: "CVs",
      type: "array",
      of: [
        // Document reference
        {
          type: "reference",
          title: "CV reference",
          to: [{ type: "cv" }],
        },

        // Document used as an object
        { type: "cv" },
      ]
    }
  ]
};

