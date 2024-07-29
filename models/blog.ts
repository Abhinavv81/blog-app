import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
        type: String,
        required: false,
        },
    content: {
      type: String,
      required: false,
    },
    tags: [
      {
        type: String,
        required: false,
      },
    ],
    isPublished: {
      type: Boolean,
      required: true,
      default: false,
    },
    coverImage: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
export default Blog;
