import mongoose from 'mongoose';

interface Blog {
  title: string,
  content: string
}

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

export const BlogModel = mongoose.model('blog', BlogSchema);
export default Blog;