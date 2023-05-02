import path from "path";
import fs from "fs";
import * as tjs from "ts-json-schema-generator";

const schema = tjs
  .createGenerator({
    path: path.resolve("./responses/*.d.ts"),
    tsconfig: path.resolve("tsconfig.json"),
    type: "*",
  })
  .createSchema("*");

fs.writeFileSync(
  path.resolve("./schema.json"),
  JSON.stringify(schema, null, 2)
);
