import * as path from "path";
import * as tjs from "ts-json-schema-generator";
import Ajv from "ajv";
import axios from "axios";
import { config } from "dotenv";
import { Logger } from "@blazingworks/logger";
import PrettyConsoleTransport from "@blazingworks/logger-transport-prettyconsole";
import { LogLevel } from "@blazingworks/logger/enums";
config();

const tests = [
  require("./responses/testing").default,
  require("./responses/player").default,
  require("./responses/network").default,
  require("./responses/paintsquad").default,
];

function get(url: string) {
  return axios.get(`https://api.xenyria.net${url}`, {
    headers: {
      Authorization: `Xen-Token ${process.env.XENYRIA_TOKEN}`,
    },
    validateStatus: () => true,
  });
}

const failedEndpoints = [];

async function test(i: string, endpoint: string) {
  const validate = ajv.getSchema(`#/definitions/${i}`);
  const response = await get(endpoint);
  if (!validate) {
    failedEndpoints.push(endpoint);
    logger.error(`FAIL ${endpoint} - No schema found for ${i}`);
    return false;
  }
  if (!validate(response.data || {})) {
    failedEndpoints.push(endpoint);
    logger.error(
      `FAIL ${endpoint} - ${JSON.stringify(
        validate.errors.map((e) => e.message).join(", ")
      )}`
    );
    if (process.env.DETAILS === "true") {
      console.log(JSON.stringify(validate.errors, null, 2));
    }
    return false;
  }
  logger.info(`PASS ${endpoint}`);
  return true;
}

const logger = new Logger({
  transports: [
    {
      module: new PrettyConsoleTransport(),
      levels: [
        LogLevel.Info,
        LogLevel.Error,
        LogLevel.Warn,
        LogLevel.Debug,
      ].filter((l) => l !== LogLevel.Debug || process.env.DEBUG === "true"),
    },
  ],
});

const schema = tjs
  .createGenerator({
    path: path.resolve("./responses/*.d.ts"),
    tsconfig: path.resolve("tsconfig.json"),
    type: "*",
  })
  .createSchema("*");

const ajv = new Ajv();
ajv.compile(schema);

const promises = [];

tests.forEach((testFile) =>
  promises.push(testFile({ ajv, get, logger, test }))
);

Promise.all(promises).then(() => {
  if (failedEndpoints.length > 0) process.exit(1);
  process.exit(0);
});
