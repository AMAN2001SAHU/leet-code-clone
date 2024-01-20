import mongoose, { model, Document, Schema } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URL || ' ');

interface Testcase {
  title: string;
  output: string;
}

interface Problem extends Document {
  title: string;
  description: string;
  input: string;
  output: string;
  testCases: Testcase[];
}

const problemSchema = new Schema<Problem>({
  title: String,
  description: String,
  input: String,
  output: String,
  testCases: [
    {
      input: String,
      output: String,
    },
  ],
});

const ProblemModel = model<Problem>('Problem', problemSchema);

export default ProblemModel;
