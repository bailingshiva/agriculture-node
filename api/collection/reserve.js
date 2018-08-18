const Reserve=require('../../model/reserve.js');
const Goods=require('../../model/goods.js');
const Customer=require('../../model/customer.js');
const Unit=require('../../unit/unit.js');
module.exports= {
    list: function (req, res) {
        /*Reserve.aggregate().limit(10).exec(function (err, data) {
            if (err) {
                //console.log(err)
                var res_f = {
                    status: false,
                    message: '失败'
                }
                return res.json(res_f);
            }
            var res_t = {
                status: true,
                message: '成功',
                data: data
            }
            return res.json(res_t);
        });*/
        Reserve.find({})
            .populate({path: 'goodsId', select: 'goodsCode goodsName -_id'})
            .populate({path: 'customerId',  select: 'username mobile -_id'}).exec(function (err, data) {
            if (err) {
                //console.log(err)
                var res_f = {
                    status: false,
                    message: '失败'
                }
                return res.json(res_f);
            }
            /*var r_data=data.aggregate(
                {$project:{
                    goodsName:"$goodsId.goodsName",
                    goodsCode:"$goodsId.goodsCode",
                    username:"$customerId.username",
                    mobile:"$customerId.mobile"
                }})*/
            var r_data=[];
            data.forEach(function(item,index) {
                console.log(item)
                var c={
                    id:item._id,
                    goodsName:item.goodsId?item.goodsId.goodsName:'',
                    goodsCode:item.goodsId?item.goodsId.goodsCode:'',
                    username:item.customerId?item.customerId.username:'',
                    mobile:item.customerId?item.customerId.mobile:'',
                }
                r_data.push(c)
            })

            var res_t = {
                status: true,
                message: '成功',
                data: r_data
            }
            return res.json(res_t);
        })
    },
    create:function(req,res){
        var post_data={
            customerId:req.body.customerId,
            goodsId:req.body.goodsId,
            createDate: Unit.nowTime(),
        }
        Reserve.create(post_data, function (err, data) {
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
        Reserve.remove(post_data, function (err, data) {
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