export default {
    name: "education",
    type: "object",
    //*
    preview: {
        select: {
            title: "title",
            date: "date",
            institution: "institution"
        },
        prepare: ({ title, date, institution }) => ({
            title: `[${new Date(date).getFullYear()}] ${title}`,
            subtitle: institution
        })
    },
    //*/
    fields: [
        {
            title: "Tittel",
            name: "title",
            type: "string"
        },
        {
            title: "Institusjon",
            name: "institution",
            type: "string"
        },
        {
            title: "Dato",
            name: "date",
            type: "date"
        },
    ]
}
