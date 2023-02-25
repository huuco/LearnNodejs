const Blog = require("../models/blogs")

const blog_index = ((req, res) => {
  Blog.find().sort({createdAt: -1})
    .then((blogs) => {
      res.render('./blogs/index', {title: "All Blogs", blogs: blogs});
    })
    .catch((error) => {
      console.log(error);
    });
});

const blog_show = ((req, res) => {
  Blog.findById(req.params.id)
    .then((blog) => {
      res.render('./blogs/show', {title: 'Show', blog: blog});
    })
    .catch((error) => {
      // console.log(error);
      res.status(404).render('404', {title: 'Blog not found '});
    });
});

const blog_create_get = ((req, res) => {
  res.render('./blogs/create', {title: 'Create'});
});

const blog_create_post = (req, res) => {
  console.log('blog_create_post');
  const blog = new Blog(req.body);
  blog.save()
    .then((blog) => {
      res.redirect('/blogs');
    })
    .catch((error) => {
      console.log(error);
      // res.status(404).render('404', {title: 'Blog not found '});
    });
};
const blog_update_get = (req, res) => {
  console.log("blog_update_get");
  Blog.findById(req.params.id)
    .then((blog) => {
      res.render('./blogs/update', {title: "Edit", blog: blog})
    })
    .catch((error) => {
      // console.log(error);
      res.status(404).render('404', {title: 'Blog not found'});
    });
}; 

const blog_update_post = (req, res) => {
  console.log("Submit Update");
  console.log(req.body);
  Blog.findOneAndUpdate({_id: req.params.id}, {$set: req.body})
    .then((blog) => {
      console.log("update success");
      res.redirect('/blogs');
    })
    .catch((error) => {
      console.log(error);

    })
}
const blog_delete = (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then((data) => {
      res.json({redirect: '/blogs'});
    })
    .catch((error) => {
      // console.log(error);
      res.status(404).render('404', {title: 'Blog not found '});
    })
}
module.exports = {
  blog_index,
  blog_show,
  blog_create_get,
  blog_create_post,
  blog_delete,
  blog_update_get,
  blog_update_post
}