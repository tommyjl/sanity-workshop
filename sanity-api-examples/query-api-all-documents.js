const fetch = require("node-fetch");
const { projectId, dataset } = require("../sanity/sanity.json").api;

const url = `https://${projectId}.api.sanity.io/v2021-05-28/data/query/${dataset}?query=*[]`;
console.log("GET", url);

fetch(url)
  .then(result => result.json())
  .then(result => console.log(JSON.stringify(result, null, 2)))
  .catch(e => console.error(e));
