module.exports={
    nowTime:function(){
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        var c_date=year+'-'+month+'-'+day+'  '+hour+':'+minute+':'+second;
        return c_date
    }
}