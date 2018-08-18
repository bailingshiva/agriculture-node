var multer = require('multer');
var pic_name='';
var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./static/images");
    },
    filename: function (req, file, callback) {
        pic_name=file.originalname
        callback(null, file.originalname);
    }
});
var upload = multer({ storage: Storage }).array("imgUploader", 3); //Field name and max count
module.exports={
    uploadImg:function(req,res){
        upload(req, res, function (err) {
            if (err) {
                console.log(err)
                var res_f={
                    status:false,
                    message:'失败'
                }
                return res.json(res_f);
            }
            var res_t={
                status:true,
                message:'成功',
                url:'http://localhost:3030/images/'+pic_name
            }
            return res.json(res_t);
        });
    }
}


