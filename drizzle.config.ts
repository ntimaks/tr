import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  driver: "turso",
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
  tablesFilter: ["t3_*"],
};
