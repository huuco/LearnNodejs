const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

router.get('/', blogController.blog_index);

router.post('/', blogController.blog_create_post);
router.get('/create', blogController.blog_create_get);

router.post('/update/:id', blogController.blog_update_post);
router.get('/edit/:id', blogController.blog_update_get);


router.get('/:id', blogController.blog_show);
router.delete('/:id', blogController.blog_delete);

module.exports = router;