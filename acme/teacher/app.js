import { asyncWrapProviders } from "async_hooks";
import { createConnection } from "mysql2/promise";

import{createInterFace} from 'readline/promises';
import BodyReadable from "undici-types/readable";

const rl=createInterFace({
  input:process.stdin,
  output:process.stdout
});