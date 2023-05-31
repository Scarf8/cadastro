const multer = require ('multer')

module.exports = multer({
    Storage:multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, './src/public/images/user')
        },
        filename: function(req, file, cb){
            const uniqueSuffix = '-' + Date.now() + '-' + file.originalname
            cb(null, file.fieldname + uniqueSuffix)
        }
    })
})