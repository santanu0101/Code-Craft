import mongoose, {Schema} from "mongoose"

const userQuestionSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    questionId: { type: mongoose.Schema.Types.ObjectId, ref: "Question", required: true },
    solved: { type: Boolean, default: false }
  });
  
  export const UserQuestion = mongoose.model("UserQuestion", userQuestionSchema);
  