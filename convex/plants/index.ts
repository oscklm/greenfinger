import { v } from "convex/values";
import { Table } from "convex-helpers/server";

export const Plant = Table("plants", {
  userId: v.union(v.id("users"), v.null()),
  name: v.string(),
  notes: v.string(),
  imageId: v.union(v.id("_storage"), v.null()),
  wateringFrequency: v.number(),
});
