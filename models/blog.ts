import { model, models, Schema, Document, Model } from "mongoose";

interface IBlog extends Document {
  userId: string;
  userName: string;
  displayImage?: string;
  title: string;
  description?: string;
  content?: string;
  isPublished: boolean;
  coverImage?: string;
  icon?: string;
  comments: {
    userId: string;
    userName: string;
    displayImage?: string;
    comment: string;
    createdAt: Date;
  }[];
  likes: {
    userId: string;
  }[];
  likeCount: number;
  shareCount: number;
}

const BlogSchema = new Schema<IBlog>(
  {
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      require: true,
    },
    displayImage: {
      type: String,
      require: false,
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

const BlogModel: Model<IBlog> =
  models?.Blog || model<IBlog>("Blog", BlogSchema);
export default BlogModel;
