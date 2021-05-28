# Sanity workshop

## Presentation

- Available as plaintext in presentation.md
- Slides
    - Requirements: pandoc, latex
    - Run `make` to build and open

## Tasks

### Init

Initialise Sanity Studio in a folder called sanity.

```
mkdir sanity
cd sanity
sanity init
```

### Prepare schemas/schema.js

The root folder of this repo contains a number of schema directories that will
be used in the workshop.

```javascript
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import workshopTypes from "../../schema-workshop";

export default createSchema({
  name: 'default',
  types: schemaTypes.concat(workshopTypes),
})
```
