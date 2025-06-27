import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});


export const insertFileToDB = mutation({
  args: {
    fileName: v.string(),
    storageId: v.string(),
    fileId: v.string(),
    createdBy: v.string(),
    fileUrl: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("pdfFiles", {
      fileId: args.fileId,
      storageId: args.storageId,
      fileName: args.fileName,
      fileUrl: args.fileUrl,
      createdBy: args.createdBy,
    });
    return "inserted";
  },
});

export const getFileUrl = mutation({
  args: {
    storageId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});

export const getPdfRecord = query({
  args: {
    fileId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("pdfFiles")
      .filter((q) => q.eq(q.field("fileId"), args.fileId))
      .collect();
  },
});

export const getUserPdfs = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    if (!args.email) return []; // ✅ Always return an array

    const records = await ctx.db
      .query("pdfFiles")
      .filter((q) => q.eq(q.field("createdBy"), args.email))
      .collect();

    return records;
  },
});
