"use server";
import { model, models, Schema, Document, Model } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  displayImage?: string;
  isAdmin: boolean;
  bio?: string;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  displayImage: {
    type: String,
    required: false,
  },

  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },

  bio: {
    type: String,
    required: false,
  },
});

const UserModel: Model<IUser> =
  models?.User || model<IUser>("User", userSchema);

export default UserModel;
