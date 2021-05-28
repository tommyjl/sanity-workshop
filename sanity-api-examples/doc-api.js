const fetch = require("node-fetch");
const { projectId, dataset } = require("../sanity/sanity.json").api;

const documentId = process.argv[2];
if (!documentId) {
  console.error("Add a documentId as a terminal argument or modify source");
  process.exit(1);
}

const url = `https://${projectId}.api.sanity.io/v2021-05-28/data/doc/${dataset}/${documentId}`;
console.log("GET", url);

fetch(url)
  .then(result => result.json())
  .then(result => console.log(JSON.stringify(result, null, 2)))
  .catch(e => console.error(e));
