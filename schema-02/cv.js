import education from "./education";
import certification from "./certification";

export default {
  title: "CV",
  name: "cv",
  type: "document",
  preview: {
    select: {
      title: "name",
      subtitle: "title",
      media: "photo",
    }
  },
  fields: [
    {
      title: "Navn",
      name: "name",
      type: "string",
    },
    {
      title: "Tittel",
      name: "title",
      type: "string",
    },
    {
      title: "Bilde",
      name: "photo",
      type: "image",
    },
    {
      title: "Beskrivelse",
      name: "abstract",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Prosjekter",
      name: "projects",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Spisskompetanse",
      name: "competence",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Utdanning",
      name: "education",
      type: "array",
      of: [{ type: "education" }],
    },
    {
      title: "Sertifiseringer",
      name: "certifications",
      type: "array",
      of: [{ type: "certification" }],
    },
    {
      title: "Språk",
      name: "languages",
      type: "array",
      of: [{ type: "string" }],
    }
  ]
};
