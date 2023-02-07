import * as dotenv from "dotenv";

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case "test":
    path = `${__dirname}/../.env.tst`;
    break;
  case "production":
    path = `${__dirname}/../.env.prd`;
    break;
  default:
    path = `${__dirname}/../.env.dev`;
}
dotenv.config({ path: path });

export const APP_ID = process.env.APP_ID;
export const LOG_LEVEL = process.env.LOG_LEVEL;

// Environment Specific
export const PORT = process.env.PORT;
