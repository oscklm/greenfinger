import { mutation } from "@/convex/_generated/server";
import { object, partial } from "convex-helpers/validators";
import { Plant } from "..";

export default mutation({
  args: {
    id: Plant._id,
    values: object(partial(Plant.withoutSystemFields)),
  },
  handler: async (ctx, { id, values }) => {
    return ctx.db.patch(id, values);
  },
});
