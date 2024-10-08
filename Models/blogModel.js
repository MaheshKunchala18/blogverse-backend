import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    thumbnail: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        maxlength: 200,
    },
    topic_tags: [{
        type: String,
        required: true,
    }],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date_uploaded: {
        type: Date,
        default: Date.now,
    },
    content_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Content',
        required: true,
    },
    images: [{
        type: String,
    }],
    views: {
        type: Number,
        default: 0,
    },
    upvotes: {
        type: Number,
        default: 0,
    },
    downvotes: {
        type: Number,
        default: 0,
    }
}, { collection: 'blogs' });

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;