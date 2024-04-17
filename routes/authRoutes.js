const expess = require('express');
const router = expess.Router();
const {signup, signin} = require('../controller/AuthController');



router.post('/signup', signup);
// POST -: http://localhost:5000/api/auth/signup
// Body -> row -> JSON
// {
//     "firstName" : "Rushikesh",
//     "lastName" : "Ingale",
//     "phoneNumber" : "7447640984",
//     "profilePic" : "https://firebasestorage.googleapis.com/v0/b/uploadingimage-dbca7.appspot.com/o/images%2F1.jpg110b42b8-6156-4125-8eb8-c03f03e92fc4?alt=media&token=fb7bfaa6-a041-4758-a0ea-a4e5e517b408"
// }


router.post('/signin', signin)
// POST -: http://localhost:5000/api/auth/signin
// Body -> row -> JSON
// {
//     "phoneNumber" : "7447640893"
// }


module.exports = router;