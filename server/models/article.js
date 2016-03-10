"use strict";
var mongoose = require('mongoose');
// DEFINE THE OBJECT SCHEMA
var articleSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title is required'
    },
    content: {
        type: String,
        default: '',
        trim: true
    }
});
// MAKE THIS PUBLIC SO THE CONTROLLER CAN SEE IT
exports.Article = mongoose.model('Article', articleSchema);

//# sourceMappingURL=article.js.map
