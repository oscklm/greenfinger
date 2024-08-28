import { getAuthUserId } from "@convex-dev/auth/server";
import { query } from "../_generated/server";

export default query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);

    if (!userId) {
      throw new Error("Not authenticated, this shouldn't happen here.");
    }

    // Get the current user document
    return ctx.db.get(userId);
  },
});
