$(window).resize(function(){
	$('html').css({'font-size':$(window).width() / 3.2 + "px"});
})

$(function(){
	$('html').css({'font-size':$(window).width() / 3.2 + "px"});

	/*首页*/
	if($('.index_main').length > 0){
		var swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        paginationClickable: true
	    });
	}

	if($('#tablist').length>0){
		$('.tab_nav li').on('click',function(){
			var _index=$(this).index();
			$(this).find('a').addClass('active');
			$(this).siblings().find('a').removeClass('active');
			$('.tab_con').hide();
			$(this).parents('.tab_nav').siblings('.tab_cons').children('.tab_con').eq(_index).show();;
		})
	}

	if($('#tablist').length>0){
		$('.tab_nav li').on('click',function(){
			var _index=$(this).index();
			$(this).find('a').addClass('active');
			$(this).siblings().find('a').removeClass('active');
			//$('.tab_con').hide();
			$(this).parents('.tab_nav').siblings('.tab_cons').children('.tab_con').hide().eq(_index).show();
		})
	}
	
	if($('.myorder').length>0){
		$('.myorder_nav ul li').on('click',function(e){
			e.stopPropagation();
			var _index=$(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			$('.myorder_tab').hide().eq(_index).show();
		});
		$('.tab_nav ul li a').on('click',function(e){
			e.stopPropagation();
			var _index=$(this).parent().index();
			$(this).addClass('active').parents('li').siblings().children('a').removeClass('active');
			$(this).parents('.tab_nav').siblings().find('.tab_tab').hide().eq(_index).show();
		})
	}

	/*资料*/
	if($('.zl_main').length > 0){
		$("input[name='mysex']").on('click',function(){
            if($(this).is(':checked')){
            	$("input[name='mysex']").siblings('.myradio').removeClass('radio_on');
                $(this).siblings('.myradio').addClass('radio_on')
            }
        })

        $('.input').on('click', function(event) {
        	$('.err').html('');
        });

        $('#save_btn').on('click', function() {
        	var _name = $("input[name='name']").val();
        	var _tel = $("input[name='tel']").val();
        	var _mail = $("input[name='mail']").val();
        	var _form = $('.zl_main form');
        	if(_name == ''){
	    		$('.err').html('*请填写姓名');
	    		return false;
	    	}
	    	if(_tel == ''){
	    		$('.err').html('*请填写电话');
	    		return false;
	    	}else if(!isPhoneNo(_tel)){
	    		$('.err').html('*请填写正确的电话');
	    		return false;
	    	}
        	if(_mail == ''){
				$('.err').html('*请输入邮箱地址');
				return false;
			}else if(!isEmail(_mail)){
				$('.err').html('*请输入正确的邮箱地址');
				return false;
			}

			_form.submit();
        });
	}


	/*去支付页面*/
	if($('.qzf_main').length > 0){
		/*收件地址 单选框*/
		$("input[name='myaddress']").on('click',function(){
            if($(this).is(':checked')){
            	$("input[name='myaddress']").siblings('.myradio').removeClass('radio_on');
                $(this).siblings('.myradio').addClass('radio_on')
            }
        })

        $("input[name='bzj_checkbox']").on('click',function(){
            if($(this).is(':checked')){
                $(this).siblings('.mycheck').addClass('check_on')
            }else{
            	$(this).siblings('.mycheck').removeClass('check_on')
            }
        })

        $("input[name='agreement_checkbox']").on('click',function(){
            if($(this).is(':checked')){
                $(this).siblings('.mycheck').addClass('check_on')
            }else{
            	$(this).siblings('.mycheck').removeClass('check_on')
            }
        })

        /*支付方式 单选框*/
        $("input[name='payment']").on('click',function(){
            if($(this).is(':checked')){
            	$("input[name='payment']").siblings('.myradio').removeClass('radio_on');
                $(this).siblings('.myradio').addClass('radio_on')
            }
        })
	}


	/*实名认证*/
	if($('.smrz_main').length > 0){
		$('.smrz_btn').each(function(index, val) {
			$('.smrz_btn').eq(index).on('click',  function() {
				$('.smrz_item input').val('');
				if($('.smrz_item').eq(index).is(':hidden')){
					$('.smrz_item').hide().eq(index).show();
				}else{
					$('.smrz_item').hide()
				}
			});
		});

		$('.smrz_item').on('click', 'input', function() {
			$('.err').html('');
		});

		$('.smrz_item_2').on('click', '.btn a', function() {
			var _form = $('.smrz_item_2').find('form');
			var _pass_1 = $("input[name='pass_1']").val();
			var _pass_2 = $("input[name='pass_2']").val();
			var _pass_3 = $("input[name='pass_3']").val();
			var _err = $(this).parent('.btn').siblings('.err');
			if(_pass_1 == ''){
				_err.html('*请输入原密码');
				return false;
			}
			if(_pass_1.length < 6){
				_err.html('请输入正确的原密码');
				return false;
			}
			if(_pass_2 == '' || _pass_3 ==''){
				_err.html('*请输入新密码');
				return false;
			}
			if(_pass_2.length < 6 || _pass_3.length < 6){
				_err.html('*请输入的大于6位数的密码');
				return false;
			}
			
			_form.submit();
		});

		$('.smrz_item_3').on('click', '.btn a', function() {
			var _form = $('.smrz_item_3').find('form');
			var _mail = $("input[name='mail']").val();
			var _yzm = $("input[name='yzm']").val();
			var _err = $(this).parent('.btn').siblings('.err');
			if(_mail == ''){
				_err.html('*请输入邮箱地址');
				return false;
			}else if(!isEmail(_mail)){
				_err.html('*请输入正确的邮箱地址');
				return false;
			}
			if(_yzm == ''){
				_err.html('*请输入验证码');
				return false;
			}

			_form.submit();
		});

		$('.getcode').CountDown({
			type:'mail',
            data:'data-count-mail',
            dataErr:'#err3',
            num:5,
            validateback:function(info, content){
                //info   当前手机号码 或者邮箱 
                //验证手机是否存在的回调函数，数组 [true/false, 错误提示]
                //ajax 需要设置异步
                state = true;
                err = '邮箱不存在!!!!!!!!';
                content = [state, err];
                return content;
            },
            callback:function(){
            	
            }
        });
	}

	/*实名认证-身份证上传*/
	if($('.smrzsc_main').length > 0){
		$('.smrzsc_form').on('click', 'input', function() {
			$('.err').html('');
		});
		$('.smrzsc_form').on('click', '.btn a', function() {
			var _form = $('.smrzsc_form').find('form');
			var _name = $("input[name='name']").val();
			var _err = $(this).parent('.btn').siblings('.err');
			if(_name == ''){
				_err.html('*请输入真实姓名');
				return false;
			}

			_form.submit();
		});
	}
	

	/*收货地址*/
	if($('.address_main').length > 0){
		//城市联动
		var area = new LArea();
	    area.init({
	        'trigger': '#city1',
	        'valueTo': '#city2',
	        'keys': {
	            id: 'value',
	            name: 'text'
	        },
	        'type': 2,
	        'data': [provs_data, citys_data, dists_data]
	    });

	    $('.address_main').on('click', 'input', function(event) {
	    	$('.address_main .err').html('');
	    });
	    $('.address_btn a').on('click',  function() {
	    	var _name = $("input[name='name']").val();
	    	var _tel = $("input[name='tel']").val();
	    	var _area = $("input[name='area']").val();
	    	var _form = $('.address_main form');
	    	if(_name == ''){
	    		$('.address_main .err').html('*请填写姓名');
	    		return false;
	    	}
	    	if(_tel == ''){
	    		$('.address_main .err').html('*请填写电话');
	    		return false;
	    	}else if(!isPhoneNo(_tel)){
	    		$('.address_main .err').html('*请填写正确的电话');
	    		return false;
	    	}
	    	if(_area == ''){
	    		$('.address_main .err').html('*请填写详细地址');
	    		return false;
	    	}else if(_area.length < 6){
	    		$('.address_main .err').html('*请填写详细地址，不少于5个字');
	    		return false;
	    	}
	    	_form.submit();
	    });
	}

	/*提现*/
	if($('.tx_main').length > 0){
		if(Number($('#bank_state').val()) == 1){
			$.dialog({
	            type : 'confirm',
	            showTitle:false,
	            iconStr:'<i class="iconfont pm_dialog_icon aRed">&#xe6ad;</i>',
	            buttonText : {
	                ok : '绑定',
	                cancel : '取消'
	            },
	            contentHtml : '<p class="details_diag_1 center">请先绑定银行卡</p>',
	            onClickOk:function(){
	                console.log(77777);
	            }
	        });
		}
		$('.tx_item').on('click', 'input', function() {
			$('.err').html('');
		});
		$('.tx_btn a').on('click',  function() {
			var _price = $("input[name='price']").val();
			var _tel = $("input[name='tel']").val();
			var _yzm = $("input[name='yzm']").val();
			var _form = $('.tx_main form');
			if(_price == ''){
				$('.err').html('*请输入提现金额');
				return false;
			}else if(!isNumFloat(_price)){
				$('.err').html('*请输入正确的提现金额');
				return false;
			}
			if(_tel == ''){
				$('.err').html('*请输入手机号码');
				return false;
			}else if(!isPhoneNo(_tel)){
				$('.err').html('*请输入正确的手机号码');
				return false;
			}
			if(_yzm == ''){
				$('.err').html('*请输入验证码');
				return false;
			}

			$.dialog({
	            type : 'timeout',
	            showTitle:false,
	            autoClose:1000,
	            iconStr:'<i class="iconfont pm_dialog_icon aRed">&#xe6ad;</i>',
	            contentHtml : '<p class="details_diag_1 center">申请提现成功</p><p class="details_diag_1 center">预计两小时内到账</p>',
	            onClosed:function(){
	                _form.submit();
	            }
	        });

		});

		/*获取验证码*/
		$('.getcode').CountDown({
            data:'data-count-down',
            dataErr:'.err',
            num:5,
            validateback:function(info, content){
                //info   当前手机号码 或者邮箱 
                //验证手机是否存在的回调函数，数组 [true/false, 错误提示]
                //ajax 需要异步请求
                state = true;
                err = '手机不存在!!!!!!!!';
                content = [state, err];
                return content;
            },
            callback:function(){
            	
            }
        });
	}



	/*银行卡绑定*/
	if($('.yhkbd_main').length > 0){
		$('.yhkbd_select').on('click', '.input', function() {
			var _ul = $(this).siblings('ul');
			if(_ul.is(':hidden')){
				_ul.show();
			}else{
				_ul.hide();
			}
		});
		$('.yhkbd_select').on('click', 'li', function(event) {
			var _id = $(this).attr('data-id');
			var _str = $(this).html();
			$(this).parents('ul').siblings('.input').val(_str);
			$(this).parents('ul').siblings('#bank_id').val(_id);
			$(this).parents('ul').hide();
		});

		$('.yhkbd_item').on('click', '.input', function(event) {
			$('.err').html('');
		});
		$('.yhkbd_btn a').on('click',  function() {
			var _yhk = $("input[name='yhk']").val();
			var _tel = $("input[name='tel']").val();
			var _yzm = $("input[name='yzm']").val();
			var _form = $('.yhkbd_main form');
			if(_yhk == ''){
				$('.err').html('*请输入银行卡');
				return false;
			}
			if(_tel == ''){
				$('.err').html('*请输入手机号码');
				return false;
			}else if(!isPhoneNo(_tel)){
				$('.err').html('*请输入正确的手机号码');
				return false;
			}
			if(_yzm == ''){
				$('.err').html('*请输入验证码');
				return false;
			}

			_form.submit();
		});

		/*获取验证码*/
		$('.getcode').CountDown({
            data:'data-count-down',
            dataErr:'.err',
            num:5,
            validateback:function(info, content){
                //info   当前手机号码 或者邮箱 
                //验证手机是否存在的回调函数，数组 [true/false, 错误提示]
                //ajax 需要异步请求
                state = true;
                err = '手机不存在!!!!!!!!';
                content = [state, err];
                return content;
            },
            callback:function(){
            	
            }
        });
	}
})


/*正则验证*/
/*手机号码验证*/
function isPhoneNo(phone) { 
    var pattern = /^1[34578]\d{9}$/; 
    return pattern.test(phone); 
}
/*数字验证*/
function isNum(num) { 
    var pattern = /^[0-9]*$/; 
    return pattern.test(num); 
}
/*数字及小数点验证*/
function isNumFloat(num) { 
    var pattern = /^[0-9.]*$/; 
    return pattern.test(num); 
}
/*中文验证*/
function isChina(str) { 
    var pattern = /[^u4E00-u9FA5]/g; 
    return pattern.test(str); 
}
/*身份证验证*/
function isSfz(num) { 
    var pattern = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/; 
    return pattern.test(num); 
}
/*邮箱验证*/
function isEmail(str) { 
    var pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ ; 
    return pattern.test(str); 
}
/*密码验证*/
function isPasswordNo(password) {
    var pattern = /\w$/;
    return pattern.test(password);
}