import { query } from "./_generated/server";
import { v } from "convex/values";

export const getArticlesByVolume = query({
  args: { volumeId: v.id("volumes") },
  handler: async (ctx, args) => {
    const articles = await ctx.db
      .query("articles")
      .withIndex("by_volume", (q) => q.eq("volumeId", args.volumeId))
      .collect();
    
    return articles;
  },
});

export const getArticleById = query({
  args: { articleId: v.id("articles") },
  handler: async (ctx, args) => {
    const article = await ctx.db.get(args.articleId);
    return article;
  },
});

export const getAllArticles = query({
  args: {},
  handler: async (ctx) => {
    const articles = await ctx.db.query("articles").collect();
    return articles;
  },
});