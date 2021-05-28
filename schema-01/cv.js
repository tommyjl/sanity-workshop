export default {
  title: "CV",
  name: "cv",
  type: "document",

  fields: [
    // Simple types
    {
      title: "Navn",
      name: "name",
      type: "string"
    },
    {
      title: "Tittel",
      name: "title",
      type: "string"
    },

    // Images
    /*
    {
      title: "Bilde",
      name: "photo",
      type: "image"
    },
    //*/

    // Block content
    /*
    {
      title: "Beskrivelse",
      name: "abstract",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      title: "Prosjekter",
      name: "projects",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      title: "Spisskompetanse",
      name: "competence",
      type: "array",
      of: [{ type: "block" }]
    },
    //*/

    // Arrays
    /*
    {
      title: "Språk",
      name: "languages",
      type: "array",
      of: [{ type: "string" }]
    }
    //*/
  ],

  // Configure the preview in Sanity Studio
  /*
  preview: {
    select: {
      title: "name",
      subtitle: "title",
      media: "photo"
    }
  },
  //*/
};
