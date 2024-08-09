import mongoose, { model, models, Schema } from "mongoose";

const userSchema = new Schema({

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
  
  bio:{
      type:String,
      required:false
  },
    
});

const User = models.User || model("User", userSchema);
export default User;
