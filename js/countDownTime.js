$(function () {
    var _now = new Date().getTime();
    $(".count_down_time").each(function(i){
        updateEndTime($(".count_down_time").eq(i),_now, null);
        var _timer = setInterval(function(){
            _now = new Date().getTime()
            updateEndTime($(".count_down_time").eq(i),_now, _timer)
        },1000)

    });

    function updateEndTime(obj, time, timer){
        var _timer = timer;
        var _endtime = obj.attr("data-time");//结束时间
            
        var _houer = formate(new Date(_endtime).getTime() - time)[0];
        var _min = formate(new Date(_endtime).getTime() - time)[1];
        var _sec = formate(new Date(_endtime).getTime() - time)[2];
        if(Number(_houer) < 10){
            _houer = '0' + _houer;
        }
        if(Number(_min) < 10){
            _min = '0' + _min;
        }
        if(Number(_sec) < 10){
            _sec = '0' + _sec;
        }
        if(parseInt(_houer) <= 0 && parseInt(_min) <= 0 && parseInt(_sec) <= 0){
            clearInterval(_timer);
            obj.find('.hour').text('00');
            obj.find('.min').text('00');
            obj.find('.sec').text('00');
        }else{
            obj.find('.hour').text(_houer);
            obj.find('.min').text(_min);
            obj.find('.sec').text(_sec);
        }
    }

    function formate(time){ 
        var hour = parseInt(time/1000/3600); 
        var min = parseInt((time/1000 - hour * 3600)/60); 
        var sec = parseInt(time/1000 - hour * 3600 - min * 60);
        return [hour,min,sec];
    }
})
