$(function(){
    $('.pm_fixed_btn').on('click', 'a', function() {

        /*弹出框1*/
        $.dialog({
            type : 'confirm',
            showTitle:false,
            buttonText : {
                ok : '确定',
                cancel : '取消'
            },
            contentHtml : '<p class="details_diag_1"><span>确认出价：</span><i>￥1400</i></p> <p class="details_diag_1"><span>交纳保证金：</span><i>￥140</i></p>',
            onClickOk:function(){
                console.log(77777);
            }
        });

        /*弹出框2*/
        /*$.dialog({
            type : 'confirm',
            showTitle:false,
            iconStr:'<i class="iconfont pm_dialog_icon aRed">&#xe6ad;</i>',
            buttonText : {
                ok : '确定',
                cancel : '取消'
            },
            contentHtml : '<p class="details_diag_1 center">余额不足，请先充值</p>',
            onClickOk:function(){
                console.log(77777);
            }
        });*/

        /*弹出框3*/
        /*$.dialog({
            type : 'confirm',
            showTitle:false,
            iconStr:'<i class="iconfont pm_dialog_icon aRed">&#xe63a;</i>',
            buttonText : {
                ok : '确定',
                cancel : '取消'
            },
            contentHtml : '<p class="details_diag_1 center">出价成功 </p>',
            onClickOk:function(){
                console.log(77777);
            }
        });*/

        /*弹出框4*/
        /*$.dialog({
            type : 'confirm',
            showTitle:false,
            iconStr:'<i class="iconfont pm_dialog_icon aRed">&#xe603;</i>',
            buttonText : {
                ok : '确定',
                cancel : '取消'
            },
            contentHtml : '<p class="details_diag_1 center">出价必须比当前价高一个阶梯 </p>',
            onClickOk:function(){
                console.log(77777);
            }
        });*/

        /*弹出框5*/
        /*$.dialog({
            type : 'confirm',
            showTitle:false,
            buttonText : {
                ok : '确定',
                cancel : '取消'
            },
            contentHtml : '<p class="details_diag_1"><span>确认设置代理价：</span><i>￥1400</i></p> <p class="details_diag_1"><span>交纳保证金：</span><i>￥140</i></p>',
            onClickOk:function(){
                console.log(77777);
            }
        });*/


        /*弹出框6*/
        /*$.dialog({
            type : 'confirm',
            showTitle:false,
            iconStr:'<i class="iconfont pm_dialog_icon aRed">&#xe63a;</i>',
            buttonText : {
                ok : '确定',
                cancel : '取消'
            },
            contentHtml : '<p class="details_diag_1 center">代理价设置成功  </p>',
            onClickOk:function(){
                console.log(77777);
            }
        });*/
    });
})