import { query } from "./_generated/server";
import { v } from "convex/values";

export const getAllVolumes = query({
  args: {},
  handler: async (ctx) => {
    const volumes = await ctx.db.query("volumes").collect();

    // Get article counts for each volume
    const volumesWithCounts = await Promise.all(
      volumes.map(async (volume) => {
        const articles = await ctx.db
          .query("articles")
          .withIndex("by_volume", (q) => q.eq("volumeId", volume._id))
          .collect();

        return {
          ...volume,
          articleCount: articles.length,
        };
      })
    );

    return volumesWithCounts;
  },
});

export const getVolumeById = query({
  args: { volumeId: v.string() },
  handler: async (ctx, args) => {
    const volume = await ctx.db.get(args.volumeId as any);
    return volume;
  },
});

export const getCurrentVolume = query({
  args: {},
  handler: async (ctx) => {
    const volume = await ctx.db
      .query("volumes")
      .filter((q) => q.eq(q.field("isCurrent"), true))
      .first();
    return volume;
  },
});
