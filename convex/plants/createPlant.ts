import { v } from "convex/values";
import { mutation } from "../_generated/server";
import { Plant } from ".";

export default mutation({
  args: {
    values: v.object(Plant.withoutSystemFields),
  },
  handler: async (ctx, { values }) => {
    return ctx.db.insert("plants", values);
  },
});
