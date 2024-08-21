import { query } from "@/convex/_generated/server";

export default query(async (ctx) => {
  return await ctx.db.query("plants").collect();
});
