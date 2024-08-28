import { query } from "@/convex/_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export default query(async (ctx) => {
  const userId = await getAuthUserId(ctx);
  if (!userId) {
    throw new Error("Not authenticated, this shouldn't happen here.");
  }

  return await ctx.db
    .query("plants")
    .withIndex("by_userId", (q) => q.eq("userId", userId))
    .collect();
});
