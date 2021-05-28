import "./App.css";
import React, { useState, useEffect } from "react";
import sanity from "./sanity.json";

function getDocuments() {
  const { projectId, dataset } = sanity.api;
  const url = `https://${projectId}.api.sanity.io/v2021-05-28/data/query/${dataset}?query=*[_type == "cv"]`;

  return fetch(url)
    .then(result => result.json())
    .then(result => result.result);
}

function App() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    getDocuments().then(setDocuments);
  }, []);
  return (
    <div>
      <h1>Sanity app example</h1>
      {documents.map(doc => (
        <Cv {...doc} />
      ))}
    </div>
  );
}

function Cv({ name, title }) {
  return (
    <div className="cv">
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  );
}

export default App;
