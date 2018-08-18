const Goods=require('../../model/goods.js');
module.exports={
    list:function(req,res){
        Goods.find({},function(err,data){
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
        //var g_id=parseInt(Math.random()*10000)
        console.log(req.body,req.query,req.param)
        var goods_data={
            picUrl:req.body.picUrl,
            goodsName:req.body.goodsName,
            price: req.body.price,
            desc:req.body.desc,
            type:req.body.type,
            goodsCode:req.body.goodsCode,
        }
        Goods.create(goods_data, function (err, data) {
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
        var goods_data={
            _id:req.query.id,
        }
        Goods.remove(goods_data, function (err, data) {
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
