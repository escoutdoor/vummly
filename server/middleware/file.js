const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination(req, file, cb)  {
        cb(null, path.join(__dirname, '../../client/public/assets/images/avatars/') );

    },
    filename(req, file, cb) {
        cb(null, "a" + Math.random().toString(16).slice(2) + path.extname(file.originalname))
    }
})

const types = ['image/png', 'image/jpeg', 'image/jpg']

const fileFilter = (req, f, cb) => {
    if(types.includes(f.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

module.exports = multer({storage, fileFilter})