// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

const app = express();
app.use(cors("https://blog-portfolio-o6lk.vercel.app"))

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connection Successfull")
}).catch((error)=>{
  console.log(error)
})

// Define Schema
const blogSchema = new mongoose.Schema({
  newTitle: String,
  newContent: String,
  date: String,
  likes: Number
});

const Blog = mongoose.model('Blog', blogSchema);

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// Routes, here using get we fetch data from mongo db compass and pass to frontend
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find({});// {}-empty collection, returns everything
    console.log(blogs)
    res.send(blogs)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Patch is used to update part of data (i.e. likes), this route uses patch because it only updates likes count
app.patch('/api/blogs/like/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);//searches the collection and returns the document with that specific _id.
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Increment the likes of the blog post
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true } // This option returns the modified document rather than the original
    );

    res.json(updatedBlog);//it returns to client in JSON format
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.post('/api/blogs', async (req, res) => {

  const blog = new Blog({
    newTitle: req.body.newTitle,
    newContent: req.body.newContent,
    date: req.body.date,
    likes: req.body.likes
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

