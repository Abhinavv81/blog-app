import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    userName:{
      type:String,
      require:true
    },
    displayImage:{
      type:String,
      require:false
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
    comments: [
      {
        userId: {
          type: String,
          required: true,
        },
        userName: {
          type: String,
          required: true,
        },
        displayImage: {
          type: String,
          required: false,
        },
        comment: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    likes: [
      {
        userId: {
          type: String,
          required: true,
        },
      },
    ],
    likeCount: {
      type: Number,
      default: 0,
    },
    shareCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
export default Blog;
