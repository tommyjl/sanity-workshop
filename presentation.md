---
title:
- Sanity workshop
author:
- Tommy Joe Lund
date:
- 2021-05-28
theme:
- CambridgeUS
classoption: "aspectratio=169"
---

# Generelt

- Headless CMS
- Gratisversjon
- De kan kontaktes via:
    - Offentlig Slack
    - Enterprise Slack

# Nyttige lenker

## Sanity

- Forside: <https://www.sanity.io/>
- Prosjekter: <https://manage.sanity.io/>
- Dokumentasjon: <https://www.sanity.io/docs>
- GitHub: <https://github.com/sanity-io/sanity>

## Workshop

Presentasjon og workshop er tilgjengelig på <https://github.com/tommyjl/sanity-workshop>

# Oppgave: Oppsett

## Clone workshop repo

```
git clone https://github.com/tommyjl/sanity-workshop.git
cd sanity-workshop
```

## Opprett Sanity bruker

Gå til <https://manage.sanity.io/> og opprett bruker

## Installer sanity-cli

- Requirements: node/npm
- `npm install -g @sanity/cli`

# Sanity Studio

- Kjører lokalt
- Må deployes og vedlikeholdes

# Oppgave: Sanity Studio

## Opprett prosjekt

```
mkdir sanity
cd sanity
npm init
```

## Deploy Sanity Studio

```
sanity deploy
```

# Schema

- <https://www.sanity.io/docs/schema-types>
- <https://www.sanity.io/docs/content-modelling>
- Workshop repo schemas under `schema-.*`

# Oppgave: CV Document

## Oppdatere `sanity/schemas/schema.js` til å hente schema typer fra `schema-workshop`.

```javascript
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import workshopTypes from "../../schema-workshop";

export default createSchema({
  name: 'default',
  types: schemaTypes.concat(workshopTypes),
})
```

## Opprett et dokument

- Opprett et CV-dokument
- Legg til et tekst-felt for navn
- Legg til et tekst-felt for beskrivelse

# Assets

## Bilder

- <https://www.sanity.io/docs/image-type>

## Filer

- <https://www.sanity.io/docs/file-type>

# Preview

- <https://www.sanity.io/docs/previews-list-views>

# Oppgave: Bilder, preview

- Legg til et felt for bilde
- Endre preview til å vise bilde, navn øverst, og stillingstittel nederst

# Arrays, riktekst

## Arrays

- <https://www.sanity.io/docs/array-type>

## Riktekst

- Kjent som _block content_
- <https://www.sanity.io/docs/block-type>
- <https://www.sanity.io/docs/block-content>

## Inspect modus

Ligger øverst til høyre under ...-menyen

# Oppgave: Arrays og riktekst

- Legg til en array med språk
- Legg til riktekstfelt for beskrivelse
- Legg til riktekstfelt for prosjekter

# Objekter

- Må legges til i schema på samme måte som dokumenter
- Kan brukes som egen custom 'type'.
- Dokumenter kan også brukes som om de var objekter
- <https://www.sanity.io/docs/object-type>

# Oppgave: Objekter

- Opprett et objekt for utdanning
- Opprett et objekt for sertifiseringer
- Opprett et dokument for cv-lister
- Legg til custom preview for objektene

# Referanser

- <https://www.sanity.io/docs/reference-type>

# Oppgave: Referanser

- Legg til et dokument for CV-lister
- Inkluder en referanse til CV

# Språk

- Ikke innbakt
- Finnes plugins
- <https://www.sanity.io/docs/localization>

# Datasets

## CLI

```
Commands:
   create      Create a new dataset within your project
   delete      Delete a dataset within your project
   list        List datasets of your project

   export      Export dataset to local filesystem as a gzipped tarball
   import      Import documents to given dataset from ndjson file
```

## Experimental spaces

- <https://www.sanity.io/docs/spaces>

# GROQ-queries

## Eksempler

Finnes under `sanity-api-examples`

## Hent alt

```
*[]
```

## Hent dokument-type

F.eks. hvis vi vil hente alle CVer:

```
*[_type == "cv"]
```

## Hent spesifikt dokument

F.eks. hvis vi vil hente dokument med id '69f1279b-1c68-486b-82bb-42bb9b40de9f':

```
*[_id == "69f1279b-1c68-486b-82bb-42bb9b40de9f"][0]
```

# Oppgave: GROQ

Kjør eksemplene under mappen `sanity-api-examples` med verdier fra din Sanity.

# GraphQL

## Caveats

- Ikke alle Sanity schema kan deployes som GraphQL
- Må deployes og vedlikeholdes separat fra Sanity Studio
- De fleste schema-endringer er breaking eller dangerous
- Genererte typenavn kan kollidere med brukerdefinerte typenavn
- Treghet ved bruk av fragments

## CLI

- Deploy: `sanity graphql deploy --dataset <dataset> --tag <tag>`
- Undeploy: `sanity graphql undeploy --dataset <dataset> --tag <tag>`
- List: `sanity graphql list`

## Btw

- Finnes tredjepartsverktøy for å definere Sanity-schema med GraphQL-definisjoner

# Oppgave: GraphQL

- Deploy graphql schema med playground
- Kjør noen graphql queries i playground

# Real-time APIs

## Webhooks

- Kan opprettes i GUI:
    - <https://manage.sanity.io/projects/:projectId:/settings/api>
- Eller CLI:
    - List eksisterende: `sanity hook list`
    - Opprett: `sanity hook create`
    - Slett: `sanity hook delete`
    - Vis logger: `sanity hook logs`

## Server-Sent Events

- Dårlig erfaring
- Connection droppes alltid etter 30 min
- Umulig å reconnecte

# Oppgave: Webhooks

1. Gå til <https://webhook.site/>
2. Opprett en webhook som går til din unike URL
3. Gjør endringer i Sanity og publiser dem
4. Inspiser logger og requests

# Oppgave: Workshop eksamen

## Oppgave

Lag en app basert på det vi har lært så langt.

## Obs!

Pass på at CORS-settings tillater host, f.eks. http://localhost:3000. Dette kan
settes opp under settings for prosjekt via <https://manage.sanity.io/>.

# CI/CD

## Sanity

```
sanity deploy
sanity graphql deploy
```

## App

```
react-scripts build
gh-pages -d build
```
