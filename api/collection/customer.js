const Customer=require('../../model/customer.js');
const Unit=require('../../unit/unit.js');
module.exports={
    list:function(req,res){
        Customer.find({},function(err,data){
            if (err) {
                //console.log(err)
                var res_f={
                    status:false,
                    message:'失败'
                }
                return res.json(res_f);
            }
            var res_t={
                status:true,
                message:'成功',
                data:data
            }
            return res.json(res_t);
        })
    },
    create:function(req,res){
        var c_date=Unit.nowTime();
        var ps='a123456';
        if(req.body.password){
            ps= req.body.password
        }
        var post_data={
            username:req.body.username,
            password:ps,
            mobile: req.body.mobile,
            createDate:c_date
        }
        Customer.create(post_data, function (err, data) {
            if (err) {
                //console.log(err)
                var res_f={
                    status:false,
                    message:'失败'
                }
                return res.json(res_f);
            }
            var res_t={
                status:true,
                message:'成功'
            }
            return res.json(res_t);
        })
    },
    delete:function(req,res){
        //var g_id=parseInt(Math.random()*10000)
        console.log(req.body,req.query,req.param)
        var post_data={
            _id:req.query.id,
        }
        Customer.remove(post_data, function (err, data) {
            if (err) {
                //console.log(err)
                var res_f={
                    status:false,
                    message:'失败'
                }
                return res.json(res_f);
            }
            var res_t={
                status:true,
                message:'成功'
            }
            return res.json(res_t);
        })
    }
}