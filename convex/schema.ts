import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    imageUrl: v.string(),
    userName: v.string(),
    plan: v.optional(v.string()), // ✅ Optional field
  }),

  pdfFiles: defineTable({
    fileId: v.string(),
    fileName: v.string(),
    storageId: v.string(),
    fileUrl: v.string(),
    createdBy: v.string(),
  }),

  documents: defineTable({
    embedding: v.array(v.number()),
    text: v.string(),
    metadata: v.any(),
  }).vectorIndex("byEmbedding", {
    vectorField: "embedding",
    dimensions: 768,
  }),

  notes: defineTable({
    fileId: v.string(),
    notes: v.string(),
    createdBy: v.string(),
  }),
});
