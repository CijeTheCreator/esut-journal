import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  volumes: defineTable({
    name: v.string(),
    date: v.string(),
    isCurrent: v.boolean(),
  }),

  articles: defineTable({
    volumeId: v.id("volumes"),
    name: v.string(),
    authors: v.array(v.string()),
    pages: v.string(),
    views: v.number(),
    downloads: v.number(),
    publishDate: v.string(),
    pdfUrl: v.string(),
  }).index("by_volume", ["volumeId"]),
});
