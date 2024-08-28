import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { Plant } from "./plants";

const schema = defineSchema({
  ...authTables,
  plants: Plant.table.index("by_userId", ["userId"]),
});

export default schema;
