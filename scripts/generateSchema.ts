import { writeFileSync } from "fs";
import { importSchema } from "graphql-import";
import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import { join } from "path";

const typesArray = fileLoader(join(__dirname, "../src/**/*.graphql"), {
  recursive: true
});

const importedTypesArray = typesArray.map(el => {
  return importSchema(el);
});

writeFileSync(
  "generated/schema.graphql",
  mergeTypes(importedTypesArray, { all: true })
);
